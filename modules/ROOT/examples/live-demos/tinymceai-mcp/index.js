const apiKey = '{{tinymceai_mcp_demo_api_key}}';

// Once per page, set up an auth session for TestDrive so we can fetch a JWT later.
// More than once per page probably won't break anything, but there's a chance things might get out of sync.
// So to ensure demos run well, we recommend only fetching this once per page.
// This function is more complex than we recommend in the docs because we've included error handling. The error will appear as a banner if hit.
// Docs example for reference: const isLoggedIn = fetch(`https://demo.api.tiny.cloud/1/${apiKey}/auth/random`, { method: "POST", credentials: "include" });
async function getAuthSession() {
  const res = await fetch(`https://demo.api.tiny.cloud/1/${apiKey}/auth/random`, { method: 'POST', credentials: 'include' });
  if (!res.ok) throw new Error(`TestDrive auth session request failed: ${res.status}`);
  const { token } = await res.json();
  return token;
}

// Fetch a TinyMCE AI JWT from TestDrive. Returns { token } as the plugin's token
// provider requires.
// This is more complex than we recommend in the docs because we've included error handling. The error will appear as a banner if hit.
const tinymceaiTokenProvider = async () => {
  // Check we've got an auth session before fetching a JWT.
  await getAuthSession();
  const res = await fetch(`https://demo.api.tiny.cloud/1/${apiKey}/jwt/tinymceai`, { credentials: 'include' });
  if (!res.ok) throw new Error(`TestDrive JWT request failed: ${res.status}`);
  return res.text().then(token => ({ token }));
};

// Tracks the visual viewport height (which excludes the on-screen keyboard on mobile)
// and exposes it as a CSS custom property --vvh. This allows the editor height to
// shrink correctly when the keyboard appears, unlike 100vh which ignores it.
const vv = window.visualViewport;
function updateVvh() {
  document.documentElement.style.setProperty('--vvh', vv.height + 'px');
}
vv.addEventListener('resize', updateVvh);
updateVvh();

// The Editor implementation

// The demo document is provided by the textarea in index.html.
const initialContent = document.querySelector('textarea#tinymceai-mcp').value;

// Merge tags
const mergetags_list = [
  {
    title: 'Recipient',
    menu: [
      { value: 'Recipient.FirstName',   title: 'First name' },
      { value: 'Recipient.LastName',    title: 'Last name' },
      { value: 'Recipient.FullName',    title: 'Full name' },
      { value: 'Recipient.Salutation',  title: 'Salutation (Mr/Ms/Dr …)' },
      { value: 'Recipient.Email',       title: 'Email address' },
      { value: 'Recipient.Phone',       title: 'Phone number' },
      { value: 'Recipient.JobTitle',    title: 'Job title' },
      { value: 'Recipient.Company',     title: 'Company name' },
    ]
  },
  {
    title: 'Sender',
    menu: [
      { value: 'Sender.FirstName',      title: 'First name' },
      { value: 'Sender.LastName',       title: 'Last name' },
      { value: 'Sender.FullName',       title: 'Full name' },
      { value: 'Sender.Email',          title: 'Email address' },
      { value: 'Sender.Phone',          title: 'Phone number' },
      { value: 'Sender.JobTitle',       title: 'Job title' },
      { value: 'Sender.Department',     title: 'Department' },
      { value: 'Sender.Signature',      title: 'Email signature block' },
    ]
  },
  {
    title: 'Organization',
    menu: [
      { value: 'Org.Name',              title: 'Organization name' },
      { value: 'Org.LogoUrl',           title: 'Logo URL' },
      { value: 'Org.Website',           title: 'Website URL' },
      { value: 'Org.Address',           title: 'Street address' },
      { value: 'Org.City',              title: 'City' },
      { value: 'Org.Country',           title: 'Country' },
      { value: 'Org.SupportEmail',      title: 'Support email' },
      { value: 'Org.Phone',             title: 'Main phone number' },
    ]
  },
  {
    title: 'Document',
    menu: [
      { value: 'Document.Title',        title: 'Document title' },
      { value: 'Document.ID',           title: 'Document ID / reference' },
      { value: 'Document.Version',      title: 'Version number' },
      { value: 'Document.CreatedDate',  title: 'Created date' },
      { value: 'Document.DueDate',      title: 'Due / expiry date' },
      { value: 'Document.Status',       title: 'Status' },
      { value: 'Document.OwnerName',    title: 'Document owner name' },
    ]
  },
  {
    title: 'Date & Time',
    menu: [
      { value: 'Date.Today',            title: 'Today\'s date' },
      { value: 'Date.CurrentYear',      title: 'Current year' },
      { value: 'Date.CurrentMonth',     title: 'Current month' },
      { value: 'Date.CurrentDay',       title: 'Day of the week' },
      { value: 'DateTime.Now',          title: 'Current date & time' },
    ]
  },
  {
    title: 'Contract & Legal',
    menu: [
      { value: 'Contract.Number',       title: 'Contract number' },
      { value: 'Contract.StartDate',    title: 'Contract start date' },
      { value: 'Contract.EndDate',      title: 'Contract end date' },
      { value: 'Contract.Value',        title: 'Contract value' },
      { value: 'Contract.Currency',     title: 'Currency' },
      { value: 'Contract.PaymentTerms', title: 'Payment terms' },
      { value: 'Contract.GoverningLaw', title: 'Governing law / jurisdiction' },
    ]
  },
  {
    title: 'Product & Order',
    menu: [
      { value: 'Order.ID',              title: 'Order ID' },
      { value: 'Order.Date',            title: 'Order date' },
      { value: 'Order.Total',           title: 'Order total' },
      { value: 'Order.ItemCount',       title: 'Number of items' },
      { value: 'Product.Name',          title: 'Product name' },
      { value: 'Product.SKU',           title: 'Product SKU' },
      { value: 'Product.Price',         title: 'Unit price' },
      { value: 'Order.TrackingURL',     title: 'Shipment tracking URL' },
    ]
  }
];

