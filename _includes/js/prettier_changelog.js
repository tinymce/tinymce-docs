var headings = document.querySelectorAll('h2,h3');
/* Store last level 2 heading */
var lastHeadingTwo = '';
/* Regex for ISO-like date strings */
var dateRE = new RegExp('\\d{2,4}\\-\\d{1,2}\\-\\d{1,2}');

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
  var date_options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return replaceSubString(heading, dateRegex, getDate(heading, dateRegex).toLocaleDateString('en-US', date_options));
}

function getDate (string, dateRegex)
{
  /* Get date from string and return a date object. */
  return new Date(string.match(dateRegex).toString());
}

function replaceSubString (originalString, dateRegex, substitution)
{
  /* Replace match with a new substring. */
  return originalString.replace(dateRegex, substitution);
}

for (var item in headings)
{
  if (headings.hasOwnProperty(item) && headings[item].firstChild.attributes)
  {
    if (headings[item].tagName === 'H2')
    {
      /* Store the Current level 2 heading */
      lastHeadingTwo = getHref(headings[item]);
      /* Update the Heading text to include productname */
      headings[item].firstChild.innerText = "Version " + prettyDate(headings[item].firstChild.innerText, dateRE);
    }
    else if (headings[item].tagName === 'H3')
    {
      setHref(headings[item], '#' + getHref(headings[item]) + '_' + lastHeadingTwo);
      fixAnchor(headings[item], getHref(headings[item]));
    }
  }
}