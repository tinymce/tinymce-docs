var headings = document.querySelectorAll('h2,h3');
/* Store last level 2 heading */
var lastHeadingTwo = '';
/* Regex for ISO-like date strings */
var dateRE = /\d{2,4}-\d{1,2}-\d{1,2}/;

function getHref (element)
{
  /*
   * get the href value without the # and return as a string.
   */
  return element.firstChild.attributes.href.value.match(/[^\#]+/).toString();
}

function setHref (element, newValue)
{
  /*
   * set a new href value.
   */
  element.firstChild.attributes.href.value = newValue;
  return element;
}

function fixAnchor (element, newValue)
{
  /*
   * replace the anchor that sits just before the heading in the DOM.
   */
  element.previousSibling.id = newValue;
  return element;
}

function prettyDate (heading, dateRegex)
{
  /* Change ISO-like date to human-readable date. */
  var dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return heading.replace(dateRegex, function(match) { return new Date(match).toLocaleDateString('en-US', dateOptions); });
}

for (var item in headings)
{
  var headingElm = headings[item];
  if (headings.hasOwnProperty(item) && headingElm.firstChild.attributes)
  {
    if (headingElm.tagName === 'H2')
    {
      /* Store the Current level 2 heading */
      lastHeadingTwo = getHref(headingElm);
      /* Update the Heading text to include productname */
      headingElm.firstChild.innerText = "Version " + prettyDate(headingElm.firstChild.innerText, dateRE);
    }
    else if (headingElm.tagName === 'H3')
    {
      setHref(headingElm, '#' + getHref(headingElm) + '_' + lastHeadingTwo);
      fixAnchor(headingElm, getHref(headingElm));
    }
  }
}
