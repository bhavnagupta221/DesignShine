var pickupQuery = {};

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
  
  window.location = "ItemTemplate.html?name=" + matches[0];
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
