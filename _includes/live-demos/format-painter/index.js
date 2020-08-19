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
  content_style: {{site.liveDemoCSSStyles}}
});