// Advanced Templates store (sessionStorage-backed)
const SESSION_KEY = 'tinymce_templates';
const SEED_TEMPLATES = [
  {
    id: '1',
    title: 'Resolving tickets',
    content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Thank you for reaching out. I\'m happy to let you know that your ticket has been resolved. Please don\'t hesitate to get in touch if you need further assistance.</p><p>Best regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>',
  },
  {
    id: '2',
    title: 'Quick replies',
    items: [
      {
        id: '3',
        title: 'Message received',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Thanks for your message — we\'ve received it and will get back to you as soon as possible.</p><p>Best regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>',
      },
      {
        id: '4',
        title: 'Progress update',
        content: '<p>Hi {{prefix}}Customer.FirstName{{suffix}},</p><p>Just a quick note to let you know we\'re still working on your request. We\'ll follow up with an update shortly.</p><p>Best regards,<br>{{prefix}}Agent.FirstName{{suffix}}</p>',
      }
    ]
  },
  {
    id: 'idheroes',
    title: "Hero blocks",
    items: [
      {
        id: 'heroblue',
        title: "Hero with link",
        content: `
          <div class="hero mceNonEditable">
            <div class="hero__main mceEditable">
              <h1><strong>Hero<br><span class="highlight">Title</span></strong><br>Block</h1>
              <p><span class="subtitle">Write your subtitle here</span></p>
            </div>
            <div class="hero__aside mceEditable">
              <p><a href="#" target="_blank" rel="noopener">Link to somewhere</a></p>
            </div>
          </div>
        `
      }
    ]
  }
];

const loadTemplates = () => {
  try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || SEED_TEMPLATES; }
  catch { return SEED_TEMPLATES; }
};
const saveTemplates = (templates) => sessionStorage.setItem(SESSION_KEY, JSON.stringify(templates));
const nextId = () => Math.random().toString(36).slice(2, 10);

const flatten = (items) => items.flatMap((t) => t.items ? flatten(t.items) : [t]);

const findCategory = (items, id) => {
  for (const item of items) {
    if (item.id === id && item.items) return item;
    if (item.items) { const found = findCategory(item.items, id); if (found) return found; }
  }
  return null;
};

const removeById = (items, id) => items.reduce((acc, item) => {
  if (item.id === id) return acc;
  return [...acc, item.items ? { ...item, items: removeById(item.items, id) } : item];
}, []);

