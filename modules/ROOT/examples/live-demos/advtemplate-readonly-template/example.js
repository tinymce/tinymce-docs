const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  
  const handleResponse = (message) => (response) => {
    if (!response.ok) {
      response.text().then((message) => console.error(message))
      throw new Error(message);
    } else {
      return response.json();
    }
  }
  
  const advtemplate_list = () => fetch('/categories', {
      method: 'GET',
      headers,
    })
    .then(handleResponse('Failed to get template list'))
  
  const advtemplate_get_template = (id) => {
    return fetch('/templates/' + id, {
        method: 'GET',
        headers,
      })
      .then(handleResponse('Failed to get template'))
  }
  
  const advtemplate_create_category = (title) => {
    return fetch('/categories', {
        method: 'POST',
        body: JSON.stringify({
          title
        }),
        headers,
      })
      .then(handleResponse('Failed to create category'))
  }
  
  const advtemplate_create_template = (title, content, categoryId) => {
    return fetch('/templates', {
        method: 'POST',
        body: JSON.stringify({
          title,
          content,
          categoryId
        }),
        headers,
      })
      .then(handleResponse('Failed to create template'))
  }
  
  const advtemplate_rename_category = (id, title) => {
    return fetch('/categories/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers,
      })
      .then(handleResponse('Failed to rename category'))
  }
  
  const advtemplate_rename_template = (id, title) => {
    return fetch('/templates/' + id, {
        method: 'PUT',
        body: JSON.stringify({
          title
        }),
        headers,
      })
      .then(handleResponse('Failed to rename template'))
  }
  
  const advtemplate_delete_template = (id) => {
    return fetch('/templates/' + id, {
        method: 'DELETE',
        headers,
      })
      .then(handleResponse('Failed to delete template'))
  }
  
  const advtemplate_delete_category = (id) => {
    return fetch('/categories/' + id, {
        method: 'DELETE',
        headers,
      })
      .then(handleResponse('Failed to delete category'))
  }
  const advtemplate_move_template = (id, categoryId) => {
    return fetch('/templates/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
          categoryId
        }),
        headers,
      })
      .then(handleResponse('Failed to move template'))
  }
  
  const advtemplate_move_category_items = (id, categoryId) => {
    return fetch('/categories/' + id, {
        method: 'PATCH',
        body: JSON.stringify({
          categoryId
        }),
        headers,
      })
      .then(handleResponse('Failed to move all templates to new category'))
  } 

  tinymce.init({
    selector: "textarea#readonly-locked-template",
      plugins: [
          "advlist", "anchor", "autolink", "charmap", "code", "fullscreen", 
          "help", "image", "insertdatetime", "link", "lists", "media", 
          "preview", "searchreplace", "table", "visualblocks", "advtemplate"
      ],
    contextmenu: 'advtemplate',
    toolbar: "addtemplate inserttemplate | undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
    advtemplate_list,
    advtemplate_get_template,
    advtemplate_create_category,
    advtemplate_create_template,
    advtemplate_rename_category,
    advtemplate_rename_template,
    advtemplate_delete_template,
    advtemplate_delete_category,
    advtemplate_move_template,
    advtemplate_move_category_items
  });
  