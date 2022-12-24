document.getElementById("dis_Name").innerHTML = localStorage.getItem("userName");
document.getElementById("dis_email").innerHTML = localStorage.getItem("userEmail");
document.getElementById("dis_password").innerHTML = localStorage.getItem("password");

function deleteItems() {
    localStorage.clear();
    window.location.href = "index.html";
  }