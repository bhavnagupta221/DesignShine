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
  var name = document.getElementById('name').value;
  var description = document.getElementById('desc').value;
  var expirationDate = document.getElementById('exp-date').value;
  var allergens = document.getElementById('allergens').value;
  console.log(allergens);
  if (name == "" || description == "" || expirationDate == "" || allergens == ""){
    alert("Please fill out all the fields")
    return false;
  }
  else if(tempItem.pic == null) {
    alert("Please upload a picture");
    return false;
  }
  else {
    tempItem.name = name;
    tempItem.description = description;
    tempItem.expirationDate = expirationDate;
    tempItem.allergens = allergens;

    localStorage.setItem("currItem", tempItem.name);
    localStorage.setItem(tempItem.name, JSON.stringify(tempItem));
    return true;
  }
});


$("#dropofftype-submit").click(function() {
  currItem = localStorage.getItem("currItem");
  tempItem = JSON.parse(localStorage.getItem(currItem));

  var produce = document.getElementById('produce').checked;
  var packaged = document.getElementById('packaged').checked;
  var prepared = document.getElementById('prepared').checked;

  if(produce == false && packaged == false && prepared == false) {
    alert("Please select one");
    return false;
  }

  else {
    tempItem.produce = produce;
    tempItem.packaged = packaged;
    tempItem.prepared = prepared;
    localStorage.setItem(currItem, JSON.stringify(tempItem));
    return true;
  }

});


$("#dropofftime-submit").click(function() {
  currItem = localStorage.getItem("currItem");
  tempItem = JSON.parse(localStorage.getItem(currItem));
  var startTime = (document.getElementById('starthour').value + ":" +
                        document.getElementById('startmin').value +
                        document.getElementById('startday-night').value);
  var endTime = (document.getElementById('endhour').value + ":" +
                      document.getElementById('endmin').value +
                      document.getElementById('endday-night').value);
  var e = document.getElementById("location");
  var location = e.options[e.selectedIndex].value;

  if (startTime == "null:nullnull" || endTime == "null:nullnull" || location == "blank"){
    alert("Please fill out all the fields");
    return false;
  }
  else {
    tempItem.startTime = startTime;
    tempItem.endTime = endTime;
    tempItem.location = location;
    localStorage.setItem(currItem, JSON.stringify(tempItem));
    return true;
  }

});


$(document).ready(function() {
  tempItem = {};
  //console.log(tempItem);
  //console.log(localStorage.key(1));
  //localStorage.removeAll();
});
