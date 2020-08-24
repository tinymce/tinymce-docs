/*
** This is to simulate requesting information from a server.
**
** It has 2 functions:
** fetchUsers() - returns a complete list of users' ids and names.
** fetchUser(id) - returns the full information about a single user id.
**
** Both of these functions have a slight delay to simulate a server request.
*/
var fakeServer = (function () {
  /* Use tinymce's Promise shim */
  var Promise = tinymce.util.Promise;

  /* Some user names for our fake server */
  var userNames = [
    'Terry Green', 'Edward Carroll', 'Virginia Turner', 'Alexander Schneider', 'Gary Vasquez', 'Randy Howell',
    'Katherine Moore', 'Betty Washington', 'Grace Chapman', 'Christina Nguyen', 'Danielle Rose', 'Thomas Freeman',
    'Thomas Armstrong', 'Vincent Lee', 'Brittany Kelley', 'Brenda Wheeler', 'Amy Price', 'Hannah Harvey',
    'Bobby Howard', 'Frank Fox', 'Diane Hopkins', 'Johnny Hawkins', 'Sean Alexander', 'Emma Roberts', 'Thomas Snyder',
    'Thomas Allen', 'Rebecca Ross', 'Amy Boyd', 'Kenneth Watkins', 'Sarah Tucker', 'Lawrence Burke', 'Emma Carr',
    'Zachary Mason', 'John Scott', 'Michelle Davis', 'Nicholas Cole', 'Gerald Nelson', 'Emily Smith', 'Christian Stephens',
    'Grace Carr', 'Arthur Watkins', 'Frances Baker', 'Katherine Cook', 'Roger Wallace', 'Pamela Arnold', 'Linda Barnes',
    'Jacob Warren', 'Billy Ramirez', 'Pamela Walsh', 'Paul Wade', 'Katherine Campbell', 'Jeffrey Berry', 'Patrick Bowman',
    'Dennis Alvarez', 'Crystal Lucas', 'Howard Mendoza', 'Patricia Wallace', 'Peter Stone', 'Tiffany Lane', 'Joe Perkins',
    'Gloria Reynolds', 'Willie Fernandez', 'Doris Harper', 'Heather Sandoval', 'Danielle Franklin', 'Ann Ellis',
    'Christopher Hernandez', 'Pamela Perry', 'Matthew Henderson', 'Jesse Mitchell', 'Olivia Reed', 'David Clark', 'Juan Taylor',
    'Michael Garrett', 'Gerald Guerrero', 'Jerry Coleman', 'Joyce Vasquez', 'Jane Bryant', 'Sean West', 'Deborah Bradley',
    'Phillip Castillo', 'Martha Coleman', 'Ryan Santos', 'Harold Hanson', 'Frances Hoffman', 'Heather Fisher', 'Martha Martin',
    'George Gray', 'Rachel Herrera', 'Billy Hart', 'Kelly Campbell', 'Kelly Marshall', 'Doris Simmons', 'Julie George',
    'Raymond Burke', 'Ruth Hart', 'Jack Schmidt', 'Billy Schmidt', 'Ruth Wagner', 'Zachary Estrada', 'Olivia Griffin', 'Ann Hayes',
    'Julia Weaver', 'Anna Nelson', 'Willie Anderson', 'Anna Schneider', 'Debra Torres', 'Jordan Holmes', 'Thomas Dean',
    'Maria Burton', 'Terry Long', 'Danielle McDonald', 'Kyle Flores', 'Cheryl Garcia', 'Judy Delgado', 'Karen Elliott',
    'Vincent Ortiz', 'Ann Wright', 'Ann Ramos', 'Roy Jensen', 'Keith Cunningham', 'Mary Campbell', 'Jesse Ortiz', 'Joseph Mendoza',
    'Nathan Bishop', 'Lori Valdez', 'Tammy Jacobs', 'Mary West', 'Juan Mitchell', 'Thomas Adams', 'Christian Martinez', 'James Ramos',
    'Deborah Ross', 'Eric Holmes', 'Thomas Diaz', 'Sharon Morales', 'Kathryn Hamilton', 'Helen Edwards', 'Betty Powell',
    'Harry Campbell', 'Raymond Perkins', 'Melissa Wallace', 'Danielle Hicks', 'Harold Brewer', 'Jack Burns', 'Anna Robinson',
    'Dorothy Nguyen', 'Jane Dean', 'Janice Hunter', 'Ryan Moore', 'Brian Riley', 'Brittany Bradley', 'Phillip Ortega', 'William Fisher',
    'Jennifer Schultz', 'Samantha Perez', 'Linda Carr', 'Ann Brown', 'Shirley Kim', 'Jeremy Alvarez', 'Dylan Oliver', 'Roy Gomez',
    'Ethan Brewer', 'Ruth Lucas', 'Marilyn Myers', 'Danielle Wright', 'Jose Meyer', 'Bobby Brown', 'Angela Crawford', 'Brandon Willis',
    'Kyle McDonald', 'Aaron Valdez', 'Kevin Webb', 'Ashley Gordon', 'Karen Jenkins', 'Johnny Santos', 'Ashley Henderson', 'Amy Walters',
    'Amber Rodriguez', 'Thomas Ross', 'Dorothy Wells', 'Jennifer Murphy', 'Douglas Phillips', 'Helen Johnston', 'Nathan Hawkins',
    'Roger Mitchell', 'Michael Young', 'Eugene Cruz', 'Kevin Snyder', 'Frank Ryan', 'Tiffany Peters', 'Beverly Garza', 'Maria Wright',
    'Shirley Jensen', 'Carolyn Munoz', 'Kathleen Day', 'Ethan Meyer', 'Rachel Fields', 'Joan Bell', 'Ashley Sims', 'Sara Fields',
    'Elizabeth Willis', 'Ralph Torres', 'Charles Lopez', 'Aaron Green', 'Arthur Hanson', 'Betty Snyder', 'Jose Romero', 'Linda Martinez',
    'Zachary Tran', 'Sean Matthews', 'Eric Elliott', 'Kimberly Welch', 'Jason Bennett', 'Nicole Patel', 'Emily Guzman', 'Lori Snyder',
    'Sandra White', 'Christina Lawson', 'Jacob Campbell', 'Ruth Foster', 'Mark McDonald', 'Carol Williams', 'Alice Washington',
    'Brandon Ross', 'Judy Burns', 'Zachary Hawkins', 'Julie Chavez', 'Randy Duncan', 'Lisa Robinson', 'Jacqueline Reynolds', 'Paul Weaver',
    'Edward Gilbert', 'Deborah Butler', 'Frances Fox', 'Joshua Schmidt', 'Ashley Oliver', 'Martha Chavez', 'Heather Hudson',
    'Lauren Collins', 'Catherine Marshall', 'Katherine Wells', 'Robert Munoz', 'Pamela Nelson', 'Dylan Bowman', 'Virginia Snyder',
    'Janet Ruiz', 'Ralph Burton', 'Jose Bryant', 'Russell Medina', 'Brittany Snyder', 'Richard Cruz', 'Matthew Jimenez', 'Danielle Graham',
    'Steven Guerrero', 'Benjamin Matthews', 'Janet Mendoza', 'Harry Brewer', 'Scott Cooper', 'Alexander Keller', 'Virginia Gordon',
    'Randy Scott', 'Kimberly Olson', 'Helen Lynch', 'Ronald Garcia', 'Joseph Willis', 'Philip Walker', 'Tiffany Harris', 'Brittany Weber',
    'Gregory Harris', 'Sean Owens', 'Wayne Meyer', 'Roy McCoy', 'Keith Lucas', 'Christian Watkins', 'Christopher Porter', 'Sandra Lopez',
    'Harry Ward', 'Julie Sims', 'Albert Keller', 'Lori Ortiz', 'Virginia Henry', 'Samuel Green', 'Judith Cole', 'Ethan Castillo', 'Angela Ellis',
    'Amy Reid', 'Jason Brewer', 'Aaron Clark', 'Aaron Elliott', 'Doris Herrera', 'Howard Castro', 'Kenneth Davis', 'Austin Spencer',
    'Jonathan Marshall', 'Phillip Nelson', 'Julia Guzman', 'Robert Hansen', 'Kevin Anderson', 'Gerald Arnold', 'Austin Castro', 'Zachary Moore',
    'Joseph Cooper', 'Barbara Black', 'Albert Mendez', 'Marie Lane', 'Jacob Nichols', 'Virginia Marshall', 'Aaron Miller', 'Linda Harvey',
    'Christopher Morris', 'Emma Fields', 'Scott Guzman', 'Olivia Alexander', 'Kelly Garrett', 'Jesse Hanson', 'Henry Wong', 'Billy Vasquez',
    'Larry Ramirez', 'Bryan Brooks', 'Alan Berry', 'Nicole Powell', 'Stephen Bowman', 'Eric Hughes', 'Elizabeth Obrien', 'Timothy Ramos',
    'Michelle Russell', 'Denise Ruiz', 'Sean Carter', 'Amanda Barnett', 'Kathy Black', 'Terry Gutierrez', 'John Jensen', 'Grace Sanchez',
    'Tiffany Harvey', 'Jacqueline Sims', 'Wayne Lee', 'Roy Foster', 'Joyce Hart', 'Joseph Russell', 'Harold Washington', 'Beverly Cox',
    'Nicole Morales', 'Anna Carpenter', 'Jesse Ray', 'Ann Snyder', 'Mark Diaz', 'Elizabeth Harper', 'Andrew Guerrero', 'Cheryl Silva',
    'Michelle Hudson', 'Jeffrey Santos', 'Victoria Vasquez', 'Matthew Meyer', 'Jacob Murray', 'Jose Munoz', 'Edward Howell', 'Vincent Hunter',
    'Daniel Walters', 'Samantha Obrien', 'Laura Elliott', 'Richard Olson', 'Daniel Graham', 'Carol Lee', 'Grace Sullivan', 'Nancy Rodriguez',
    'Tyler Tran', 'Crystal Shaw', 'Madison Allen', 'Ralph Sims', 'Joe Jenkins', 'Dennis Ray', 'Arthur Davidson', 'Victoria Allen', 'Arthur Jackson',
    'Joan Thomas', 'Daniel Hopkins', 'Gloria Hicks', 'Danielle Price', 'Craig Keller', 'Alan Morgan', 'Gregory Silva', 'Samantha Kelly',
    'Rachel Williamson', 'Bruce Garrett', 'Jacob Smith', 'Kathleen Nichols', 'Sarah Long', 'Carol Pearson', 'Virginia Mendez', 'Judy Valdez',
    'Jason Garza', 'Brenda Fowler', 'Karen Edwards', 'Alexander Anderson', 'Pamela Wallace', 'Ruth Howell', 'Walter Hernandez', 'George Lucas',
    'Samantha Long', 'Margaret Garza', 'Kathleen Schultz', 'Frances Guerrero', 'Amber Meyer', 'Rachel Morales', 'Teresa Curtis', 'Heather Bell',
    'Grace Johnson', 'Melissa King', 'Zachary Cook', 'Carol Schultz', 'Jane Beck', 'Karen Stone', 'Roger Brooks', 'Carolyn Fuller', 'Nicholas Coleman',
    'William Bishop', 'Christine May', 'Linda George', 'Jean Meyer', 'Cheryl Armstrong', 'Danielle Welch', 'Amanda Graham', 'Janice Carter',
    'Catherine Brooks', 'Lawrence Gonzalez', 'Amy Russell', 'Eugene Jimenez', 'Joseph Carlson', 'Peter McCoy', 'Jerry Washington', 'Carolyn Obrien',
    'Mark Walker', 'Stephanie Hoffman', 'Julie Pena', 'Karen Curtis', 'Bryan Cruz', 'Madison Shaw', 'Rachel Graham', 'Susan Simpson', 'Andrea Harrison',
    'Bryan Miller', 'Vincent McDonald', 'Jesse McCoy', 'Christine Ramos', 'Dorothy Riley', 'Karen Warren', 'Ashley Weber', 'Judith Robinson',
    'Alan Mendez', 'Donna Medina', 'Helen Lane', 'Douglas Clark', 'Brenda Romero', 'Doris Wells', 'Patrick Howell', 'Doris Lawrence', 'Harry Jacobs',
    'Phillip Rose', 'Deborah Patel', 'Bryan Day', 'Rachel Butler', 'Paul Butler', 'Judy Knight', 'Willie Wallace', 'Phillip Anderson', 'Emma Black',
    'Lisa Lynch', 'Kimberly Freeman', 'Ronald West', 'Kathleen Harris', 'Martha Ruiz', 'Phillip Moreno', 'Robert Vargas', 'Jesse Diaz', 'Christine Weber',
    'Karen Stanley', 'Theresa Edwards', 'Kathryn Chavez', 'Sarah Rios', 'Danielle Wong', 'Kathy Carr', 'Joan Diaz', 'Albert Walters',
    'Denise Kim', 'Katherine Pearson', 'Diana Richardson', 'Harry Ford', 'Eric Mills', 'Sean Hicks', 'Joe Brown', 'Judith Morgan', 'Harry Hunter',
    'Matthew Bryant', 'Tyler Rose', 'Mildred Delgado', 'Emma Peters', 'Walter Delgado', 'Lauren Gilbert', 'Christopher Romero'
  ];

  /* some user profile images for our fake server */
  var images = [
    'camilarocun', 'brianmichel', 'absolutehype', '4l3d', 'lynseybrowne', 'hi_kendall', '4ae78e7058d2434', 'yusuf_y7',
    'beauty__tattoos', 'mehrank36176270', 'fabriziocuscini', 'hassaminian', 'mediajorge', 'alexbienz', 'eesates', 'donjain',
    'austinknight', 'ehlersd', 'bipiiin', 'victorstuber', 'curiousoffice', 'chowdhury_sayan', 'upslon', 'gcauchon', 'pawel_murawski',
    'mr_r_a', 'jeremieges', 'nickttng', 'patrikward', 'sinecdoques', 'gabrielbeduschi', 'ashmigosh', 'shxnx', 'laborisova',
    'anand_2688', 'mefahad', 'puneetsmail', 'jefrydagucci', 'duck4fuck', 'verbaux', 'nicolasjengler', 'sorousht_', 'am0rz',
    'dominiklevitsky', 'jarjan', 'ganilaughs', 'namphong122', 'tiggreen', 'allisongrayce', 'messagepadapp', 'madebylipsum',
    'tweetubhai', 'avonelink', 'ahmedkojito', 'piripipirics', 'dmackerman', 'markcipolla'
  ];

  /* some user profile descriptions for our fake server */
  var descriptions = [
    'I like to work hard, play hard!',
    'I drink like a fish, that is a fish that drinks coffee.',
    'OutOfCheeseError: Please reinstall universe.',
    'Do not quote me.',
    'No one reads these things right?'
  ];

  /* This represents a database of users on the server */
  var userDb = {};
  userNames.map(function (fullName) {
    var name = fullName.toLowerCase().replace(/ /g, '');
    var description = descriptions[Math.floor(descriptions.length * Math.random())];
    var image = 'https://s3.amazonaws.com/uifaces/faces/twitter/' + images[Math.floor(images.length * Math.random())] + '/128.jpg';
    return {
      id: name,
      name: name,
      fullName: fullName,
      description: description,
      image: image
    };
  }).forEach(function(user) {
    userDb[user.id] = user;
  });

  /* This represents getting the complete list of users from the server with only basic details */
  var fetchUsers = function() {
    return new Promise(function(resolve, _reject) {
      /* simulate a server delay */
      setTimeout(function() {
        var users = Object.keys(userDb).map(function(id) {
          return {
            id: id,
            name: userDb[id].name,
          };
        });
        resolve(users);
      }, 500);
    });
  };

  /* This represents requesting all the details of a single user from the server database */
  var fetchUser = function(id) {
    return new Promise(function(resolve, reject) {
      /* simulate a server delay */
      setTimeout(function() {
        if (Object.prototype.hasOwnProperty.call(userDb, id)) {
          resolve(userDb[id]);
        }
        reject('unknown user id "' + id + '"');
      }, 300);
    });
  };

  return {
    fetchUsers: fetchUsers,
    fetchUser: fetchUser
  };
})();

