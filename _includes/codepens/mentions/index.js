/* example dialog that inserts the name of a Pet into the editor content */


const getUserDataFromTheServer = function () {
  /* fake mentions server, needs to return data in this format */
  return [
    'Amy Reid', 'Jason Brewer', 'Aaron Clark', 'Aaron Elliott', 'Doris Herrera', 'Howard Castro', 'Kenneth Davis', 'Austin Spencer', 
    'Lisa Lynch', 'Kimberly Freeman', 'Ronald West', 'Kathleen Harris', 'Martha Ruiz', 'Phillip Moreno', 'Robert Vargas', 'Jesse Diaz', 'Christine Weber',
  ]
};



tinymce.init({
  selector: "textarea",
  plugins: "mentions",
  mentions_fetch: function (query, success) {
    /* Fetch your full user list from somewhere */
    var users = getUserDataFromTheServer();
    
    console.log(users, query.term.toLowerCase());

    /* query.term is the text the user typed after the '@' */
    users = users.filter(function (user) {
      console.log(user, user.indexOf(query.term.toLowerCase()));
      return user.indexOf(query.term.toLowerCase()) !== -1;
    });

    console.log(users);

    window.setTimeout(function () {
      success(users);
    }, 0);
  }
});