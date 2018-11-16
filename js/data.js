var eggs = {'title': 'Eggs', 'seller': 'Jerrica', 'type': 'produce',
            'description': '1 dozen fresh eggs', 'expiration date': '11/21/18',
            'allergens': 'egg', 'image': '../images/eggs.jpeg',
            'start-time': '6:00PM', 'end-time': '6:50PM', 'location': 'Price Center',
            'next': 'Brownies'};

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


$("#dislike").click(function() {
  var counter = parseInt(localStorage.getItem("counter"));
  counter += 1;
  order = JSON.parse(localStorage.getItem("itemsOrder"));
  if (counter >= order.length) {
    window.location = "noMatch.html";
  }
  else {
    window.location = "ItemTemplate.html?name=" + order[counter];
    localStorage.setItem("counter", counter.toString());
  }
  
});

$("#submit").click(function() {
  var counter = parseInt(localStorage.getItem("counter"));
  order = JSON.parse(localStorage.getItem("itemsOrder"));
  
  localStorage.setItem("counter", "0");
  
  window.location = "match.html?name=" + order[counter];
  matches = JSON.parse(localStorage.getItem("matches"));
  matches.push(order[counter]);
  localStorage.setItem("matches", JSON.stringify(matches));
  
});

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  
  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedProjects");

  var queryParams = new URLSearchParams(window.location.search);
  var foodItem = queryParams.get('name');
  //console.log('query for', foodItem);
  
  if (foodItem == "Done") {
    window.location.href = '../html/noMatch.html';
  }
  
  for (var i=0; i<localStorage.length; i++) {
    currElem = localStorage.key(i);
    if (currElem==foodItem) {
      console.log(i);
      var curHtml = template(JSON.parse(localStorage.getItem(currElem)));
      parentDiv.append(curHtml);
    } 
  }
  
});

