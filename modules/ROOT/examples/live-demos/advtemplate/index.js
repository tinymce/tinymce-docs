const data = [
  {
    title: 'Acknowledgements',
    items: [
      {
        title: 'Message received',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Thank you for contacting {{prefix}}Company.Name{{suffix}}. Ticket {{prefix}}Ticket.Number{{suffix}} is now open, and a member of the support team will reply within one business day.</p><p>To add details, reply to this email. Replies are attached to the ticket automatically.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Still investigating',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>The team is still working on ticket {{prefix}}Ticket.Number{{suffix}}. It is taking longer than expected, and the next update will follow within 48 hours.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      }
    ]
  },
  {
    title: 'Orders and shipping',
    items: [
      {
        title: 'Replacement on the way',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Sorry that order {{prefix}}Order.Number{{suffix}} arrived damaged. A replacement has been booked and ships within two business days. There is no need to return the damaged item.</p><p>Track the replacement at {{prefix}}Order.TrackingUrl{{suffix}}.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Refund issued',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>A refund of {{prefix}}Order.Total{{suffix}} for order {{prefix}}Order.Number{{suffix}} has been issued to the original payment method. The time it takes to appear depends on the payment method:</p><ul><li>Credit or debit card: 3 to 5 business days</li><li>PayPal: 1 to 2 business days</li></ul><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Delivery delayed',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Order {{prefix}}Order.Number{{suffix}} is delayed at the courier depot. The new delivery estimate is three business days, and the tracking page at {{prefix}}Order.TrackingUrl{{suffix}} updates as soon as the parcel moves.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      }
    ]
  },
  {
    title: 'Closing tickets',
    items: [
      {
        title: 'Ticket resolved',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Ticket {{prefix}}Ticket.Number{{suffix}} is now closed. If the problem comes back, reply to this email within 30 days and the ticket reopens automatically.</p><p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Satisfaction survey',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>How did the support team do on ticket {{prefix}}Ticket.Number{{suffix}}? The two-question survey at {{prefix}}Survey.Link{{suffix}} takes less than a minute.</p><p>Thank you,<br>{{prefix}}Company.Name{{suffix}} Customer Support</p>'
      }
    ]
  },
  {
    title: 'Email signature',
    content: '<p>Regards,<br>{{prefix}}Agent.FirstName{{suffix}} {{prefix}}Agent.LastName{{suffix}}<br>{{prefix}}Agent.Title{{suffix}}, {{prefix}}Company.Name{{suffix}}</p>'
  }
];

const mergetags_list = [
  {
    title: 'Customer',
    menu: [
      { value: 'Customer.FirstName', title: 'First name' },
      { value: 'Customer.LastName', title: 'Last name' },
      { value: 'Customer.Email', title: 'Email address' }
    ]
  },
  {
    title: 'Ticket',
    menu: [
      { value: 'Ticket.Number', title: 'Ticket number' },
      { value: 'Ticket.Subject', title: 'Subject' }
    ]
  },
  {
    title: 'Order',
    menu: [
      { value: 'Order.Number', title: 'Order number' },
      { value: 'Order.Total', title: 'Order total' },
      { value: 'Order.TrackingUrl', title: 'Tracking URL' }
    ]
  },
  {
    title: 'Agent',
    menu: [
      { value: 'Agent.FirstName', title: 'First name' },
      { value: 'Agent.LastName', title: 'Last name' },
      { value: 'Agent.Title', title: 'Job title' }
    ]
  },
  { value: 'Company.Name', title: 'Company name' },
  { value: 'Survey.Link', title: 'Survey link' }
];

// An in-memory template store that stands in for a remote template service.
class StoreError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "StoreError";
    this.status = status
  }
}

const isStoreError = (e) =>
  e instanceof StoreError


