const data = [
  {
    title: 'Quick replies',
    items: [
      {
        title: 'Message received',
        content: '<p dir="ltr">Hey {{prefix}}Customer.FirstName\}}!</p>\n<p dir="ltr">Just a quick note to say we&rsquo;ve received your message, and will get back to you within 48 hours.</p>\n<p dir="ltr">For reference, your ticket number is: {{mergetag-open}}Ticket.Number{{suffix}}</p>\n<p dir="ltr">Should you have any questions in the meantime, just reply to this email and it will be attached to this ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Regards,</p>\n<p dir="ltr">{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Thanks for the feedback',
        content: '<p dir="ltr">Hi {{prefix}}Customer.FirstName{{suffix}},</p>\n<p dir="ltr">We appreciate you taking the time to provide feedback on {{prefix}}Product.Name{{suffix}}.</p>\n<p dir="ltr">It sounds like it wasn&rsquo;t able to fully meet your expectations, for which we apologize. Rest assured our team looks at each piece of feedback and uses it to decide what to focus on next with {{prefix}}Product.Name{{suffix}}.</p>\n<p dir="ltr"><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best, and let us know if there&rsquo;s anything else we can do to help.</p>\n<p dir="ltr">-{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Still working on case',
        content: '<p dir="ltr">Hi {{prefix}}Customer.FirstName{{suffix}},</p>\n<p dir="ltr">Just a quick note to let you know we&rsquo;re still working on your case. It&rsquo;s taking a bit longer than we hoped, but we&rsquo;re aiming to get you an answer in the next 48 hours.</p>\n<p dir="ltr">Stay tuned,</p>\n<p dir="ltr">{{prefix}}Agent.FirstName{{suffix}}</p>'
      }
    ]
  },
  {
    title: 'Closing tickets',
    items: [
      {
        title: 'Closing ticket',
        content: '<p dir="ltr">Hi {{prefix}}Customer.FirstName{{suffix}},</p>\n<p dir="ltr">We haven&rsquo;t heard back from you in over a week, so we have gone ahead and closed your ticket number {{prefix}}Ticket.Number{{suffix}}.</p>\n<p dir="ltr">If you&rsquo;re still running into issues, not to worry, just reply to this email and we will re-open your ticket.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">All the best,</p>\n<p dir="ltr">{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Post-call survey',
        content: '<p dir="ltr">Hey {{prefix}}Customer.FirstName{{suffix}}!</p>\n<p dir="ltr">&nbsp;</p>\n<p dir="ltr">How did we do?</p>\n<p dir="ltr">If you have a few moments, we&rsquo;d love you to fill out our post-support survey: {{prefix}}Survey.Link{{suffix}}</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks in advance!<br>{{prefix}}Company.Name{{suffix}} Customer Support</p>'
      }
    ]
  },
  {
    title: 'Locked Product support',
    locked: true,
    items: [
      {
        title: 'How to find model number',
        content: '<p dir="ltr">Hi {{prefix}}Customer.FirstName{{suffix}},</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">My name is {{prefix}}Agent.FirstName{{suffix}} and I will be glad to assist you today.</p>\n<p dir="ltr">To troubleshoot your issue, we first need your model number, which can be found on the underside of your product beneath the safety warning label.&nbsp;</p>\n<p dir="ltr">It should look something like the following: XX.XXXXX.X</p>\n<p dir="ltr">Once you send it over, I will advise on next steps.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks!</p>\n<p dir="ltr">{{prefix}}Agent.FirstName{{suffix}}</p>'
      },
      {
        title: 'Support escalation',
        content: '<p dir="ltr">Hi {{prefix}}Customer.FirstName{{suffix}},</p>\n<p dir="ltr">We have escalated your ticket {{prefix}}Ticket.Number{{suffix}} to second-level support.</p>\n<p dir="ltr">You should hear back from the new agent on your case, {{prefix}}NewAgent.FirstName{{suffix}}, shortly.</p>\n<p><strong>&nbsp;</strong></p>\n<p dir="ltr">Thanks,</p>\n<p dir="ltr">{{prefix}}Company.Name{{suffix}} Customer Support</p>'
      }
    ]
  }
];


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

  const createCategory = (title, locked) => {
    validateTitle(title)

    const id = genId()
    const category = {
      id,
      title,
      locked,
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
        const category = createCategory(item.title, item.locked);
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
  advtemplate_move_category_items,
  advtemplate_delete_category,

  advtemplate_rename_template,
  advtemplate_move_template,
  advtemplate_delete_template,
});