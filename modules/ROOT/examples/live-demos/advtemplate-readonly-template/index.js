const data = [
  {
    title: 'Team replies',
    items: [
      {
        title: 'Message received',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Thank you for contacting {{prefix}}Company.Name{{suffix}}. Ticket {{prefix}}Ticket.Number{{suffix}} is now open, and a member of the support team will reply within one business day.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Still investigating',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>The team is still working on ticket {{prefix}}Ticket.Number{{suffix}}. The next update will follow within 48 hours.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      }
    ]
  },
  {
    title: 'Privacy requests',
    locked: true,
    items: [
      {
        title: 'Data access request',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>{{prefix}}Company.Name{{suffix}} has received a request for a copy of the personal data held for the account registered to {{prefix}}Customer.Email{{suffix}}.</p><p>The data export will be sent to that address within 30 days of this request. For security, the download link expires seven days after it is sent.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} Privacy Team</p>'
      },
      {
        title: 'Data deletion request',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>{{prefix}}Company.Name{{suffix}} has received a request to delete the account registered to {{prefix}}Customer.Email{{suffix}} and its personal data.</p><ul><li>The account will be closed within 30 days of this request.</li><li>Order and invoice records are kept for seven years to meet tax obligations, then deleted.</li><li>Marketing emails stop immediately.</li></ul><p>Regards,<br>{{prefix}}Company.Name{{suffix}} Privacy Team</p>'
      }
    ]
  },
  {
    title: 'Warranty claims',
    locked: true,
    items: [
      {
        title: 'Warranty claim approved',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>The warranty claim for order {{prefix}}Order.Number{{suffix}} has been approved. A replacement will be shipped at no cost within five business days.</p><p>This replacement is covered for the remainder of the original two-year warranty period.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Outside warranty period',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Order {{prefix}}Order.Number{{suffix}} was delivered more than two years ago, so it is outside the warranty period. A paid repair is available, and a quote can be provided on request.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      }
    ]
  }
];

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

// An in-memory template store that stands in for a remote template service.
// Categories created with `locked: true` are read-only.
class StoreError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "StoreError";
    this.status = status
  }
}

const isStoreError = (e) =>
  e instanceof StoreError;


