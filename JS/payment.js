const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", () => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// var inp = document.querySelector(".item-1-input");
// var pass = JSON.parse(localStorage.getItem("iddetails"));
// var form = document
//   .querySelector("btn-item-1")
//   .addEventListener("click", () => {
//     if (inp.value == pass.password) {
//       redirect_Page();
function redirect_Page() {
  let tID = setTimeout(function () {
    window.location.href = "../HTML/thankyou.html";
    window.clearTimeout(tID); // clear time out.
  }, 5000);
}
//   } else {
//     alert("Please Enter your right Password");
//   }
// });

document.getElementById("showMoreOffer").addEventListener("click", () => {
  showMore();
});

function showMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("showMoreOffer");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
var price = JSON.parse(localStorage.getItem("cart"));
let discountPrice = JSON.parse(localStorage.getItem("total"));
var changedPrice = document.querySelector(".price-details");
let total = 0;
console.log(price.length);
console.log(discountPrice);
console.log(totalMrp());

changedPrice.innerHTML = `
<h3>PRICE DETAILS (${length()})</h3>
<div class="price-1">
  <p>Total MRP</p>
  <span>&#8377;${totalMrp()}.00</span>
</div>
<div class="price-2">
  <p>Discount on MRP</p>
  <span>&#8377;-${discountPrice}</span>
</div>
<div class="price-2">
  <p>Convenience Fee</p>
  <span class="knowmore">Know More</span>
  <span>FREE</span>
</div>`;
function totalMrp() {
  for (var i = 0; i < price.length; i++) {
    total += price[i].off_price;
  }
  return total / 2;
}
function length() {
  if (price.length == 1) {
    return price.length + " " + "Item";
  } else {
    return price.length + " " + "Items";
  }
}
