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

const cartCountInfo = document.getElementById("cart-count-info");
let count = JSON.parse(localStorage.getItem("cart"));
cartCountInfo.textContent = count.length;
var update = document.querySelector(".dropdown-content");
var data = JSON.parse(localStorage.getItem("id-details"));
// console.log(data);
if (data == null) {
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
    <p><small class="username">${data.username}</small><br>
    <small>${data.email}</small></p>
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
}
