var demoBaseConfig = {
  selector: "textarea",
  width: 755,
  height: 500,
  resize: false,
  autosave_ask_before_unload: false,
  mentions_fetch: mentionsFetchFunction,
  powerpaste_allow_local_images: true,
  plugins: [
    "a11ychecker advcode advlist anchor autolink codesample colorpicker fullscreen help image imagetools",
    " lists link media noneditable powerpaste preview",
    " searchreplace table template textcolor tinymcespellchecker visualblocks wordcount"
  ], /* removed:  charmap insertdatetime print */
  external_plugins: {
    mentions: "//www.tiny.cloud/pro-demo/mentions/plugin.min.js",
    moxiemanager: "//www.tiny.cloud/pro-demo/moxiemanager/plugin.min.js"
  },
  templates: [
    {
      title: "Non-editable Example",
      description: "Non-editable example.",
      content: table
    },
    {
      title: "Simple Table Example",
      description: "Simple Table example.",
      content: table2
    }
  ],
  toolbar:
    "insertfile a11ycheck undo redo | bold italic | forecolor backcolor | template codesample | alignleft aligncenter alignright alignjustify | bullist numlist | link image",
  content_css: [
    "//fonts.googleapis.com/css?family=Lato:300,300i,400,400i",
    "//www.tiny.cloud/css/content-standard.min.css"
  ],
  spellchecker_rpc_url: 'https://spelling.tinymce.com/',
  spellchecker_api_key: 'h22wb7h8xi78b4fyo46hhx5k7fbh46vt5f6yqmvd492iy00c',
  spellchecker_dialog: true,
  spellchecker_whitelist: ['Ephox', 'Moxiecode'],
  api_key: 'fakekey'
};

