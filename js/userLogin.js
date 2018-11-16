function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("psw").value;
  if ( username == "redBlue" && password == "shoelaces"){
    alert ("Login successfully");
    window.location = "home.html";
    return true;
  }
  else {
    alert("wrong login information!")
    window.location = "index.html";
    return false;
  }
}

//      <a href="html/home.html" class="btn btn-dark" id="login">Login</a>
