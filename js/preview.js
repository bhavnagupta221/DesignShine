$(document).ready(function() {

  // compile the template
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var parentDiv = $("#templatedPreview");

  //var queryParams = new URLSearchParams(window.location.search);
  //var projectTitle = queryParams.get('name');
  
  
  currItem = localStorage.getItem("currItem");  
  item = JSON.parse(localStorage.getItem(currItem));
  var html = template(item);
  parentDiv.append(html);
  
});

$("#submit").click(function() {
  localStorage.setItem("currItem", "");
  
});