const create = (data = []) => {
  const store = {
    items: []
  }

  let id = 0;
  const genId = () => (++id).toString()
  const categoryIndex = {}
  const templateIndex = {}

  const isNonEmptyString = (value) =>
    typeof value === 'string' && value.length > 0

  const isPositiveInteger = (str) => {
    const number = Number(str);
    return Number.isInteger(number) && number > 0
  }

  const isValidId = (value) =>
  isNonEmptyString(value) && isPositiveInteger(value)

  const validate = (value, predicate, message) => {
    if (predicate(value)) {
      return
    } else {
      throw new StoreError(400, message)
    }
  }

  const validateId = (id) =>
    validate(id, isValidId, `Invalid "id" parameter: ${id}`)

  const validateTitle = (title) =>
    validate(title, isNonEmptyString, `Invalid "title" parameter: ${title}`)

  const getParent = (id) =>
    typeof id === 'undefined' ? store : getCategory(id);

  const filterOut = (items, id) =>
    items.filter((item) => item.id !== id)

  const list = () => {
    const resp = [...store.items]
    return resp
  }

  const getCategory = (id) => {
    validate(id, isValidId, `Invalid "id" parameter: ${id}`)
    const category = categoryIndex[id]
    if (typeof category !== 'undefined'){
      return category
    } else {
      throw new StoreError(404, 'Category not found')
    }
  }

  const getTemplate = (id) => {
    validateId(id)
    const res = templateIndex[id]
    if (typeof res !== 'undefined'){
      return res
    } else {
      throw new StoreError(404, 'Template not found')
    }
  }

  const createCategory = (title) => {
    validateTitle(title)

    const id = genId()
    const category = {
      id,
      title,
      items: []
    }
    categoryIndex[id] = category;
    store.items = [...store.items, category]
    return category
  }

  const createTemplate = (title, content, categoryId) => {
    validateTitle(title)
    validate(content, isNonEmptyString, `Invalid "content" parameter: ${content}`)
    const id = genId()
    const template = {
      id,
      title,
      content,
    }
    const parent = getParent(categoryId)
    parent.items = [...parent.items, template]
    templateIndex[id] = [template, categoryId];
    return template
  }

  const renameCategory = (id, title) => {
    validateTitle(title)
    const category = getCategory(id)
    category.title = title;
  }

  const renameTemplate = (id, title) => {
    validateTitle(title)
    const [template] = getTemplate(id)
    template.title = title;
  }

  const deleteTemplate = (id) => {
    const [, categoryId] = getTemplate(id)
    const parent = getParent(categoryId)
    parent.items = filterOut(parent.items, id)
    delete templateIndex[id]
  }

  const deleteCategory = (id) => {
    const category = getCategory(id);
    category.items.forEach((template) => deleteTemplate(template.id))
    store.items = filterOut(store.items, id)
    delete categoryIndex[category.id]
  }

  const moveTemplate = (id, newCategoryId) => {
    const [template, categoryId] = getTemplate(id)
    if (categoryId === newCategoryId) {
      return
    }
    const oldParent = getParent(categoryId)
    const newParent = getParent(newCategoryId)
    newParent.items = [...newParent.items, template]
    oldParent.items = filterOut(oldParent.items, id)
    templateIndex[id] = [template, newCategoryId]
  }

  const moveCategoryItems = (id, newCategoryId) => {
    const oldCategory = getCategory(id)
    if (id === newCategoryId) {
      return
    }
    oldCategory.items.forEach((item) => moveTemplate(item.id, newCategoryId))
  }

  const load = (items, id) => {
    for (const item of items) {
      if (item.items) {
        const category = createCategory(item.title);
        load(item.items, category.id );
      } else {
        createTemplate(item.title, item.content, id);
      }
    }
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
    moveCategoryItems,
  }
}


const store = create(data);
const advtemplate_list = async () => store.list()


const advtemplate_create_category = async (title) => {
  try {
    return store.createCategory(title)
  } catch (e) {
    console.error(e)
    throw new Error('Failed to create category')
  }
}
  

const advtemplate_create_template = async (title, content, categoryId) => {
  try {
    return store.createTemplate(title, content, categoryId)
  } catch (e) {
    console.error(e)
    throw new Error('Failed to create template')
  }
}
  

const advtemplate_get_template = async (id) => {
  try {
    const [template ] = store.getTemplate(id)
    return template
  } catch (e) {
    console.error(e)
  }
}

const advtemplate_rename_category = async (id, title) => {
  try {
    store.renameCategory(id, title)
    return {}
  } catch (e) {
    console.error(e)
    throw new Error('Failed to rename category')
  }
}
  
const advtemplate_rename_template = async (id, title) => {
  try {
    store.renameTemplate(id, title)
    return {}
  } catch (e) {
    console.error(e)
    throw new Error('Failed to rename template')
  }
}

const advtemplate_delete_category = async (id) => {
  try {
    store.deleteCategory(id)
    return {}
  } catch (e) {
    console.error(e)
    throw new Error('Failed to delete category')
  }
}

const advtemplate_delete_template = async (id) => {
  try {
    store.deleteTemplate(id)
    return {}
  } catch (e) {
    console.error(e)
    throw new Error('Failed to delete template')
  }
}


const advtemplate_move_template = async (id, categoryId) => {
  try {
    store.moveTemplate(id, categoryId)
    return {}
  } catch (e) {
    console.error(e)
    throw new Error('Failed to move template')
  }
}

const advtemplate_move_category_items = async (id, categoryId) => {
  try {
    store.moveCategoryItems(id, categoryId)
    return {}
  } catch (e) {
    console.error(e)
    throw new Error('Failed to move category items')
  }
}

tinymce.init({
  selector: 'textarea#template',
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
