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

function encodeImageAsURL() {
  console.log("image processing");
  var elem = document.getElementById('uploadpic');
  var file = elem.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    tempItem.pic = reader.result;
  }
  reader.readAsDataURL(file);
}

$("#dropoffinfo-submit").click(function() {
  tempItem.name = document.getElementById('name').value;
  tempItem.description = document.getElementById('desc').value;
  tempItem.expirationDate = document.getElementById('exp-date').value;
  tempItem.allergens = document.getElementById('allergens').value;
  
  localStorage.setItem("currItem", tempItem.name);
  localStorage.setItem(tempItem.name, JSON.stringify(tempItem));
});


$("#dropofftype-submit").click(function() {
  currItem = localStorage.getItem("currItem");
  tempItem = JSON.parse(localStorage.getItem(currItem));
  
  tempItem.produce = document.getElementById('produce').checked;
  tempItem.packaged = document.getElementById('packaged').checked;
  tempItem.prepared = document.getElementById('prepared').checked;
  localStorage.setItem(currItem, JSON.stringify(tempItem));
});


$("#dropofftime-submit").click(function() {
  currItem = localStorage.getItem("currItem");
  tempItem = JSON.parse(localStorage.getItem(currItem));
  tempItem.startTime = (document.getElementById('starthour').value + ":" + 
                        document.getElementById('startmin').value +
                        document.getElementById('startday-night').value);
  tempItem.endTime = (document.getElementById('endhour').value + ":" +
                      document.getElementById('endmin').value +
                      document.getElementById('endday-night').value);
  var e = document.getElementById("location");
  tempItem.location = e.options[e.selectedIndex].value;
  localStorage.setItem(currItem, JSON.stringify(tempItem));
  
});


$(document).ready(function() {
  tempItem = {};
  //console.log(tempItem);  
  //console.log(localStorage.key(1));
  //localStorage.removeAll();
});