// Returns the full template tree for populating the template picker
const advtemplate_list = () => Promise.resolve(loadTemplates());

// Returns a single template by id (called when user inserts a template)
const advtemplate_get_template = (id) => {
  const tpl = flatten(loadTemplates()).find((t) => t.id === id);
  return tpl ? Promise.resolve(tpl) : Promise.reject(new Error(`Template ${id} not found`));
};

// Creates a new empty category and appends it to the top-level list
const advtemplate_create_category = (title) => {
  const templates = loadTemplates();
  const category = { id: nextId(), title, items: [] };
  templates.push(category);
  saveTemplates(templates);
  return Promise.resolve(category);
};

// Creates a new template, optionally inside a category
const advtemplate_create_template = (title, content, categoryId) => {
  const templates = loadTemplates();
  const tpl = { id: nextId(), title, content };
  if (categoryId) {
    const cat = findCategory(templates, categoryId);
    if (cat) cat.items.push(tpl);
  } else {
    templates.push(tpl);
  }
  saveTemplates(templates);
  return Promise.resolve(tpl);
};

// Renames an existing category
const advtemplate_rename_category = (id, title) => {
  const templates = loadTemplates();
  const cat = findCategory(templates, id);
  if (cat) cat.title = title;
  saveTemplates(templates);
  return Promise.resolve({});
};

// Renames an existing template
const advtemplate_rename_template = (id, title) => {
  const templates = loadTemplates();
  const tpl = flatten(templates).find((t) => t.id === id);
  if (tpl) tpl.title = title;
  saveTemplates(templates);
  return Promise.resolve({});
};

// Deletes a single template by id
const advtemplate_delete_template = (id) => {
  saveTemplates(removeById(loadTemplates(), id));
  return Promise.resolve({});
};

// Deletes a category and all templates inside it
const advtemplate_delete_category = (id) => {
  saveTemplates(removeById(loadTemplates(), id));
  return Promise.resolve({});
};

// Moves a single template to a different category
const advtemplate_move_template = (id, categoryId) => {
  const templates = loadTemplates();
  const tpl = flatten(templates).find((t) => t.id === id);
  if (!tpl) return Promise.reject(new Error(`Template ${id} not found`));
  const pruned = removeById(templates, id);
  const cat = findCategory(pruned, categoryId);
  if (cat) cat.items.push(tpl); else pruned.push(tpl);
  saveTemplates(pruned);
  return Promise.resolve({});
};

// Moves all templates from one category into another
const advtemplate_move_category_items = (id, categoryId) => {
  const templates = loadTemplates();
  const src = findCategory(templates, id);
  if (!src) return Promise.reject(new Error(`Category ${id} not found`));
  const items = [...src.items];
  src.items = [];
  const dest = findCategory(templates, categoryId);
  if (dest) dest.items.push(...items); else templates.push(...items);
  saveTemplates(templates);
  return Promise.resolve({});
};

const revisions = [
{
  revisionId: "1",
  createdAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 14, 32, 0).getTime(),
  author: {
    id: 'jade-scott',
    name: 'Jade Scott',
    avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_jade-scott_128_515dc6a1.jpg',
  },
  content: initialContent
},
{
  revisionId: "0",
  createdAt: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1, 14, 32, 0).getTime(),
  author: {
    id: 'jade-scott',
    name: 'Jade Scott',
    avatar: 'https://sneak-preview.tiny.cloud/demouserdirectory/images/employee_jade-scott_128_515dc6a1.jpg',
  },
  content: ''
}
];

const mentions_fetch = async (query, success) => {
  const searchPhrase = query.term.toLowerCase();
  await fetch(`https://demouserdirectory.tiny.cloud/v1/users?q=${encodeURIComponent(searchPhrase)}`)
  .then((response) => response.json())
  .then((users) => success(users.data.map((userInfo) => ({
    id: userInfo.id,
    name: userInfo.name,
    image: userInfo.avatar,
    description: userInfo.custom.role
  }))))
  .catch((error) => console.log(error));
};

const mentions_menu_complete = (editor, userInfo) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

