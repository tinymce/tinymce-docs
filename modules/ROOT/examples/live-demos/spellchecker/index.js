tinymce.init({
  selector: 'textarea#spellchecker',
  plugins: 'code tinymcespellchecker link',
  toolbar: 'spellchecker language spellcheckdialog',
  height: 500,
  spellchecker_language: 'en',
  content_langs: [
    { title: 'English (US)', code: 'en_US' },
    { title: 'English (US Medical)', code: 'en_US', customCode: 'en_US-medical' },
    { title: 'English (UK)', code: 'en_UK' },
    { title: 'English (UK Medical)', code: 'en_UK', customCode: 'en_UK-medical' },
    { title: 'Spanish', code: 'es' },
    { title: 'French', code: 'fr' },
    { title: 'German', code: 'de' },
    { title: 'Portuguese', code: 'pt' },
    { title: 'Chinese', code: 'zh' }
  ],
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
});