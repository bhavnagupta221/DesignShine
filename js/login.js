var eggs = {'name': 'Eggs', 'packaged': false, 'produce': true, 'prepared': false,
            'description': '1 dozen fresh eggs', 'expirationDate': '11/21/18',
            'allergens': 'egg', 'pic': '../images/eggs.jpeg',
            'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var broccoli = {'name': 'Broccoli', 'packaged': false, 'produce': true, 'prepared': false,
                'description': 'yum yum broccoli', 'expirationDate': '11/28/18',
                'allergens': 'N/A', 'pic': '../images/broccoli.jpg',
                'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var brownies = {'name': 'Brownies', 'packaged': false, 'produce': false, 'prepared': true, 'description': 'homemade supreme triple chunk brownies', 'expirationDate': '11/12/18', 'allergens': 'eggs, nuts', 'pic': '../images/brownies.jpg', 'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var pasta = {'name': 'Pasta', 'packaged': true, 'produce': false, 'prepared': false, 'description': 'uncooked box of pasta', 'expirationDate': '1/1/22', 'allergens': 'gluten', 'pic': '../images/pasta.jpg', 'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var banana = {'name': 'Banana', 'packaged': false, 'produce': true, 'prepared': false, 'description': '1 singular banana', 'expirationDate': '11/12/18', 'allergens': 'N/A', 'pic': '../images/banana.jpg', 'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var pistachios = {'name': 'Pistachios', 'packaged': true, 'produce': false, 'prepared': false, 'description': 'bag of pistachios', 'expirationDate': '10/1/19', 'allergens': 'nuts', 'pic': '../images/pistachios.jpg', 'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var cheerios = {'name': 'Cheerios', 'packaged': true, 'produce': false, 'prepared': false, 'description': '1 box of Cheerios', 'expirationDate': '1/1/19', 'allergens': 'gluten', 'pic': '../images/cheerios.jpg', 'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};

var fruitloops = {'name': 'Fruit Loops', 'packaged': true, 'produce': false, 'prepared': false,  'description': '1 box of Fruit Loops', 'expirationDate': '1/1/19', 'allergens': 'gluten', 'pic': '../images/frootloops.jpg', 'startTime': '6:00PM', 'endTime': '6:50PM', 'location': 'Price Center'};


$(document).ready(function() {
  console.log("crazyCRAZY");
  localStorage.setItem("currItem", "");
});

//test the link between files
$( "p" ).click(function() {
    console.log( "You clicked a paragraph!" );
});

//changes color of login in button
$('#login').mousemove(function() {
	$(this).css("background-color", "#57c658");
	$(this).css("border-color", "#57c658");
});

$('#login').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});

//changes color of submit button, create account
$('#submit').mousemove(function() {
	$(this).css("background-color", "#57c658");
	$(this).css("border-color", "#57c658");
});

$('#submit').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});

//changes color of back button, create account
$('#back').mousemove(function() {
	$(this).css("background-color", "#c40916");
	$(this).css("border-color", "#c40916");
});

$('#back').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});

//hover over user profile link
$('.profile').mousemove(function() {
	$(this).css("background-color", "black");
	$(this).css("color","white");
	$('#seller').css("color","white");
	$(this).css("border-color","white")
});

$('.profile').mouseleave(function() {
	$(this).css("background-color","white");
	$(this).css("color", "black");
	$('#seller').css("color","black");
	$(this).css("border-color","black");
});

$("#login").click( function() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("psw").value;
  localStorage.setItem("matches", JSON.stringify([]));
  
  localStorage.setItem("Eggs", JSON.stringify(eggs));
  localStorage.setItem("Broccoli", JSON.stringify(broccoli));
  localStorage.setItem("Brownies", JSON.stringify(brownies));
  localStorage.setItem("Pasta", JSON.stringify(pasta));
  localStorage.setItem("Banana", JSON.stringify(banana));
  localStorage.setItem("Pistachios", JSON.stringify(pistachios));
  localStorage.setItem("Cheerios", JSON.stringify(cheerios));
  localStorage.setItem("Fruit Loops", JSON.stringify(fruitloops));
  
  
  
  if ( username == "testUser" && password == "1234"){
    window.location = "home.html";
    return true;
  }
  else {
    alert("Invalid Login Information!")
    window.location = "index.html";
    return false;
  }
  
});