const createCard = (userInfo) => {
  const div = document.createElement('div');
  div.innerHTML = (
    '<div class="card">' +
      '<img class="avatar" src="' + userInfo.image + '">' +
      '<h1>' + userInfo.name + '</h1>' +
      '<p>' + userInfo.description + '</p>' +
    '</div>'
  );
  return div;
};

const mentions_select = async (mention, success) => {
  const id = mention.getAttribute('data-mention-id');
  await fetch(`https://demouserdirectory.tiny.cloud/v1/users/${id}`)
    .then((response) => response.json())
    .then((userInfo) => {
      const card = createCard({
        id: userInfo.id,
        name: userInfo.name,
        image: userInfo.avatar,
        description: userInfo.custom.role
      });
      success(card);
    })
    .catch((error) => console.error(error));
};

const mentions_menu_hover = async (userInfo, success) => {
  const card = createCard(userInfo);
  success(card);
};

tinymce.IconManager.add('fancy-ai-icons', {
  icons: {
    'ai-assistant': '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" r="7.5" fill="#C4D0FF" fill-opacity="0.5"/><path d="M15.4 2.6L13.5 4.5H9.5C8.04131 4.5 6.64236 5.07946 5.61091 6.11091C4.57946 7.14236 4 8.54131 4 10C4 11.4587 4.57946 12.8576 5.61091 13.8891C6.64236 14.9205 8.04131 15.5 9.5 15.5H13V18C15.6 16 19.8 14 20 10.4V10L21.8 8.2L22 10C22 15.7 15 19 11 22V17.5H9.5C7.51088 17.5 5.60322 16.7098 4.1967 15.3033C2.79018 13.8968 2 11.9891 2 10C2 8.01088 2.79018 6.10322 4.1967 4.6967C5.60322 3.29018 7.51088 2.5 9.5 2.5H15.5L15.4 2.6Z" fill="black"/><path d="M18.7 2.2C18.7 2.12044 18.7316 2.04413 18.7879 1.98787C18.8441 1.93161 18.9204 1.9 19 1.9C19.0796 1.9 19.1559 1.93161 19.2121 1.98787C19.2684 2.04413 19.3 2.12044 19.3 2.2C19.5038 2.77683 19.8341 3.30073 20.2667 3.73332C20.6993 4.16591 21.2232 4.4962 21.8 4.7C22.1 4.7 22.1 5.2 21.8 5.3L21.6 5.4C21.0703 5.61728 20.592 5.94309 20.1959 6.35645C19.7997 6.76981 19.4946 7.26155 19.3 7.8C19.2 8.1 18.8 8.1 18.7 7.8C18.5054 7.26155 18.2003 6.76981 17.8041 6.35645C17.408 5.94309 16.9297 5.61728 16.4 5.4H16.2C16.1072 5.4 16.0181 5.36312 15.9525 5.29749C15.8869 5.23185 15.85 5.14283 15.85 5.05C15.85 4.95717 15.8869 4.86815 15.9525 4.80251C16.0181 4.73687 16.1072 4.7 16.2 4.7C16.7768 4.4962 17.3007 4.16591 17.7333 3.73332C18.1659 3.30073 18.4962 2.77683 18.7 2.2Z" fill="#325CFF"/><path d="M9.56066 8.93934C9.27936 8.65804 8.89782 8.5 8.5 8.5C8.10218 8.5 7.72064 8.65804 7.43934 8.93934C7.15804 9.22064 7 9.60218 7 10C7 10.3978 7.15804 10.7794 7.43934 11.0607C7.72064 11.342 8.10218 11.5 8.5 11.5C8.89782 11.5 9.27936 11.342 9.56066 11.0607C9.84196 10.7794 10 10.3978 10 10C10 9.60218 9.84196 9.22064 9.56066 8.93934Z" fill="#325CFF"><animate attributeName="opacity" values="1;0;1;0;1;1" keyTimes="0;0.025;0.05;0.075;0.1;1" dur="5s" repeatCount="indefinite"/></path><path d="M16.5607 8.93934C16.2794 8.65804 15.8978 8.5 15.5 8.5C15.1022 8.5 14.7206 8.65804 14.4393 8.93934C14.158 9.22064 14 9.60218 14 10C14 10.3978 14.158 10.7794 14.4393 11.0607C14.7206 11.342 15.1022 11.5 15.5 11.5C15.8978 11.5 16.2794 11.342 16.5607 11.0607C16.842 10.7794 17 10.3978 17 10C17 9.60218 16.842 9.22064 16.5607 8.93934Z" fill="#325CFF"><animate attributeName="opacity" values="1;0;1;0;1;1" keyTimes="0;0.025;0.05;0.075;0.1;1" dur="5s" repeatCount="indefinite"/></path></svg>',
    'ai-review': '<svg fill="none" height="24" class="animate" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8.5" cy="8.5" fill="#c4d0ff" fill-opacity=".5" r="7.5"/><path clip-rule="evenodd" d="m15.3 12.6h.1l.3-.2c.0621-.0466.1125-.107.1472-.1764s.0528-.146.0528-.2236-.0181-.1542-.0528-.2236-.0851-.1298-.1472-.1764c-.7584-.2745-1.4471-.7123-2.0174-1.2826-.5703-.57031-1.0081-1.25904-1.2826-2.0174-.0466-.0621-.107-.1125-.1764-.14721-.0694-.03472-.146-.05279-.2236-.05279s-.1542.01807-.2236.05279c-.0694.03471-.1298.08511-.1764.14721-.2745.75836-.7124 1.44709-1.2826 2.0174-.57032.5703-1.25904 1.0081-2.0174 1.2826-.0621.0466-.1125.107-.14722.1764-.03471.0694-.05278.146-.05278.2236s.01807.1542.05278.2236c.03472.0694.08512.1298.14722.1764l.3.1c1.17667.5238 2.1322 1.4439 2.7 2.6l.1.2.2.4c.0466.0621.107.1125.1764.1472s.146.0528.2236.0528.1542-.0181.2236-.0528.1298-.0851.1764-.1472l.1-.2v-.2l.2-.2c.561-1.1019 1.4769-1.9826 2.6-2.5zm-3.3-1.6c-.3049.3301-.6397.6314-1 .9l1 1c.3002-.3649.6351-.6998 1-1-.3649-.3002-.6998-.6351-1-1z" fill="#325cff" fill-rule="evenodd"/><path d="m12 4c.5018-.00435 1.0032.02908 1.5.1l-.3 2c-.3967-.06502-.798-.09846-1.2-.1-1.7 0-3.2.5-4.5 1.5-1.4 1-2.6 2.4-3.4 4-.07598.1552-.11043.3275-.1.5-.01509.0994-.01509.2006 0 .3l.1.1c.8 1.7 2 3 3.4 4.1 1.51247 1.1541 3.407 1.6903 5.3 1.5 1.4-.2 2.6-.7 3.7-1.5 1.2-.9 2.2-2 3-3.4.1403-.2293.2737-.4627.4-.7.0608-.1249.0948-.2612.1-.4-.0052-.1388-.0392-.2751-.1-.4-.2075-.4467-.4413-.8808-.7-1.3l1.6-1.1c.3316.48032.6323.9813.9 1.5.2947.6238.3653 1.3302.2 2-.0453.2065-.1124.4076-.2.6-.1254.2706-.2588.5373-.4.8-1 1.6-2.1 3-3.6 4-1.4 1-3 1.7-4.7 1.8-.3314.0502-.6652.0836-1 .1-2 0-4-.6-5.7-1.9-1.7-1.2-3-2.8-4-4.8-.19503-.4056-.2963-.8499-.2963-1.3s.10127-.8944.2963-1.3c1-2 2.3-3.6 4-4.8 1.64441-1.23331 3.64448-1.9 5.7-1.9z" fill="#000"/><path d="m16.7 4.2c0-.07956.0316-.15587.0879-.21213.0562-.05626.1325-.08787.2121-.08787s.1559.03161.2121.08787c.0563.05626.0879.13257.0879.21213.2038.57683.5341 1.10074.9667 1.53332.4326.43259.9565.76289 1.5333.96668.0796 0 .1559.03161.2121.08787.0563.05626.0879.13257.0879.21213 0 .07957-.0316.15587-.0879.21213-.0562.05626-.1325.08787-.2121.08787l-.2.1c-.5297.21728-1.008.54309-1.4041.95645-.3962.41336-.7013.9051-.8959 1.44355-.1.3-.5.3-.6 0-.1946-.53845-.4997-1.03019-.8959-1.44355-.3961-.41336-.8744-.73917-1.4041-.95645h-.2c-.0928 0-.1819-.03687-.2475-.10251s-.1025-.15466-.1025-.24749c0-.09282.0369-.18185.1025-.24749.0656-.06563.1547-.10251.2475-.10251.5768-.20379 1.1007-.53409 1.5333-.96668.4326-.43258.7629-.95649.9667-1.53332z" fill="#325cff"/></svg>'
  }
});

