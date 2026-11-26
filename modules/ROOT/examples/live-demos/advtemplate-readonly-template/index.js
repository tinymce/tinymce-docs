const data = [
  {
    title: 'Welcome messages',
    items: [
      {
        title: 'Welcome from the team',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>Everyone on the {{prefix}}Employee.Department{{suffix}} team is looking forward to working with you. {{prefix}}Manager.Name{{suffix}} will meet you at reception at 9:00 AM on {{prefix}}Employee.StartDate{{suffix}} and introduce you to the team over coffee.</p><p>See you soon,<br>{{prefix}}Company.Name{{suffix}} People Team</p>'
      },
      {
        title: 'Laptop pickup',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>Your laptop is set up and ready to collect from the IT desk on the second floor, any time after 1:00 PM on {{prefix}}Employee.StartDate{{suffix}}. Bring photo ID, and allow 30 minutes to sign in and set up multi-factor authentication.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} IT Service Desk</p>'
      },
      {
        title: 'First-week check-in',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>How is the first week going? Reply with any questions about tools, access, or the onboarding schedule, and the People Team will follow up within one business day.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} People Team</p>'
      }
    ]
  },
  {
    title: 'Policy acknowledgments',
    locked: true,
    items: [
      {
        title: 'Code of conduct',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>Before {{prefix}}Employee.StartDate{{suffix}}, read and sign the {{prefix}}Company.Name{{suffix}} Code of Conduct in the employee portal. The code covers:</p><ul><li>Respect in the workplace and the anti-harassment policy</li><li>Conflicts of interest, gifts, and hospitality</li><li>Protecting customer and company data</li></ul><p>Signing confirms that the code has been read and understood. Send any questions to the People Team before signing.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} People Team</p>'
      },
      {
        title: 'Confidentiality agreement',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>All {{prefix}}Company.Name{{suffix}} employees sign a confidentiality agreement before their first day. The agreement is waiting in the employee portal and must be signed by {{prefix}}Employee.StartDate{{suffix}}.</p><p>The agreement continues to apply after employment ends. Legal can answer questions at legal@example.com.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} People Team</p>'
      }
    ]
  },
  {
    title: 'Payroll and benefits',
    locked: true,
    items: [
      {
        title: 'Benefits enrollment',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>Benefits enrollment opens on {{prefix}}Employee.StartDate{{suffix}} and stays open for 30 days. Choose coverage in the employee portal under <strong>Benefits</strong>.</p><table style="border-collapse: collapse; width: 100%;" border="1"><colgroup><col style="width: 42.9%;"><col style="width: 57.1%;"></colgroup><thead><tr><th>Benefit</th><th>Starts</th></tr></thead><tbody><tr><td>Medical, dental, and vision</td><td>First day of the month after the start date</td></tr><tr><td>401(k) with a 4% company match</td><td>First paycheck</td></tr><tr><td>Life and disability insurance</td><td>Start date</td></tr></tbody></table><p>Employees who do not enroll within 30 days must wait for the next open enrollment period.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} People Team</p>'
      },
      {
        title: 'Direct deposit setup',
        content: '<p>Hi {{prefix}}Employee.FirstName{{suffix}},</p><p>Pay is deposited every second Friday. To be paid on time for the first pay period, add bank details in the employee portal under <strong>Payroll</strong> &gt; <strong>Direct deposit</strong> within five business days of {{prefix}}Employee.StartDate{{suffix}}.</p><p>Regards,<br>{{prefix}}Company.Name{{suffix}} Payroll Team</p>'
      }
    ]
  }
];

const mergetags_list = [
  {
    title: 'Employee',
    menu: [
      { value: 'Employee.FirstName', title: 'First name' },
      { value: 'Employee.Email', title: 'Email address' },
      { value: 'Employee.Department', title: 'Department' },
      { value: 'Employee.StartDate', title: 'Start date' }
    ]
  },
  { value: 'Manager.Name', title: 'Manager name' },
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
  plugins: [
    'advtemplate', 'mergetags',
    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
    'insertdatetime', 'media', 'table', 'help', 'wordcount'
  ],
  toolbar: 'inserttemplate addtemplate | mergetags | undo redo | blocks | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'link | removeformat | help',
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
