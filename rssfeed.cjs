"use strict";

module.exports.register = function () {
    this.on("beforePublish", ({ siteCatalog, contentCatalog, playbook }) => {
        const siteLink = playbook.site.url;

        // Find page
        const page = contentCatalog.findBy({
            basename: "changelog.adoc",
        })[0];

        // Get page attributes
        const attributes = page.asciidoc.attributes;
        const {
            productname: productName,
            productmajorversion: productMajorVersion,
            doctitle: pageTitle,
            description: pageDescription,
            docname: pageName,
        } = attributes;

        // Get page content
        const content = page.contents.toString();

        console.log("Attributes:", attributes);
        console.log("Content:", content);

        // Create RSS feed
        const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">

<channel>
  <title>${productName} ${productMajorVersion} ${pageTitle}</title>
  <link>${siteLink}/${pageName}</link>
  <description>${pageDescription}</description>
  <item>
    <title>RSS Tutorial</title>
    <link>https://www.w3schools.com/xml/xml_rss.asp</link>
    <description>New RSS tutorial on W3Schools</description>
  </item>
  <item>
    <title>XML Tutorial</title>
    <link>https://www.w3schools.com/xml</link>
    <description>New XML tutorial on W3Schools</description>
  </item>
</channel>

</rss>`;

        // Add RSS feed to site catalog
        siteCatalog.addFile({
            contents: Buffer.from(rss),
            out: { path: "rss.xml" },
        });
    });
};
