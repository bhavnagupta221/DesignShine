var pickupQuery = {};

$("#pickuptype-submit").click(function() {
  pickupQuery.produce = document.getElementById('produce').checked;
  pickupQuery.packaged = document.getElementById('packaged').checked;
  pickupQuery.prepared = document.getElementById('prepared').checked;
  
  localStorage.setItem("currQuery", JSON.stringify(pickupQuery));
});

$("#pickuptime-submit").click(function() {
  console.log("clicked");
  pickupQuery = JSON.parse(localStorage.getItem("currQuery"));
  pickupQuery.startTime = (document.getElementById('starthour').value + ":" + 
                        document.getElementById('startmin').value +
                        document.getElementById('startday-night').value);
  pickupQuery.endTime = (document.getElementById('endhour').value + ":" +
                      document.getElementById('endmin').value +
                      document.getElementById('endday-night').value);
  var e = document.getElementById("location");
  pickupQuery.location = e.options[e.selectedIndex].value;
  localStorage.setItem("currQuery", JSON.stringify(pickupQuery));
});
