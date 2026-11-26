tinymce.init({
  selector: 'textarea#mergetags',
  height: 780,
  plugins: [
    'mergetags',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'mergetags | undo redo | blocks | ' +
    'bold italic forecolor backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link | removeformat | help',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  content_style: '.mce-content-body .mce-mergetag { padding: 0 2px; background-color: #f0f3ff; border-radius: 4px; } ' +
    '.mce-content-body .mce-mergetag:hover { background-color: #dde4ff; } ' +
    '.mce-content-body .mce-mergetag-affix { color: #335dff; }',
  mergetags_prefix: '{*',
  mergetags_suffix: '*}',
  mergetags_list: [
    {
      title: 'Customer',
      menu: [
        { value: 'Customer.FirstName', title: 'First name' },
        { value: 'Customer.LastName', title: 'Last name' },
        { value: 'Customer.Company', title: 'Company' },
        { value: 'Customer.Email', title: 'Email address' },
        {
          title: 'Billing address',
          menu: [
            { value: 'Customer.Address.Street', title: 'Street' },
            { value: 'Customer.Address.City', title: 'City' },
            { value: 'Customer.Address.Country', title: 'Country' }
          ]
        }
      ]
    },
    {
      title: 'Subscription',
      menu: [
        { value: 'Subscription.PlanName', title: 'Plan name' },
        { value: 'Subscription.Seats', title: 'Number of seats' },
        { value: 'Subscription.StorageUsed', title: 'Storage used' },
        { value: 'Subscription.StorageLimit', title: 'Storage limit' },
        { value: 'Subscription.RenewalDate', title: 'Renewal date' }
      ]
    },
    {
      title: 'Billing',
      menu: [
        { value: 'Billing.AmountDue', title: 'Amount due' },
        { value: 'Billing.CardBrand', title: 'Card brand' },
        { value: 'Billing.CardLast4', title: 'Card last four digits' },
        { value: 'Billing.PortalUrl', title: 'Billing portal URL' }
      ]
    },
    {
      title: 'Sender',
      menu: [
        { value: 'Sender.Name', title: 'Name' },
        { value: 'Sender.Title', title: 'Job title' },
        { value: 'Sender.Phone', title: 'Phone number' }
      ]
    },
    { value: 'Unsubscribe.Link', title: 'Unsubscribe link' }
  ]
});