tinymce.init({
  selector: 'textarea#tinymceai-mcp',
  plugins: [
  "autolink", "link", "emoticons", "lists", "table", "advlist", "searchreplace", "wordcount", "autocorrect", "tinymcespellchecker", "charmap", "fullscreen", "advcode", "accordion", "anchor", "footnotes", "powerpaste", "importword", "exportpdf", "exportword", "markdown", "a11ychecker", "typography", "casechange", "checklist", "advtable", "formatpainter", "permanentpen", "tableofcontents", "help", "math", "linkchecker", "media", "mediaembed", // general plugins
  "quickbars", "tinymceai", "mergetags", "tinycomments", "mentions", "revisionhistory", "suggestededits", "advtemplate", "uploadcare"
  ],
  toolbar: "undo redo | tinymceai-chat tinymceai-review | ai-quickactions-translate | styles fontsizeinput | bold italic underline forecolor backcolor casechange | link uploadcare table addcomment | align bullist numlist checklist removeformat | code fullscreen help",
  mobile: {
    toolbar: 'styles bold italic underline forecolor backcolor | link uploadcare tableofcontents accordion hr toc footnotes | align bullist numlist checklist removeformat | showcomments code help',
    sidebar_show: '',
    height: 'calc(var(--vvh, 100svh) * 0.9)',
    statusbar: false,
    quickbars_selection_toolbar: false,
    quickbars_insert_toolbar: false,
    // Resizes the editor container to 90% of the visual viewport height whenever
    // the viewport changes (e.g. keyboard appears). Also scrolls the editor into
    // view when the keyboard opens to ensure it remains visible.
    setup: (editor) => {
      editor.on('init', () => {
        const container = editor.getContainer();
        if (!container) return;
        let prevHeight = vv.height;
        function syncHeight() {
          const keyboardOpened = prevHeight - vv.height > 100;
          prevHeight = vv.height;
          container.style.height = `calc(${vv.height}px * 0.9)`;
          if (keyboardOpened) {
            container.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }
        }
        vv.addEventListener('resize', syncHeight);
      });
    }
  },
  height: 'clamp(650px, 80vh, 1200px)',
  icons: 'fancy-ai-icons',
  quickbars_selection_toolbar: 'tinymceai-quickactions ai-quickactions-improve-writing addcomment',
  body_class: 'tox-comments-visible', // Ensure comments show up on init
  sidebar_show: 'tinymceai-chat',
  toolbar_mode: 'sliding',
  visual: false,
  table_default_attributes: {}, // Prevents inserting border=1 attribute on a new table
  formats: {
    smallcaps: { inline: 'span', selector: 'p,h1,h2,h3,h4,h5,h6,span', classes: 'smallcaps' },
    subtitle: { inline: 'span', selector: 'p,h1,h2,h3,h4,h5,h6,span', classes: 'subtitle' },
    highlight: { inline: 'span', selector: 'p,h1,h2,h3,h4,h5,h6,span', classes: 'highlight' },
  },
  style_formats_merge: true,
  style_formats: [
    {
      title: 'Styles', items: [
        { title: 'Small caps', format: 'smallcaps' },
        { title: 'Subtitle', format: 'subtitle' },
        { title: 'Highlight', format: 'highlight' },
      ]
    },
  ],
  content_css: '{{attachmentsdir}}/tinymceai-mcp-demo/content.css',
  user_id: "james-wilson",
  spellchecker_dialog: false,
  uploadcare_public_key: '630992ad50fe2291c406',
  uploadcare_store_type: 'temporary',
  uploadcare_cdn_base_url: 'https://tiny.ucarecdn.com',
  images_file_types: 'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp,svg',
  advcode_inline: true,
  highlight_on_focus: false,
  mergetags_list: mergetags_list,
  tinycomments_mode: 'embedded',
  fetch_users: (userIds) => Promise.all(userIds.map((userId) => fetch(`https://demouserdirectory.tiny.cloud/v1/users/${userId}`).then((response) => response.json()).catch(() => ({ id: userId })))),
  mentions_item_type: "profile",
  mentions_fetch,
  mentions_menu_hover,
  mentions_menu_complete,
  mentions_select,
  mentions_selector: '.mymention',
  revisionhistory_fetch: () => new Promise((resolve) => {
    resolve(revisions);
  }),
  revisionhistory_display_author: true,
  advtemplate_list,
  advtemplate_get_template,
  advtemplate_create_category,
  advtemplate_create_template,
  advtemplate_rename_category,
  advtemplate_rename_template,
  advtemplate_delete_template,
  advtemplate_delete_category,
  advtemplate_move_template,
  advtemplate_move_category_items,
  tinymceai_token_provider: tinymceaiTokenProvider,
  tinymceai_languages: [
    { title: 'English', language: 'english' },
    { title: 'Chinese (Simplified)', language: 'chinese' },
    { title: 'Spanish', language: 'spanish' },
    { title: 'German', language: 'german' },
    { title: 'Japanese', language: 'japanese' },
    { title: 'Portuguese', language: 'portuguese' },
    { title: 'Swedish', language: 'Burträskmål' },
    { title: 'Korean', language: 'korean' },
    { title: 'Hindi (Devanagari)', language: 'hindi devanagari'},
    { title: 'Italian', language: 'italian' },
    { title: 'Klingon', language: 'klingon' },
    { title: 'Dothraki', language: 'dothraki' },
  ],
  tinymceai_chat_welcome_message: 'This demo is connected to an Airtable database containing acquisition deals and related companies information.',
  tinymceai_chat_welcome_actions: [
    { text: 'Try using the following actions with this database:' },
    { text: '**Get help editing your document**' },
    {
      title: 'Fill with "Nuvo Technologies" account details',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Pull the "Nuvo Technologies" record from "TinyMCE demo data" Airtable database and fill in all placeholders in this document',
        displayedPrompt: 'Pull the "Nuvo Technologies" record from Airtable and fill in all placeholders in this document'
      },
      icon: 'document-properties'
    },
    {
      title: 'Analyze and summarize our last closed-lost deal',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Find the closed lost deal record from "TinyMCE demo data" Airtable database and fill in all placeholders in this document. In "M&A deal summary" placeholder list 3 potential reasons for why the deal was lost - use ol element with proper markup',
        displayedPrompt: 'Analyze and summarize our last closed-lost deal in Airtable data'
      },
      icon: 'document-properties'
    },
    { text: '**Explore data via chat**' },
    {
      title: 'Compile an open deals summary report',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Find all deals in "proposal sent" status and provide a summary in chat with their deal value, notes, confidence level and potential red flags'
      },
      icon: 'comment'
    },
    {
      title: 'Analyze stalled deals, and identify recurring issues',
      command: 'TinyMCEAIChatPrompt',
      value: {
        prompt: 'Look across all deals and their linked companies. Identify any pattern in which deals stall or lose confidence — for example by industry, deal stage, deal size, or ownership structure. State the pattern you find and cite the specific deals that support it. Respond in chat.'
      },
      icon: 'comment'
    },
  ],
  tinymceai_default_model: 'claude-4-6-sonnet',
  tinymceai_allow_model_selection: false,
  setup: (editor) => {
    // Opens the comments sidebar when clicking a comment marker in the content,
    // but only if it isn't already visible (body lacks tox-comments-visible class).
    editor.on('click', (e) => {
      const commentEl = e.target.closest('.tox-comment');
      if (commentEl && !editor.getBody().classList.contains('tox-comments-visible')) {
        tinymce.activeEditor.execCommand('ToggleSidebar', false, 'showcomments');
      }
    });
  },
});
