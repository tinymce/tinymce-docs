/** Fake user database */
const userinfos = {
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

const fetch_users = (ids) => {
  return new Promise((resolve, reject) => {
    const users = ids.map(id => userinfos[id]);
    if (users.length > 0) {
      resolve(users);
    } else {
      reject(new Error('No users found'));
    }
  });
}

tinymce.init({
  selector: 'textarea#suggestededits_suggestions',
  height: 500,
  plugins: 'suggestededits',
  toolbar: 'suggestededits',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
  user_id: 'adamhenderson',
  suggestededits_access: 'feedback', //change this value to set permission to the Suggested Edits view
  readonly: false, //set to true to restrict a user's editing permission
  fetch_users
});