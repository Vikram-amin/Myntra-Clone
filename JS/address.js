import { navbar, footer } from "../Component/CheckoutNavbarFooter.js";

let headerEl = document.getElementById("headerEl");
headerEl.innerHTML = navbar();

let footerEl = document.getElementById("footerEl");
footerEl.innerHTML = footer();

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("closeBtn2")[0];
btn2.onclick = function () {
  modal2.style.display = "block";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
var photo = JSON.parse(localStorage.getItem("cart"));
let discountPrice = JSON.parse(localStorage.getItem("total"));
let total = 0;
var price_details = document.querySelector(".payments_details");
var estimate_delivery = document.querySelector(".delivery-estimate-info-box");
console.log(photo);

function deliveryUpdates() {
  for (var i = 0; i < photo.length; i++) {
    console.log(photo[i].images.image1);
    // return photo[i].images.image1;

    estimate_delivery.innerHTML = `
    <div class="delivery-estimate-info">
      <img
        src="${photo[i].images.image1}"
        alt="product"
        style="height: 48px; width: 36px; display: inline-block"
      />
      <div class="deliery-date">
        <div>
          <span style="font-family: Whitney, Helvetica, Arial"
            >ESTIMATED DELIVERY</span
          >
          <span
            style="
              font-family: Whitney, Helvetica, Arial;
              font-weight: 600;
            "
            >15 MAR 2022</span
          >
        </div>
      </div>
    </div>
  </div>`;
  }
}
deliveryUpdates();
// price_details.innerHTML = ` <h2 style="color: rgb(61, 61, 61); font-size: 18px; padding: 10px">
// Price Details
// </h2>
// <hr />
// <div
// style="
//   color: rgb(36, 36, 36);
//   font-size: 13px;
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
// "
// >
// <div>Total MRP</div>
// <div>${total()}</div>
// </div>
// <div
// style="
//   color: rgb(36, 36, 36);
//   font-size: 13px;
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
// "
// >
// <div>Discounted on</div>
// <div>MRP -${discount()}</div>
// </div>
// <div
// style="
//   color: rgb(36, 36, 36);
//   font-size: 13px;
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
// "
// >
// <div>Convenience fee</div>
// <div><b>Free</b></div>
// </div>
// <hr />
// <div
// style="
//   color: rgb(36, 36, 36);
//   font-size: 20px;
//   font-weight: 400px;
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
// "
// >
// <div>Total</div>
// <div>${discountPrice.total}</div>
// </div>
// <hr />
// <button id="Place_Order">
// <a href="../HTML/Payment.html" style="color: white"
//   >Make Payment</a
// >
// </button>
// `;