var mentionsFetchFunction = function (query, success) {
      var users = [
        "Terry Green", "Edward Carroll", "Virginia Turner", "Alexander Schneider", "Gary Vasquez", "Randy Howell",
        "Katherine Moore", "Betty Washington", "Grace Chapman", "Christina Nguyen", "Danielle Rose", "Thomas Freeman",
        "Thomas Armstrong", "Vincent Lee", "Brittany Kelley", "Brenda Wheeler", "Amy Price", "Hannah Harvey",
        "Bobby Howard", "Frank Fox", "Diane Hopkins", "Johnny Hawkins", "Sean Alexander", "Emma Roberts", "Thomas Snyder",
        "Thomas Allen", "Rebecca Ross", "Amy Boyd", "Kenneth Watkins", "Sarah Tucker", "Lawrence Burke", "Emma Carr",
        "Zachary Mason", "John Scott", "Michelle Davis", "Nicholas Cole", "Gerald Nelson", "Emily Smith", "Christian Stephens",
        "Grace Carr", "Arthur Watkins", "Frances Baker", "Katherine Cook", "Roger Wallace", "Pamela Arnold", "Linda Barnes",
        "Jacob Warren", "Billy Ramirez", "Pamela Walsh", "Paul Wade", "Katherine Campbell", "Jeffrey Berry", "Patrick Bowman",
        "Dennis Alvarez", "Crystal Lucas", "Howard Mendoza", "Patricia Wallace", "Peter Stone", "Tiffany Lane", "Joe Perkins",
        "Gloria Reynolds", "Willie Fernandez", "Doris Harper", "Heather Sandoval", "Danielle Franklin", "Ann Ellis",
        "Christopher Hernandez", "Pamela Perry", "Matthew Henderson", "Jesse Mitchell", "Olivia Reed", "David Clark", "Juan Taylor",
        "Michael Garrett", "Gerald Guerrero", "Jerry Coleman", "Joyce Vasquez", "Jane Bryant", "Sean West", "Deborah Bradley",
        "Phillip Castillo", "Martha Coleman", "Ryan Santos", "Harold Hanson", "Frances Hoffman", "Heather Fisher", "Martha Martin",
        "George Gray", "Rachel Herrera", "Billy Hart", "Kelly Campbell", "Kelly Marshall", "Doris Simmons", "Julie George",
        "Raymond Burke", "Ruth Hart", "Jack Schmidt", "Billy Schmidt", "Ruth Wagner", "Zachary Estrada", "Olivia Griffin", "Ann Hayes",
        "Julia Weaver", "Anna Nelson", "Willie Anderson", "Anna Schneider", "Debra Torres", "Jordan Holmes", "Thomas Dean",
        "Maria Burton", "Terry Long", "Danielle McDonald", "Kyle Flores", "Cheryl Garcia", "Judy Delgado", "Karen Elliott",
        "Vincent Ortiz", "Ann Wright", "Ann Ramos", "Roy Jensen", "Keith Cunningham", "Mary Campbell", "Jesse Ortiz", "Joseph Mendoza",
        "Nathan Bishop", "Lori Valdez", "Tammy Jacobs", "Mary West", "Juan Mitchell", "Thomas Adams", "Christian Martinez", "James Ramos",
        "Deborah Ross", "Eric Holmes", "Thomas Diaz", "Sharon Morales", "Kathryn Hamilton", "Helen Edwards", "Betty Powell",
        "Harry Campbell", "Raymond Perkins", "Melissa Wallace", "Danielle Hicks", "Harold Brewer", "Jack Burns", "Anna Robinson",
        "Dorothy Nguyen", "Jane Dean", "Janice Hunter", "Ryan Moore", "Brian Riley", "Brittany Bradley", "Phillip Ortega", "William Fisher",
        "Jennifer Schultz", "Samantha Perez", "Linda Carr", "Ann Brown", "Shirley Kim", "Jeremy Alvarez", "Dylan Oliver", "Roy Gomez",
        "Ethan Brewer", "Ruth Lucas", "Marilyn Myers", "Danielle Wright", "Jose Meyer", "Bobby Brown", "Angela Crawford", "Brandon Willis",
        "Kyle McDonald", "Aaron Valdez", "Kevin Webb", "Ashley Gordon", "Karen Jenkins", "Johnny Santos", "Ashley Henderson", "Amy Walters",
        "Amber Rodriguez", "Thomas Ross", "Dorothy Wells", "Jennifer Murphy", "Douglas Phillips", "Helen Johnston", "Nathan Hawkins",
        "Roger Mitchell", "Michael Young", "Eugene Cruz", "Kevin Snyder", "Frank Ryan", "Tiffany Peters", "Beverly Garza", "Maria Wright",
        "Shirley Jensen", "Carolyn Munoz", "Kathleen Day", "Ethan Meyer", "Rachel Fields", "Joan Bell", "Ashley Sims", "Sara Fields",
        "Elizabeth Willis", "Ralph Torres", "Charles Lopez", "Aaron Green", "Arthur Hanson", "Betty Snyder", "Jose Romero", "Linda Martinez",
        "Zachary Tran", "Sean Matthews", "Eric Elliott", "Kimberly Welch", "Jason Bennett", "Nicole Patel", "Emily Guzman", "Lori Snyder",
        "Sandra White", "Christina Lawson", "Jacob Campbell", "Ruth Foster", "Mark McDonald", "Carol Williams", "Alice Washington",
        "Brandon Ross", "Judy Burns", "Zachary Hawkins", "Julie Chavez", "Randy Duncan", "Lisa Robinson", "Jacqueline Reynolds", "Paul Weaver",
        "Edward Gilbert", "Deborah Butler", "Frances Fox", "Joshua Schmidt", "Ashley Oliver", "Martha Chavez", "Heather Hudson",
        "Lauren Collins", "Catherine Marshall", "Katherine Wells", "Robert Munoz", "Pamela Nelson", "Dylan Bowman", "Virginia Snyder",
        "Janet Ruiz", "Ralph Burton", "Jose Bryant", "Russell Medina", "Brittany Snyder", "Richard Cruz", "Matthew Jimenez", "Danielle Graham",
        "Steven Guerrero", "Benjamin Matthews", "Janet Mendoza", "Harry Brewer", "Scott Cooper", "Alexander Keller", "Virginia Gordon",
        "Randy Scott", "Kimberly Olson", "Helen Lynch", "Ronald Garcia", "Joseph Willis", "Philip Walker", "Tiffany Harris", "Brittany Weber",
        "Gregory Harris", "Sean Owens", "Wayne Meyer", "Roy McCoy", "Keith Lucas", "Christian Watkins", "Christopher Porter", "Sandra Lopez",
        "Harry Ward", "Julie Sims", "Albert Keller", "Lori Ortiz", "Virginia Henry", "Samuel Green", "Judith Cole", "Ethan Castillo", "Angela Ellis",
        "Amy Reid", "Jason Brewer", "Aaron Clark", "Aaron Elliott", "Doris Herrera", "Howard Castro", "Kenneth Davis", "Austin Spencer",
        "Jonathan Marshall", "Phillip Nelson", "Julia Guzman", "Robert Hansen", "Kevin Anderson", "Gerald Arnold", "Austin Castro", "Zachary Moore",
        "Joseph Cooper", "Barbara Black", "Albert Mendez", "Marie Lane", "Jacob Nichols", "Virginia Marshall", "Aaron Miller", "Linda Harvey",
        "Christopher Morris", "Emma Fields", "Scott Guzman", "Olivia Alexander", "Kelly Garrett", "Jesse Hanson", "Henry Wong", "Billy Vasquez",
        "Larry Ramirez", "Bryan Brooks", "Alan Berry", "Nicole Powell", "Stephen Bowman", "Eric Hughes", "Elizabeth Obrien", "Timothy Ramos",
        "Michelle Russell", "Denise Ruiz", "Sean Carter", "Amanda Barnett", "Kathy Black", "Terry Gutierrez", "John Jensen", "Grace Sanchez",
        "Tiffany Harvey", "Jacqueline Sims", "Wayne Lee", "Roy Foster", "Joyce Hart", "Joseph Russell", "Harold Washington", "Beverly Cox",
        "Nicole Morales", "Anna Carpenter", "Jesse Ray", "Ann Snyder", "Mark Diaz", "Elizabeth Harper", "Andrew Guerrero", "Cheryl Silva",
        "Michelle Hudson", "Jeffrey Santos", "Victoria Vasquez", "Matthew Meyer", "Jacob Murray", "Jose Munoz", "Edward Howell", "Vincent Hunter",
        "Daniel Walters", "Samantha Obrien", "Laura Elliott", "Richard Olson", "Daniel Graham", "Carol Lee", "Grace Sullivan", "Nancy Rodriguez",
        "Tyler Tran", "Crystal Shaw", "Madison Allen", "Ralph Sims", "Joe Jenkins", "Dennis Ray", "Arthur Davidson", "Victoria Allen", "Arthur Jackson",
        "Joan Thomas", "Daniel Hopkins", "Gloria Hicks", "Danielle Price", "Craig Keller", "Alan Morgan", "Gregory Silva", "Samantha Kelly",
        "Rachel Williamson", "Bruce Garrett", "Jacob Smith", "Kathleen Nichols", "Sarah Long", "Carol Pearson", "Virginia Mendez", "Judy Valdez",
        "Jason Garza", "Brenda Fowler", "Karen Edwards", "Alexander Anderson", "Pamela Wallace", "Ruth Howell", "Walter Hernandez", "George Lucas",
        "Samantha Long", "Margaret Garza", "Kathleen Schultz", "Frances Guerrero", "Amber Meyer", "Rachel Morales", "Teresa Curtis", "Heather Bell",
        "Grace Johnson", "Melissa King", "Zachary Cook", "Carol Schultz", "Jane Beck", "Karen Stone", "Roger Brooks", "Carolyn Fuller", "Nicholas Coleman",
        "William Bishop", "Christine May", "Linda George", "Jean Meyer", "Cheryl Armstrong", "Danielle Welch", "Amanda Graham", "Janice Carter",
        "Catherine Brooks", "Lawrence Gonzalez", "Amy Russell", "Eugene Jimenez", "Joseph Carlson", "Peter McCoy", "Jerry Washington", "Carolyn Obrien",
        "Mark Walker", "Stephanie Hoffman", "Julie Pena", "Karen Curtis", "Bryan Cruz", "Madison Shaw", "Rachel Graham", "Susan Simpson", "Andrea Harrison",
        "Bryan Miller", "Vincent McDonald", "Jesse McCoy", "Christine Ramos", "Dorothy Riley", "Karen Warren", "Ashley Weber", "Judith Robinson",
        "Alan Mendez", "Donna Medina", "Helen Lane", "Douglas Clark", "Brenda Romero", "Doris Wells", "Patrick Howell", "Doris Lawrence", "Harry Jacobs",
        "Phillip Rose", "Deborah Patel", "Bryan Day", "Rachel Butler", "Paul Butler", "Judy Knight", "Willie Wallace", "Phillip Anderson", "Emma Black",
        "Lisa Lynch", "Kimberly Freeman", "Ronald West", "Kathleen Harris", "Martha Ruiz", "Phillip Moreno", "Robert Vargas", "Jesse Diaz", "Christine Weber",
        "Karen Stanley", "Theresa Edwards", "Kathryn Chavez", "Sarah Rios", "Danielle Wong", "Kathy Carr", "Joan Diaz", "Albert Walters",
        "Denise Kim", "Katherine Pearson", "Diana Richardson", "Harry Ford", "Eric Mills", "Sean Hicks", "Joe Brown", "Judith Morgan", "Harry Hunter",
        "Matthew Bryant", "Tyler Rose", "Mildred Delgado", "Emma Peters", "Walter Delgado", "Lauren Gilbert", "Christopher Romero"
    ];

    users = $.map(users, function (fullName) {
        var userName = fullName.replace(/ /g, '').toLowerCase();

        return {
          id: userName,
          name: userName,
          fullName: fullName
        }
    });

    users = $.grep(users, function (user) {
        return user.name.indexOf(query.term) === 0
    });

    success(users)
};

