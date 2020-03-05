/*
** Adding some additional fonts to the TinyMCE fonts list
** to allow the editor content to match the surrounding content.
*/
const fontList = 'Andale Mono=andale mono,monospace;' +
  'Aileron=aileron,sans-serif;' +
  'Arial=arial,helvetica,sans-serif;' +
  'Arial Black=arial black,sans-serif;' +
  'Avenir=Avenir W01,sans-serif;' +
  'Book Antiqua=book antiqua,palatino,serif;' +
  'Comic Sans MS=comic sans ms,sans-serif;' +
  'Courier New=courier new,courier,monospace;' +
  'Georgia=georgia,palatino,serif;' +
  'Helvetica=helvetica,arial,sans-serif;' +
  'Impact=impact,sans-serif;' +
  'Symbol=symbol;' +
  'Tahoma=tahoma,arial,helvetica,sans-serif;' +
  'Terminal=terminal,monaco,monospace;' +
  'Times New Roman=times new roman,times,serif;' +
  'Trebuchet MS=trebuchet ms,geneva,sans-serif;' +
  'Verdana=verdana,geneva,sans-serif;' +
  'Webdings=webdings;' +
  'Wingdings=wingdings,zapf dingbats';

// Initialize the TinyMCE editor
tinymce.init({
  selector: 'textarea#format-painter',
  plugins: 'formatpainter code',
  toolbar: 'formatpainter code',
  formats: {
    borderstyle: { selector: 'td,th', styles: { borderTopStyle: 'solid', borderRightStyle: 'solid', borderBottomStyle: 'solid', borderLeftStyle: 'solid', }, remove_similar: true },
    bordercolor: { selector: 'td,th', styles: { borderTopColor: '#32CD32', borderRightColor: '#32CD32', borderBottomColor: '#32CD32', borderLeftColor: '#32CD32' }, remove_similar: true },
    backgroundcolor: { selector: 'td,th', styles: { backgroundColor: '#006400' }, remove_similar: true },
    formatpainter_removeformat: [
      { selector: 'b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins', 
        remove: 'all', 
        split: true, 
        expand: false, 
        block_expand: true, 
        deep: true 
      },
      { selector: 'span', 
        attributes: ['style', 'class'], 
        remove: 'empty', 
        split: true, 
        expand: false, 
        deep: true 
      },
      { selector: '*:not(tr,td,th,table)', 
        attributes: ['style', 'class'], 
        split: false, 
        expand: false, 
        deep: true 
      }
    ]
  },
  height: 500,
  font_formats: fontList,
  content_css: '//www.tiny.cloud/css/codepen.min.css',
});