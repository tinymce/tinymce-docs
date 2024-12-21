"use strict";

const cheerio = require("cheerio");

module.exports.register = function ({ config }) {
    this.on("beforePublish", ({ siteCatalog, contentCatalog, playbook }) => {
        try {
            // Find the changelog page
            const page = contentCatalog.findBy({
                basename: config.inputFile,
            })[0];

            if (!page) {
                throw new Error(`${config.inputFile} page not found.`);
            }

            // Destructure page attributes
            const {
                productname: productName,
                productmajorversion: productMajorVersion,
                doctitle: pageTitle,
                description: pageDescription,
                docname: pageName,
                "page-component-name": pageComponentName,
                "page-component-version": pageComponentVersion,
            } = page.asciidoc.attributes;

            // Construct site links
            const siteLink = playbook.site.url;
            const siteLinkWithVersion = `${siteLink}/${pageComponentName}/${pageComponentVersion}`;

            // Load page content with cheerio
            const $ = cheerio.load(page.contents.toString());

            // Extract releases
            const releases = $(".sect1")
                .map((_, element) => {
                    const $element = $(element);
                    const linkElement = $element.find("a.xref");
                    let [version, date] = linkElement.text().split(" - ");

                    // Normalize version if it's missing the minor or patch version
                    const versionParts = version.split(".");
                    if (versionParts.length === 1) {
                        version += ".0.0";
                    } else if (versionParts.length === 2) {
                        version += ".0";
                    }

                    // Remove <p> tags inside <li> tags to fix rendering issues
                    const contentElement = $element.find(".sectionbody");
                    contentElement.find("li > p").each((_, pElem) => {
                        $(pElem).replaceWith($(pElem).html());
                    });
                    const content = contentElement.html();

                    return {
                        title: linkElement.text(),
                        link: `${siteLinkWithVersion}/${linkElement
                            .attr("href")
                            .replace("../", "")}`,
                        description: `Changelog for TinyMCE ${version}`,
                        guid: version,
                        pubDate: new Date(date).toUTCString(),
                        content,
                    };
                })
                .get();

            // Generate RSS feed items
            const rssItems = releases
                .map(
                    ({ title, link, description, guid, pubDate, content }) => `
                        <item>
                            <title>${title}</title>
                            <link>${link}</link>
                            <description>${description}</description>
                            <guid isPermaLink="false">${guid}</guid>
                            <pubDate>${pubDate}</pubDate>
                            <content:encoded><![CDATA[${content}]]></content:encoded>
                        </item>`
                )
                .join("\n");

            // Assemble the complete RSS feed
            const rss = `<?xml version="1.0" encoding="UTF-8"?>
            <rss version="2.0"
                xmlns:atom="http://www.w3.org/2005/Atom"
                xmlns:content="http://purl.org/rss/1.0/modules/content/"
            >
                <channel>
                    <title>${productName} ${productMajorVersion} ${pageTitle}</title>
                    <link>${siteLinkWithVersion}/${pageName}</link>
                    <description>${pageDescription}</description>
                    <language>en</language>
                    <copyright>Creative Commons Legal Code - Attribution-NonCommercial-ShareAlike 3.0 Unported</copyright>
                    <atom:link href="${siteLink}/rss.xml" rel="self" type="application/rss+xml" />
                    ${rssItems}
                </channel>
            </rss>`;

            // Add RSS feed to site catalog
            siteCatalog.addFile({
                contents: Buffer.from(rss),
                out: { path: config.outputFile },
            });
            console.log(`RSS feed generated at ${config.outputFile}`);
        } catch (error) {
            // Catch any errors to allow the build to continue
            console.error("Error generating RSS feed:", error);
        }
    });
};