var table = '<p>This table uses features of the non-editable plugin to make the text in the<br /><strong>top row</strong> and <strong>left column</strong> uneditable.</p>' +
'    <table style="width: 60%; border-collapse: collapse;" border="1"> ' +
'        <caption class="mceNonEditable">Ephox Sales Analysis</caption> ' +
'       <tbody> ' +
'          <tr class="mceNonEditable"> ' +
'                <th style="width: 40%;">&nbsp;</th><th style="width: 15%;">Q1</th> ' +
'                <th style="width: 15%;">Q2</th><th style="width: 15%;">Q3</th> ' +
'                <th style="width: 15%;">Q4</th> ' +
'            </tr> ' +
'            <tr> ' +
'                <td class="mceNonEditable">East Region</td> ' +
'                <td>100</td> <td>110</td> <td>115</td> <td>130</td> ' +
'            </tr> ' +
'            <tr> ' +
'                <td class="mceNonEditable">Central Region</td> ' +
'                <td>100</td> <td>110</td> <td>115</td> <td>130</td> ' +
'            </tr> ' +
'            <tr> ' +
'                <td class="mceNonEditable">West Region</td> ' +
'                <td>100</td> <td>110</td> <td>115</td> <td>130</td> ' +
'            </tr> ' +
'        </tbody> ' +
'    </table>';

