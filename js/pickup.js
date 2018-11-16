var tempItem = {
  'produce': "",
  'packaged': "",
  "prepared": "",
  "startTime": "",
  "endTime": "",
  "location": ""
};

$("#pickuptype-submit").click(function() {
  pickupQuery.produce = document.getElementById('produce').checked;
  pickupQuery.packaged = document.getElementById('packaged').checked;
  pickupQuery.prepared = document.getElementById('prepared').checked;
  
  localStorage.setItem("currQuery", JSON.stringify(pickupQuery));
  
  //create order of items that match search
  var matches = [];

  for (var i=0; i<localStorage.length; i++) {
    currElem = localStorage.key(i);
    if (currElem=="currItem" || currElem == "currQuery" || currElem == "itemsOrder") {
      continue;   
    } 
    
    var item = JSON.parse(localStorage.getItem(currElem));
    
    if (item.produce && pickupQuery.produce) {
      matches.push(item.name);
    }
    else if (item.packaged && pickupQuery.packaged) {
      matches.push(item.name);
    }
    else if (item.prepared && pickupQuery.prepared) {
      matches.push(item.name);
    }
  }
  
  localStorage.setItem("itemsOrder", JSON.stringify(matches));
  
  console.log("ItemTemplate.html?name=" + matches[0]);
  
  if(matches.length > 0) {
    window.location = "ItemTemplate.html?name=" + matches[0];
    localStorage.setItem("counter", "0");
  }
  else
    window.location = "noMatch.html";
$("#dropofftype-submit").click(function() {
  tempItem = JSON.parse(localStorage[name]);
  tempItem.produce = document.getElementById('produce').checked;
  tempItem.packaged = document.getElementById('packaged').checked;
  tempItem.prepared = document.getElementById('prepared').checked;
 // localStorage.setItem(name, JSON.stringify(tempItem))
>>>>>>> 0d79f1c4ea66df140dbef56e7cacc5f1e1cc6522
});

$("#dropoffinfo-submit").click(function() {
  tempItem.name = document.getElementById('name').value;
  tempItem.description = document.getElementById('desc').value;
  tempItem.expirationDate = document.getElementById('exp-date').value;
  tempItem.allergens = document.getElementById('allergens').value;

  localStorage.setItem(tempItem.name, JSON.stringify(tempItem));
});

$(document).ready(function() {
  //console.log(tempItem);
  console.log(localStorage.key(1));

});
