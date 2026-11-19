tinymce.init({
  selector: 'textarea#template-mce-clipboard',
  height: 600,
  plugins: 'advtemplate lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'inserttemplate | undo redo | blocks | bold italic | bullist numlist | ' +
    'link | backcolor | alignleft aligncenter alignright alignjustify | ' +
    'outdent indent | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  advtemplate_templates: [
    {
      title: 'With an mce-clipboard marker',
      items: [
        {
          title: 'Order status reply',
          content: '<p>Hello,</p><p>Thank you for asking about order {{prefix}}mce-clipboard{{suffix}}. The order left the warehouse this morning and should arrive within three business days.</p><p>To check progress, enter {{prefix}}mce-clipboard{{suffix}} on the <strong>Track an order</strong> page.</p><p>Kind regards,<br>Customer Support</p>'
        },
        {
          title: 'Case note',
          content: '<table><tbody><tr><th>Order</th><td>{{prefix}}mce-clipboard{{suffix}}</td></tr><tr><th>Status</th><td>Shipped</td></tr><tr><th>Next step</th><td>Follow up if not delivered within three business days</td></tr></tbody></table>'
        }
      ]
    },
    {
      title: 'Without an mce-clipboard marker',
      items: [
        {
          title: 'Order status reply',
          content: '<p>Hello,</p><p>Thank you for asking about the order. It left the warehouse this morning and should arrive within three business days.</p><p>To check progress, enter the order number on the <strong>Track an order</strong> page.</p><p>Kind regards,<br>Customer Support</p>'
        }
      ]
    }
  ]
});
