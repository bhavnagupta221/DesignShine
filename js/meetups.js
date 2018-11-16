$(document).ready(function() {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#matches");
  
  var matches = JSON.parse(localStorage.getItem("matches"));
  
  for(var i=0; i<matches.length; i++) {
    /*var item = {"user": "Bhavna", "item": "Eggs",
    "time": "5:30-6:00 PM", "location": "Price Center",
    "description": "allergens for eggs"};
    var html = template(item);
    parentDiv.append(html);*/


    var item2 = JSON.parse(localStorage.getItem(matches[i]));
    var html = template(item2);
    parentDiv.append(html);
  }
});