/* These are "local" caches of the data returned from the fake server */
var usersRequest = null;
var userRequest = {};

var mentions_fetch = function (query, success) {
  /* Fetch your full user list from somewhere */
  if (usersRequest === null) {
    usersRequest = fakeServer.fetchUsers();
  }
  usersRequest.then(function(users) {
    /* query.term is the text the user typed after the '@' */
    users = users.filter(function (user) {
      return user.name.indexOf(query.term.toLowerCase()) !== -1;
    });

    users = users.slice(0, 10);

    /* Where the user object must contain the properties `id` and `name`
       but you could additionally include anything else you deem useful. */
    success(users);
  });
};

var mentions_menu_hover = function (userInfo, success) {
  /* request more information about the user from the server and cache it locally */
  if (!userRequest[userInfo.id]) {
    userRequest[userInfo.id] = fakeServer.fetchUser(userInfo.id);
  }
  userRequest[userInfo.id].then(function(userDetail) {
    var div = document.createElement('div');

    div.innerHTML = (
    '<div class="card">' +
      '<img class="avatar" src="' + userDetail.image + '"/>' +
      '<h1>' + userDetail.fullName + '</h1>' +
      '<p>' + userDetail.description + '</p>' +
    '</div>'
    );

    success(div);
  });
};

var mentions_menu_complete = function (editor, userInfo) {
  var span = editor.getDoc().createElement('span');
  span.className = 'mymention';
  span.setAttribute('data-mention-id', userInfo.id);
  span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
  return span;
};

var mentions_select = function (mention, success) {
  /* `mention` is the element we previously created with `mentions_menu_complete`
     in this case we have chosen to store the id as an attribute */
  var id = mention.getAttribute('data-mention-id');
  /* request more information about the user from the server and cache it locally */
  if (!userRequest[id]) {
    userRequest[id] = fakeServer.fetchUser(id);
  }
  userRequest[id].then(function(userDetail) {
    var div = document.createElement('div');
    div.innerHTML = (
      '<div class="card">' +
      '<img class="avatar" src="' + userDetail.image + '"/>' +
      '<h1>' + userDetail.fullName + '</h1>' +
      '<p>' + userDetail.description + '</p>' +
      '</div>'
    );
    success(div);
  });
};

tinymce.init({
  selector: 'textarea#mentions',
  plugins: 'mentions',
  content_style: '.mymention{ color: gray; }' +
  {{site.liveDemoIframeCSSStyles}},

  mentions_selector: '.mymention',
  mentions_fetch: mentions_fetch,
  mentions_menu_hover: mentions_menu_hover,
  mentions_menu_complete: mentions_menu_complete,
  mentions_select: mentions_select

});
