const users = [
  { id: 'user-1', name: 'Angelina Winn' },
  { id: 'user-2', name: 'Rodrigo Hawkins' },
  { id: 'user-3', name: 'Dianna Smiley' },
  { id: 'user-4', name: 'Eliana Stout' },
  { id: 'user-5', name: 'Oscar Khan' },
  { id: 'user-6', name: 'Mariana Dickey' },
  { id: 'user-7', name: 'Jakoby Roman' },
  { id: 'user-8', name: 'Grace Gross' },
  { id: 'user-9', name: 'Muhammed Sizemore' },
  { id: 'user-10', name: 'Kathryn Mcgee' },
];

const fetchMentions = (query, success) => {
  const matches = users.filter((user) => user.name.toLowerCase().includes(query.term.toLowerCase()));
  success(matches);
};

const insertedUsers = new Set();

const mentionsInsert = (editor, user) => {
  const span = editor.getDoc().createElement('span');
  span.className = 'mention';
  span.appendChild(editor.getDoc().createTextNode('@' + user.name));
  insertedUsers.add(user);
  return span;
};

const getUsers = (editor) => {
  const spans = Array.from(editor.getBody().querySelectorAll('[data-mce-mentions-id]'));
  const currentIds = spans.map((elm) => elm.getAttribute('data-mce-mentions-id'));
  const currentUsers = Array.from(insertedUsers).filter((user) => currentIds.includes(user.id));

  return currentUsers;
};

tinymce.init({
  selector: "textarea#getusers-api-alternative",
  plugins: "mentions code",
  mentions_fetch: fetchMentions,
  mentions_menu_complete: mentionsInsert,

  toolbar: 'getUsersButton',
  setup: function (editor) {
	editor.ui.registry.addButton('getUsersButton', {
	  text: 'getUsers',
	  onAction: function () {
		// Get mentioned users
		var mentionedUsers = getUsers(editor);
    // Insert mentioned users as a bullet list
		if (mentionedUsers.length > 0) {
		  var userList = mentionedUsers.map((user) => '<li>' + user.name + '</li>').join('');
		  editor.execCommand('mceInsertContent', false, '<ul>' + userList + '</ul>');
		}
	  }
	});
  }
});