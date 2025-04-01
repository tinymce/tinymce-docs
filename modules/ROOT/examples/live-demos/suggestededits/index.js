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

const trackchanges_user_lookup = (uid) => new Promise((resolve, reject) =>
  setTimeout(() => userinfos[uid] ? resolve(userinfos[uid]) : reject(), 1000));


tinymce.init({
  selector: 'textarea#trackchanges',
  height: 500,
  plugins: 'trackchanges',
  toolbar: 'trackchanges',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }', 
  trackchanges_uid: 'adamhenderson',
  trackchanges_user_lookup,
});
