import { navbar, footer } from "../Component/CheckoutNavbarFooter.js";

let headerEl = document.getElementById("headerEl");
headerEl.innerHTML = navbar();

let footerEl = document.getElementById("footerEl");
footerEl.innerHTML = footer();

let amountDiv = document.getElementById('totalAdress');

let priceDetailsContainer = document.createElement('div');
priceDetailsContainer.setAttribute('id','priceDetailsContainer')

priceDetailsContainer.innerHTML =`<div class="priceDetails">PRICE DETAILS <span id="Pcount">( 0 Items )<span></div>
<div class="priceDetailDIv">

  <div class="totalDiv">
    <div>Total MRP</div>
    <div id="totalPrice">₹ 0</div>
  </div>

  <div class="totalDiv">
    <div>Discount On MRP</div>
    <div class="greenText" id="discountPrice">-₹ 0</div>
  </div>

  <div class="totalDiv">
    <div>Convinience Fee<span class="knowMore">  Know More</span></div>
    <div class="greenText">FREE</div>
  </div>

  <br/><hr/>

  <div class="totalAmountDiv totalDiv" >
    <div>Total Amount</div>
    <div id="totalAmount">₹ 0</div>
  </div>`

  amountDiv.append(priceDetailsContainer)

  const cartTotal = ()  => {
    let data = JSON.parse(localStorage.getItem("cart"));
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    for (let i = 0; i < data.length; i++) {
      sum1 += Number(data[i].off_price);
      sum2 += Number(data[i].price);
      sum3 += (data[i].off_price- data[i].price)
    }
    let total1 = sum1.toFixed(2)
    let total2 = sum2.toFixed(2)
    let discount = sum3.toFixed(2)
    //console.log(sum)
    document.getElementById("totalPrice").innerHTML = " ₹ " + total1;
    document.getElementById("totalAmount").innerHTML = " ₹ " + total2;
    document.getElementById("discountPrice").innerHTML = " - ₹ " + discount;
  
    localStorage.setItem("total", JSON.stringify(total2));
    localStorage.setItem("discount", JSON.stringify(discount));
  }
  cartTotal();