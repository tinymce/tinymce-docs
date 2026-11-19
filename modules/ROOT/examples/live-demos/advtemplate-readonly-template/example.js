const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

const handleResponse = (message) => (response) => {
  if (!response.ok) {
    return response.text().then((error) => {
      console.error(error);
      throw new Error(message);
    });
  }
  return response.json();
};

const advtemplate_list = () =>
  fetch('/categories', {
    method: 'GET',
    headers,
  }).then(handleResponse('Failed to get template list'));

const advtemplate_get_template = (id) =>
  fetch(`/templates/${id}`, {
    method: 'GET',
    headers,
  }).then(handleResponse('Failed to get template'));

const advtemplate_create_category = (title) =>
  fetch('/categories', {
    method: 'POST',
    body: JSON.stringify({ title }),
    headers,
  }).then(handleResponse('Failed to create category'));

const advtemplate_create_template = (title, content, categoryId) =>
  fetch('/templates', {
    method: 'POST',
    body: JSON.stringify({ title, content, categoryId }),
    headers,
  }).then(handleResponse('Failed to create template'));

const advtemplate_rename_category = (id, title) =>
  fetch(`/categories/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title }),
    headers,
  }).then(handleResponse('Failed to rename category'));

const advtemplate_rename_template = (id, title) =>
  fetch(`/templates/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title }),
    headers,
  }).then(handleResponse('Failed to rename template'));

const advtemplate_delete_template = (id) =>
  fetch(`/templates/${id}`, {
    method: 'DELETE',
    headers,
  }).then(handleResponse('Failed to delete template'));

const advtemplate_delete_category = (id) =>
  fetch(`/categories/${id}`, {
    method: 'DELETE',
    headers,
  }).then(handleResponse('Failed to delete category'));

const advtemplate_move_template = (id, categoryId) =>
  fetch(`/templates/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ categoryId }),
    headers,
  }).then(handleResponse('Failed to move template'));

const advtemplate_move_category_items = (id, categoryId) =>
  fetch(`/categories/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ categoryId }),
    headers,
  }).then(handleResponse('Failed to move all templates to new category'));

const mergetags_list = [
  {
    title: 'Customer',
    menu: [
      { value: 'Customer.FirstName', title: 'First name' },
      { value: 'Customer.Email', title: 'Email address' }
    ]
  },
  {
    title: 'Support',
    menu: [
      { value: 'Ticket.Number', title: 'Ticket number' },
      { value: 'Order.Number', title: 'Order number' },
      { value: 'Agent.FirstName', title: 'Agent first name' }
    ]
  },
  { value: 'Company.Name', title: 'Company name' }
];

tinymce.init({
  selector: 'textarea#readonly-locked-template',
  height: 640,
  plugins: 'advtemplate mergetags lists link advlist autolink image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount',
  toolbar: 'inserttemplate addtemplate | mergetags | undo redo | blocks | ' +
    'bold italic | bullist numlist | link | backcolor | ' +
    'alignleft aligncenter alignright alignjustify | outdent indent | ' +
    'removeformat | help',
  contextmenu: 'advtemplate',
  content_css: ['default', '{{attachmentsdir}}/demo-content/content.css'],
  mergetags_list,
  advtemplate_list,
  advtemplate_get_template,
  advtemplate_create_category,
  advtemplate_create_template,
  advtemplate_rename_category,
  advtemplate_move_category_items,
  advtemplate_delete_category,
  advtemplate_rename_template,
  advtemplate_move_template,
  advtemplate_delete_template
});
