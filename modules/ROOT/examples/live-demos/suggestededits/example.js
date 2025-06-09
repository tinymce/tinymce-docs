/** Fake user database */
const userDb = {
  adamhenderson: {
      id: 'adamhenderson',
      name: 'Adam Henderson',
      avatar: `https://randomuser.me/api/portraits/men/1.jpg`,
  },
  michaelcook: {
      id: 'michaelcook',
      name: 'Michael Cook',
      avatar: `https://randomuser.me/api/portraits/men/2.jpg`,
  },
  kalebwilson: {
      id: 'kalebwilson',
      name: 'Kaleb Wilson',
      avatar: `https://randomuser.me/api/portraits/men/3.jpg`,
  },
  kyleeinstein: {
      id: 'kyleeinstein',
      name: 'Kyle Einstein',
      avatar: `https://randomuser.me/api/portraits/men/4.jpg`,
  },
};

const suggestededits_model = null; //Replace with the object returned by the plugin's getModel API, or null if there is no model.

const fetch_users = (ids) => {
  return new Promise((resolve, reject) => {
    const users = ids.map(id => userDb[id]);
    if (users.length > 0) {
      resolve(users);
    } else {
      reject(new Error('No users found'));
    }
  });
}

tinymce.init({
  selector: 'textarea#suggested-edits',
  height: 500,
  plugins: 'suggestededits',
  toolbar: 'suggestededits',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
  suggestededits_model, // If there is no model, the plugin will generate a default model based on the editor content.
  user_id: 'michaelcook',
  fetch_users, 
});

