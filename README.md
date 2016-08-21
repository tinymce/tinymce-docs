# TinyMCE Docs - V3
### Overview
This is the repo for TinyMCE V4 docs which live on the tinymce website [here](tinymce/docs-v3).
It uses jekyll with pages written in markdown to generate a static website. 
Please note that V3, and V4 docs are essentially the same in structure and setup. The content is different and both live in their own repos. 

### Structure
The site structure is defined by nav.yml which lives in the _data folder. Nesting defines the structure (Every nested block is a sub-folder on the disk and subsequently a sub-section when jekyll generates the site) and names correspond to mardkown file names. 

_layouts/default.html is the file where all the markdown data is injected into. So if you want to edit how the html looks like, this is where you do it.

Every section has an index.md page which serves as a table of contents page. 

### Adding New Sections and pages
###### Adding a new page
Say you want to add a page on trump inside advanced. You will add an entry 'trump' under 'advanced' in nav.yml.Next inside the enterprise folder you will create a trump.md

###### Adding a new section
Say you want to add a section 'politics' which has 3 pages. You will add new entries to nav.yml like this

```
- url: "politics"
  pages:
  - url: "trump"
  - url: "clinton"
  - url: "rubio"
```
Next you will create a folder called politics, inside which will be pages trump.md, clinton.md and rubio.md. Finally you need to create an index.md which will be the table of contents page. It has the following structure
```
---
layout: default
title: Politics
description: All about american politics
type: folder
---
{% assign links = site.data.nav[5].pages %}
{% include index.html links=links %}
```
The only thing you need to change here is the digit 5. That is basically the zero based index of where your section appears in the nav.yml. 

### Setup
You will need jekyll installed. Once you have installed it, to generate and serve the docs.

```
./_scripts/init.sh
```

To run the dev version

```
./_scripts/serve.sh
```




