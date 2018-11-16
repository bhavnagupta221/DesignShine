$(document).ready(function() {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#matches");
  var item = {"user": "Bhavna", "item": "Eggs",
  "time": "5:30-6:00 PM", "location": "Price Center",
  "description": "allergens for eggs"};
  var html = template(item);
  parentDiv.append(html);
  var item2 = {"user": "sarah", "time": "6"};
  var html = template(item2);
  parentDiv.append(html);
});
