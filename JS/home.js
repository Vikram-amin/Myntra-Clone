import { navbar } from "../Component/navbar.js";
import { footer } from "../Component/footer.js";
let header = document.getElementById("Home-headerEl");
header.innerHTML = navbar();
let footerEl = document.getElementById("home-footer");
footerEl.innerHTML = footer();
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);
// const btn_redirect = document.querySelector(".btn-redirect");
const btn = document.querySelector(".login-btn");
var val = btn.innerHTML;
btn.addEventListener("click", () => {
  localStorage.setItem("btn_text", JSON.stringify(val));
  profile_details();
});
var update_profile_dropdown = JSON.parse(localStorage.getItem("btn_text"));
console.log(update_profile_dropdown);
const cartCountInfo = document.getElementById("cart-count-info");
let count = JSON.parse(localStorage.getItem("cart"));
cartCountInfo.textContent = count.length;
var update = document.querySelector(".dropdown-content");
var data = JSON.parse(localStorage.getItem("id-details"));
function profile_details() {
  if (data == null || update_profile_dropdown == "LOGOUT") {
    update.innerHTML = `
<h3>Welcome</h3>
  <p>To access account and manage orders</p>
  <button class="btn-redirect"> <a href="../HTML/Registration.html" class="login-btn">LOGIN / SIGNUP</a> </button>
  <hr class="hr1">
  <a href="#">Orders</a>
  <a href="#">Wishlist</a>
  <a href="#">Gift Cards</a>
  <a href="#">Contact Us</a>
  <a href="#">Myntra Insider <span class="new">New</span></a>
  <hr class="hr2">
  <a href="#">Myntra Credit</a>
  <a href="#">Coupons</a>
  <a href="#">Saved Cards</a>
  <a href="#">Saved Addresses</a>
 `;
  } else {
    update.innerHTML = `
  <h3>Welcome</h3>
    <p class="username">${data.username}<br>
    ${data.email}</p>
    <button class="btn-redirect"> <a class="login-btn">LOGOUT</a> </button>
    <hr class="hr1">
    <a href="#">Orders</a>
    <a href="#">Wishlist</a>
    <a href="#">Gift Cards</a>
    <a href="#">Contact Us</a>
    <a href="#">Myntra Insider <span class="new">New</span></a>
    <hr class="hr2">
    <a href="#">Myntra Credit</a>
    <a href="#">Coupons</a>
    <a href="#">Saved Cards</a>
    <a href="#">Saved Addresses</a>
   `;
  }
}
// profile_details();