const create = (data = []) => {
  const storeItems = {
    items: []
  };

  let id = 0;
  const genId = () => (++id).toString();
  const categoryIndex = {};
  const templateIndex = {};

  const isNonEmptyString = (value) =>
    typeof value === 'string' && value.length > 0;

  const isPositiveInteger = (str) => {
    const number = Number(str);
    return Number.isInteger(number) && number > 0;
  }

  const isValidId = (value) =>
    isNonEmptyString(value) && isPositiveInteger(value);

  const validate = (value, predicate, message) => {
    if (predicate(value)) {
      return;
    } else {
      throw new StoreError(400, message);
    }
  };

  const validateId = (id) =>
    validate(id, isValidId, `Invalid "id" parameter: ${id}`);

  const validateTitle = (title) =>
    validate(title, isNonEmptyString, `Invalid "title" parameter: ${title}`);

  const getParent = (id) =>
    typeof id === 'undefined' ? storeItems : getCategory(id);

  const filterOut = (items, id) =>
    items.filter((item) => item.id !== id);

  const list = () => {
    const resp = [...storeItems.items];
    return resp;
  };

  const getCategory = (id) => {
    validate(id, isValidId, `Invalid "id" parameter: ${id}`)
    const category = categoryIndex[id];
    if (typeof category !== 'undefined') {
      return category;
    } else {
      throw new StoreError(404, 'Category not found');
    }
  };

  const getTemplate = (id) => {
    validateId(id)
    const res = templateIndex[id];
    if (typeof res !== 'undefined') {
      return res
    } else {
      throw new StoreError(404, 'Template not found');
    }
  };

  const createCategory = (title, locked) => {
    validateTitle(title);

    const id = genId();
    const category = {
      id,
      title,
      locked,
      items: []
    };
    categoryIndex[id] = category;
    storeItems.items = [...storeItems.items, category];
    return category;
  };

  const createTemplate = (title, content, categoryId) => {
    validateTitle(title);
    validate(content, isNonEmptyString, `Invalid "content" parameter: ${content}`);

    const id = genId();
    const template = {
      id,
      title,
      content,
    };
    const parent = getParent(categoryId);
    parent.items = [...parent.items, template];
    templateIndex[id] = [template, categoryId];

    return template;
  };

  const renameCategory = (id, title) => {
    validateTitle(title);
    const category = getCategory(id);
    category.title = title;
  };

  const renameTemplate = (id, title) => {
    validateTitle(title);
    const [template] = getTemplate(id);
    template.title = title;
  };

  const deleteTemplate = (id) => {
    const [, categoryId] = getTemplate(id);
    const parent = getParent(categoryId);
    parent.items = filterOut(parent.items, id);
    delete templateIndex[id];
  };

  const deleteCategory = (id) => {
    const category = getCategory(id);
    category.items.forEach((template) => deleteTemplate(template.id));
    storeItems.items = filterOut(storeItems.items, id);
    delete categoryIndex[category.id];
  };

  const moveTemplate = (id, newCategoryId) => {
    const [template, categoryId] = getTemplate(id);
    if (categoryId === newCategoryId) {
      return;
    }

    const oldParent = getParent(categoryId);
    const newParent = getParent(newCategoryId);
    newParent.items = [...newParent.items, template];
    oldParent.items = filterOut(oldParent.items, id);
    templateIndex[id] = [template, newCategoryId];
  };

  const moveCategoryItems = (id, newCategoryId) => {
    const oldCategory = getCategory(id);
    if (id === newCategoryId) {
      return;
    }
    oldCategory.items.forEach((item) => moveTemplate(item.id, newCategoryId));
  };

  const load = (items, id) => {
    items.forEach((item) => {
      if (item.items) {
        const category = createCategory(item.title, item.locked);
        load(item.items, category.id);
      } else {
        createTemplate(item.title, item.content, id);
      }
    });
  };

  load(data);

  return {
    list,
    getTemplate,
    createCategory,
    createTemplate,
    renameCategory,
    renameTemplate,
    deleteTemplate,
    deleteCategory,
    moveTemplate,
    moveCategoryItems
  };
}


const store = create(data);

const advtemplate_list = async () => store.list();

const advtemplate_create_category = async (title) => {
  try {
    return store.createCategory(title);
  } catch (e) {
    console.error(e);
    throw new Error('Failed to create category');
  }
};


const advtemplate_create_template = async (title, content, categoryId) => {
  try {
    return store.createTemplate(title, content, categoryId);
  } catch (e) {
    console.error(e);
    throw new Error('Failed to create template');
  }
};


const advtemplate_get_template = async (id) => {
  try {
    const [template] = store.getTemplate(id);
    return template;
  } catch (e) {
    console.error(e);
    throw new Error('Failed to get template');
  }
};

const advtemplate_rename_category = async (id, title) => {
  try {
    store.renameCategory(id, title);
    return {};
  } catch (e) {
    console.error(e);
    throw new Error('Failed to rename category');
  }
};

const advtemplate_rename_template = async (id, title) => {
  try {
    store.renameTemplate(id, title);
    return {};
  } catch (e) {
    console.error(e);
    throw new Error('Failed to rename template');
  }
};

const advtemplate_delete_category = async (id) => {
  try {
    store.deleteCategory(id);
    return {};
  } catch (e) {
    console.error(e);
    throw new Error('Failed to delete category');
  }
};

const advtemplate_delete_template = async (id) => {
  try {
    store.deleteTemplate(id);
    return {};
  } catch (e) {
    console.error(e);
    throw new Error('Failed to delete template');
  }
};


const advtemplate_move_template = async (id, categoryId) => {
  try {
    store.moveTemplate(id, categoryId);
    return {};
  } catch (e) {
    console.error(e);
    throw new Error('Failed to move template');
  }
};

const advtemplate_move_category_items = async (id, categoryId) => {
  try {
    store.moveCategoryItems(id, categoryId);
    return {};
  } catch (e) {
    console.error(e);
    throw new Error('Failed to move category items');
  }
};

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
