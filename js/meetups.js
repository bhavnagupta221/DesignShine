$(document).ready(function() {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#matches");

  var matches = JSON.parse(localStorage.getItem("matches"));

  for(var i=0; i<matches.length; i++) {
    var item2 = JSON.parse(localStorage.getItem(matches[i]));
    var html = template(item2);
    parentDiv.append(html);
  }
});
