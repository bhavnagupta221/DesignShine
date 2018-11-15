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
var myimg = "";

/*function encodeImageAsURL() {
  console.log("hi!");
  var file = document.getElementById("uploadpic").files[0];
  var filereader = new FileReader();
  filereader.onload = function(fileLoadedEvent) {
    var srcData = fileLoadedEvent.target.result;
    //var newImage = document.createElement('img');
    //newImage.src = srcData;

    //document.getElementById
  }
  myimg = filereader.readAsDataURL(file);
};*/

var uploadpic = document.getElementById("uploadpic");


/*input.onchange = function() {
  console.log("storing");
  
  var imgCanvas = document.createElement("canvas"),
      imgContext = imgCanvas.getContext("2d");
  
  imgCanvas.width = uploadpic.width;
  imgCanvas.height = uploadpic.height;
  
  imgContext.drawImage(uploadpic,0,0,uploadpic.width,uploadpic.height);
  
  myimg = imgCanvas.toDataURL("image/png");
  
});*/


$("#dropoffinfo-submit").click(function() {
  tempItem.name = document.getElementById('name').value;
  tempItem.description = document.getElementById('desc').value;
  tempItem.expirationDate = document.getElementById('exp-date').value;
  tempItem.allergens = document.getElementById('allergens').value;
  
  //tempItem.image = myimg;
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
  //console.log(tempItem);  
  //console.log(localStorage.key(1));
  //localStorage.removeAll();
});