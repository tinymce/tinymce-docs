const demoName = "{demo-type} Example";

const getHTML = ()=>{
  if (typeof htmlFile !== 'undefined' && typeof htmlFile !== 'null'){
    return htmlFile
  }
  return undefined
}

const getJS = ()=>{
  if (typeof jsFile !== 'undefined' && typeof jsFile !== 'null'){
    return jsFile
  }
  return undefined
}

const getCSS = ()=>{
  if (typeof cssFile !== 'undefined' && typeof cssFile !== 'null'){
    return cssFile
  }
  return undefined
}
const value = {
  title: "{demo-type}",
  html: getHTML(),
  js: getJS(),
  css: getCSS(),
  js_external: 'https://cdn.tiny.cloud/1/qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc/tinymce/5/tinymce.min.js'
};

const jsonObj = JSON.stringify(value);
const inputEl =  document.querySelector(".input-{demo-type}");
inputEl.setAttribute("value", jsonObj);
