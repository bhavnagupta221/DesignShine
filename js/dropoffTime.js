var tempItem = {};

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
  currItem = (localStorage.getItem("currItem"));
  if(currItem != "") {
    tempItem = JSON.parse(localStorage.getItem(currItem));
    if(tempItem.startTime) {
      document.getElementById('starthour').value = tempItem.startTime.slice(0,tempItem.startTime.indexOf(":"));
      document.getElementById('startmin').value = tempItem.startTime.slice(2,4);
      document.getElementById('startday-night').value = tempItem.startTime.slice(4,6);
    }
    if(tempItem.endTime) {
      document.getElementById('endhour').value = tempItem.endTime.slice(0,tempItem.endTime.indexOf(":"));
      document.getElementById('endmin').value = tempItem.endTime.slice(2,4);
      document.getElementById('endday-night').value = tempItem.endTime.slice(4,6);
    }
    document.getElementById("location").value = tempItem.location;
    
  }
  //console.log(tempItem);
  //console.log(localStorage.key(1));
  //localStorage.removeAll();
});
