
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
  if(!matches.includes(order[counter]))
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

