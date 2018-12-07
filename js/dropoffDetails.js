var tempItem = {};

function encodeImageAsURL() {
  console.log("image processing");
  var elem = document.getElementById('uploadpic');
  var file = elem.files[0];
  var reader = new FileReader();
  console.log(file.size/1024);
  if (file.size/1024 > 500) {
    alert('File size exceeds 500kb');
    elem.value = "";
  }
  else {
    reader.onloadend = function() {
      tempItem.pic = reader.result;
    }
    reader.readAsDataURL(file);
  }
}


$("#dropoffinfo-submit").click(function() {
  var name = document.getElementById('name').value;
  var description = document.getElementById('desc').value;
  var expirationDate = document.getElementById('exp-date').value;
  var allergens = document.getElementById('allergens').value;
  if (name == "" || description == "" || expirationDate == "" || allergens == ""){
    alert("Please fill out all the fields");
    return false;
  }
  else if(tempItem.pic == null) {
    alert("Please upload a picture");
    return false;
  }
  else {
    console.log("save");
    tempItem.name = name;
    tempItem.description = description;
    tempItem.expirationDate = expirationDate;
    tempItem.allergens = allergens;

    localStorage.setItem("currItem", tempItem.name);
    localStorage.setItem(tempItem.name, JSON.stringify(tempItem));
    return true;
  }
});



$(document).ready(function() {
  tempItem = {};
  var currItem = (localStorage.getItem("currItem"));
  if(currItem != "") {
    tempItem = JSON.parse(localStorage.getItem(currItem));
    document.getElementById('name').value = tempItem.name;
    document.getElementById('desc').value = tempItem.description;
    document.getElementById('exp-date').value = tempItem.expirationDate;
    document.getElementById('allergens').value = tempItem.allergens;

  }

});