var table2 = '<div> ' +
'        <p>' +
'            Templates are a great way to help content authors get started creating content.  You can define the HTML for the template and ' +
'            then when the author inserts the template they have a great start towards creating content! ' +
'        </p> ' +
'        <p> ' +
'            In this example we create a simple table for providing product details for a product page on your web site.  The headings are ' +
'            made non-editable by loading the non-editable plugin and placing the correct class on the appropriate table cells. ' +
'        </p> ' +
'        <table style="width:90%; border-collapse: collapse;" border="1"> ' +
'        <tbody> ' +
'        <tr style="height: 30px;"> ' +
'            <th class="mceNonEditable" style="width:40%; text-align: left;">Product Name:</td><td style="width:60%;">{insert name here}</td> ' +
'        </tr> ' +
'        <tr style="height: 30px;"> ' +
'            <th class="mceNonEditable" style="width:40%; text-align: left;">Product Description:</td><td style="width:60%;">{insert description here}</td> ' +
'        </tr> ' +
'        <tr style="height: 30px;"> ' +
'            <th class="mceNonEditable" style="width:40%; text-align: left;">Product Price:</td><td style="width:60%;">{insert price here}</td> ' +
'        </tr> ' +
'        </tbody> ' +
'        </table> ' +
'    </div> ';

tinymce.init(demoBaseConfig);
