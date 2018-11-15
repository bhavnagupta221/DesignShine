var tempItem = {
  /*'name': "",
  "description": "",
  "expirationDate": "",
  "allergens": "",  
  "photo": "",
  'produce': "",
  'packaged': "",
  "prepared": "",
  "startTime": "",
  "endTime": "",
  "location": ""*/
};

$("#dropoffinfo-submit").click(function() {
  tempItem.name = document.getElementById('name').value;
  tempItem.description = document.getElementById('desc').value;
  tempItem.expirationDate = document.getElementById('exp-date').value;
  tempItem.allergens = document.getElementById('allergens').value;
  
  localStorage.setItem(tempItem.name, JSON.stringify(tempItem));
});


$("#dropofftype-submit").click(function() {
  currItem = localStorage.key(0);
  tempItem = JSON.parse(localStorage[currItem]);
  tempItem.produce = document.getElementById('produce').checked;
  tempItem.packaged = document.getElementById('packaged').checked;
  tempItem.prepared = document.getElementById('prepared').checked;
  localStorage.setItem(currItem, JSON.stringify(tempItem));
});


$("#dropofftime-submit").click(function() {
  currItem = localStorage.key(0);
  tempItem = JSON.parse(localStorage[currItem]);
  var e = document.getElementById("location");
  tempItem.location = e.options[e.selectedIndex].value;
  localStorage.setItem(currItem, JSON.stringify(tempItem));
  
});

$(document).ready(function() {
  //console.log(tempItem);  
  //console.log(localStorage.key(1));
  //localStorage.removeAll();
});