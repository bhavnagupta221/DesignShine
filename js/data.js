var eggs = {'title': 'Eggs', 'seller': 'Jerrica', 'type': 'produce',
            'description': '1 dozen fresh eggs', 'expiration date': '11/21/18',
            'allergens': 'egg', 'image': '../images/eggs.jpeg',
            'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center',
            'next': 'Broccoli'};

var broccoli = {'title': 'Broccoli', 'seller': 'Jerrica', 'type': 'produce',
                'description': 'yum yum broccoli', 'expiration date': '11/28/18',
                'allergens': 'N/A', 'image': '../images/broccoli.jpg',
                'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center',
                'next': 'Brownies'};

var brownies = {'title': 'Brownies', 'seller': 'Jerrica', 'type': 'prepared', 'description': 'homemade supreme triple chunk brownies', 'expiration date': '11/12/18', 'allergens': 'eggs, nuts', 'image': '../images/brownies.jpg', 'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center', 'next': 'Pasta'};

var pasta = {'title': 'Pasta', 'seller': 'Jerrica', 'type': 'packaged', 'description': 'uncooked box of pasta', 'expiration date': '1/1/22', 'allergens': 'gluten', 'image': '../images/pasta.jpg', 'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center', 'next': 'Banana'};

var banana = {'title': 'Banana', 'seller': 'Jerrica', 'type': 'produce', 'description': '1 singular banana', 'expiration date': '11/12/18', 'allergens': 'N/A', 'image': '../images/banana.jpg', 'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center', 'next': 'Pistachios'};

var pistachios = {'title': 'Pistachios', 'seller': 'Jerrica', 'type': 'packaged', 'description': 'bag of pistachios', 'expiration date': '10/1/19', 'allergens': 'nuts', 'image': '../images/pistachios.jpg', 'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center', 'next': 'Cheerios'};

var cheerios = {'title': 'Cheerios', 'seller': 'Jerrica', 'type': 'packaged', 'description': '1 box of Cheerios', 'expiration date': '1/1/19', 'allergens': 'gluten', 'image': '../images/cheerios.jpg', 'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center', 'next': 'Fruit Loops'};

var fruitloops = {'title': 'Fruit Loops', 'seller': 'Jerrica', 'type': 'packaged', 'description': '1 box of Fruit Loops', 'expiration date': '1/1/19', 'allergens': 'gluten', 'image': '../images/frootloops.jpg', 'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center', 'next': 'Done'};

var done = {'title': 'Done'};

var complexData = [eggs, broccoli, brownies, pasta, banana, pistachios, cheerios, fruitloops];

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log('hello world');

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");

  // BEGIN - STEP 1
  /*
  // start with a simple template
  var html = template(sampleData);
  console.log(html);
  parentDiv.append(html);
  // now iterate through the complexData list and keep appending:
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }*/
  
  // END - STEP 1


  // BEGIN - STEP 2
  /*
  // when you first load the page, set a custom name if you have one:
  var name = localStorage.getItem('customName');
  if (name) {
    $("#myName").html(name);
  }
  // use localStorage to store your name
  $("#changeName").click(function() {
    var newName = prompt("What's your new name?");
    if (newName) {
      $("#myName").html(newName);
      localStorage.setItem('customName', newName);
    }
  });
  */
  // END - STEP 2


  // BEGIN - STEP 3
  
  // Use the URLSearchParams API to make fake-database queries using a URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  var queryParams = new URLSearchParams(window.location.search);
  var projectTitle = queryParams.get('project');
  console.log('query for', projectTitle);
  // to get this to work like in class, comment out the "STEP 1" parts
  // above between BEGIN and END.

  if (projectTitle == "Done") {
    window.location.href = '../html/noMatch.html';
  }
  
  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    if (curData.title == projectTitle) {
      var curHtml = template(curData);
      parentDiv.append(curHtml);
    }
  }
  
  // END - STEP 3
});