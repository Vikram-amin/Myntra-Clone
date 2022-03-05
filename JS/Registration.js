let email = document.getElementById("email");
let password = document.getElementById("password");
let user_name = document.getElementById("user_name");
let login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", registerData);
window.onload(alert("Welcome to Registration Page!"));
function registerData() {
  if (email.value.length == 0) {
    alert("Please enter Email!");
  } else if (password.value.length == 0) {
    alert("Please enter Password!");
  } else if (user_name.value.length == 0) {
    alert("Please enter User Name!");
  } else {
    loadData(email.value, password.value, user_name.value);
  }
}

async function loadData(email, password, username) {
  let obj = {
    email: email,
    password: password,
    username: username,
  };

  console.log(obj);
  localStorage.setItem("id-details", JSON.stringify(obj));
  alert("Registration Successfull!");
  window.location.href = "./login.html";
}
