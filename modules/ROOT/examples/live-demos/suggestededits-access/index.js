/** Fake user database */
const userinfos = {
  adamhenderson: {
      uid: 'adamhenderson',
      name: 'Adam Henderson',
      avatar: `https://randomuser.me/api/portraits/men/1.jpg`,
  },
  michaelcook: {
      uid: 'michaelcook',
      name: 'Michael Cook',
      avatar: `https://randomuser.me/api/portraits/men/2.jpg`,
  },
  kalebwilson: {
      uid: 'kalebwilson',
      name: 'Kaleb Wilson',
      avatar: `https://randomuser.me/api/portraits/men/3.jpg`,
  },
  kyleeinstein: {
      uid: 'kyleeinstein',
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
  selector: 'textarea#suggested_edits_access',
  height: 500,
  plugins: 'suggestededits',
  toolbar: 'suggestededits',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
  user_id: 'adamhenderson',
  fetch_users,
  suggestededits_access: 'read', //Change this value to set  the user's permission to the Suggested Edits view
  readonly: false, //Set to true to restrict a user's editing permission
});