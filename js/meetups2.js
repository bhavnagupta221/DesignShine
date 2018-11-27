
function cancelFunc() {
  //console.log("hi beebe");
  var matches = JSON.parse(localStorage.getItem("matches"));
  var i = matches.indexOf(this.id);
  matches.splice(i);
  localStorage.setItem("matches", JSON.stringify(matches));
  location.reload();
};


$(document).ready(function() {
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#matches");
  
  var matches = JSON.parse(localStorage.getItem("matches"));

  var noMatches = document.getElementById("nomatches");
  
  if (matches.length == 0) {
   
    noMatches.style.display = "block";
  }
  else {
    noMatches.style.display = "none";
  matches_set = [];
  for(let m in matches) {
    if (!matches_set.includes(matches[m]))
      matches_set.push(matches[m]);
  }
  
  localStorage.setItem("matches", JSON.stringify(matches_set));  
    
  for(var i=0; i<matches_set.length; i++) {
    var item2 = JSON.parse(localStorage.getItem(matches_set[i]));
    var html = template(item2);
    parentDiv.append(html);
  }}
  
  
  var btns = document.querySelectorAll('.cancel');

  
  
  for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', cancelFunc);
}  
});

/*add id=cancel to html


<button id="{{name}}"class="cancel btn btn-dark">Cancel Meetup</button>

*/
