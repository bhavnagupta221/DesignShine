var tempItem = {};

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


$(document).ready(function() {
  tempItem = {};
  currItem = (localStorage.getItem("currItem"));
  if(currItem != "") {
    tempItem = JSON.parse(localStorage.getItem(currItem));
    document.getElementById('produce').checked = tempItem.produce;
    document.getElementById('packaged').checked = tempItem.packaged;
    document.getElementById('prepared').checked = tempItem.prepared;
  }

});
