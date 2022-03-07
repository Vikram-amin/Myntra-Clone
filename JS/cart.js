import {navbar,footer} from '../Component/CheckoutNavbarFooter.js'
import { displaySimilarProducts } from "../Script/showData.js";
import { items } from "../Component/similarProducs.js";

let headerEl = document.getElementById('headerEl');
headerEl.innerHTML = navbar()

let footerEl = document.getElementById('footerEl');
footerEl.innerHTML = footer()

let cartParent = document.getElementById('cartParent');

let cartLeft = document.createElement('div');
cartLeft.setAttribute('id','cartLeft')

let avilableOfferDiv = document.createElement('div');
avilableOfferDiv.setAttribute('id','avilableOfferDiv')

avilableOfferDiv.innerHTML = `   <div class="avail_offer">
<div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKgAWECXD-dGwIJDs8PmoO65IAVSAHqqGi3Q&usqp=CAU" alt=""><pre><b>  Available Offers</b></pre></div>
<ul>
    <li> 5% Unlimited Cashback on Flipkart Axis Bank Ctedit Card TCA</li> <span id="dots"></span><span id="more">
        <li>10% Cashback upto R 100 on Paytm Postpaid transaction on a min spend of Rs 1000 , TCA
        </li>
        <li>10% Cashback upto R 200 on Ola Money Postpaid or wallet transaction on a min spend of Rs 100 TCA</li>
        <li>10% Cashback up to R 750 on Dhani One Freedom Card on a min spend of Rs 1,200. TCA</li>
        <li>10% Cashback Upto R$ 150 on Mobikwik wallet transaction of min Rs 1500 TCA
        </li>
        <li>5% Cashback upto R$ 150 and 3X Reward points on a minimum spend of Rs 1,500 with PayZapp.TCA
        </li>
        <li>Flat Rs 200 Cashback on first Airtel Payments Bank transaction on Myntra on a min spend of Rs 2,000. TCA
        </li></span>
</ul>
<button id="showMoreOffer"><b>Show more </b></button>
</div>`


cartLeft.append(avilableOfferDiv)

let dataDiv = document.createElement('div')
dataDiv.setAttribute('id','dataDiv')

const displayData =(data) =>{
    dataDiv.innerHTML="";
    data.forEach(el => {
       let div = document.createElement('div')
       div.setAttribute('id','outerDiv')

       let imgDiv = document.createElement('div')
       imgDiv.setAttribute('id','imgDiv')
       let img = document.createElement('img');
       img.src = el.images.image1;
       imgDiv.append(img)

       let descriptionDiv = document.createElement('div')
       descriptionDiv.setAttribute('id','descriptionDiv')
       descriptionDiv.innerHTML =`<div>
       <div class="brandname"> ${el.brand}</div>
       <div class ='title'> ${el.title}</div>
       <div id="selectDiv">
       <select name="size" id="size">
       <option value="S">SIZE: S</option>
       <option value="M">SIZE: M</option>
       <option value="L">SIZE: L</option>
       <option value="Xl">SIZE: XL</option>
       <option value="XXl">SIZE: XXL</option>
   </select>
   <select name="quantity" id="quantity">
       <option value="1">Qty: 1</option>
       <option value="2">Qty: 2</option>
       <option value="3">Qty: 3</option>
       <option value="4">Qty: 4</option>
       <option value="5">Qty: 5</option>
       <option value="6">Qty: 6</option>
       <option value="7">Qty: 7</option>
       <option value="8">Qty: 8</option>
       <option value="9">Qty: 9</option>
       <option value="10">Qty: 10</option>
   </select>
       </div>
       <div class="price"> Rs. ${el.price} <span class="line-through">Rs. ${el.off_price}</span> <span class="discount">(${el.discount}% OFF)</span>
       </div>`

       div.append(imgDiv,descriptionDiv)

       let undo = document.createElement("button");
       undo.setAttribute("id", "undo");
       undo.textContent = "X";
       div.append(undo)
  
       dataDiv.append(div)

       undo.addEventListener("click", () => {
        removeCartList(el.id);
      });
     
    });
    cartLeft.append(dataDiv)
}

displayData(JSON.parse(localStorage.getItem('cart')))

//------------------------------------------------------------------------------------

    let cartRight = document.createElement('div');
    cartRight.setAttribute('id','cartRight')

    let coupensDiv = document.createElement('div');
    coupensDiv.innerHTML =`<div class="coupensDiv">
    <div class="couponsBox">
        <div>
            <p class='Cname'>COUPONS</p>
        </div>
        <div class='Capply'>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSididhxOn_gqSKHQ_QWoDHQiFq6_CVDWjA&usqp=CAU'/> <span> Apply Coupons </span>  <button id="applyNow" id="applyCoupensbtn" ><b>Apply</b></button> </div>
            <div>
            </div>
        </div>
    </div>
    </div>`

    cartRight.append(coupensDiv)

    let giftsDiv = document.createElement('div');
    giftsDiv.innerHTML=`    <p class='Gname'>GIFITNG AND PERSONALIZAION</p>
    <div class="gifting">
    <div><img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="" ></div>
    <div>
        <p>Buying for a loved one?</p>
        <p>Gift wrap and personalised message on card <br> Only 25 RS.</p>
        <button  id="applyNowG" ><b>Add Gift Wrap</b></button>
    </div>
    </div>`

    cartRight.append(giftsDiv);

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
        <div>Coupon Discount</div>
        <button id="applyCoupensbtn" class><b>Apply Coupen</b></button>
      </div>

      <div class="totalDiv">
        <div>Convinience Fee<span class="knowMore">  Know More</span></div>
        <div class="greenText">FREE</div>
      </div>

      <br/><hr/>

      <div class="totalAmountDiv totalDiv" >
        <div>Total Amount</div>
        <div id="totalAmount">₹ 0</div>
      </div>

      <div class="noConFeeImg">
      <img src="../IMAGES/cart/noConvFee.jpg"/>
    </div>

    <button id="placeOrder">PLACE ORDER</button>

    </div> <br> <br>`

    cartRight.append(priceDetailsContainer);

    cartParent.append(cartLeft,cartRight)




  //----------------------------------------------------------------
  //sililar product
let cartContainer = document.getElementById('cartContainer')
  let SimilarProductontainer = document.createElement("div");

  let Cpara = document.createElement("div");
  Cpara.innerHTML =` <div class="container" id="suggestions">
      <h4 >You May Also Like:</h4>
      <button class="myBtn1">All</button>
      <button class="myBtn">Shoes</button>
      <button class="myBtn">Beauty Accesories</button>
      <button class="myBtn">Lipsticks</button>
  </div>`

  Cpara.setAttribute("class", "Cpara");

  let productCOntainerItems = document.createElement("div");
  productCOntainerItems.setAttribute("id", "productCOntainerItems");

  displaySimilarProducts(items, productCOntainerItems); //import

  SimilarProductontainer.append(Cpara);
  SimilarProductontainer.append(productCOntainerItems);
  cartContainer.append(SimilarProductontainer);

  //-------------------------------------------------------------------------------------


document.getElementById('showMoreOffer').addEventListener('click',()=>{
    showMore()
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

//-------------------------------------------------------remove item from cart

const removeCartList = (id) => {
    // console.log(id)
    let data = JSON.parse(localStorage.getItem("cart"));
    const newData = data.filter((item) => item.id != id);
    localStorage.setItem("cart", JSON.stringify(newData));
    location.reload();
  };
  displayData(JSON.parse(localStorage.getItem("cart")));

  /////--------------------------------------------------update count

let cartCount = document.getElementById('Pcount')
const updateCartCount = (cart) => {
  cartCount.textContent = `( ${cart.length} Items)`
}
updateCartCount(JSON.parse(localStorage.getItem('cart')))

/// -------------------------------------------------------cart total


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
    localStorage.setItem("totalMRP", JSON.stringify(total1));
    localStorage.setItem("discount", JSON.stringify(discount));
  }
  cartTotal();

  //----------------------------------------------------------apply Coupen

  let applyCoupenButton = document.getElementById('applyCoupenSub');
  applyCoupenButton.addEventListener('click',sub)

  function sub(){
    console.log("hi")
    let amt = document.getElementById("totalAmount")
    let promo = document.getElementById('promo').value;

    let total = JSON.parse(localStorage.getItem('total'));
    let discountAmt = JSON.parse(localStorage.getItem('discount'));
   
    let num = Number(total)
    let Dnum = Number(discountAmt)
   // console.log(num)

    if(promo == "masai30"){
    let discount= (num *(30/100))
    let totalprice = (num-discount).toFixed(2)
    document.getElementById("totalAmount").innerHTML = " ₹ "  + totalprice; 
    let totalDiscount = Dnum + discount

    document.getElementById("discountPrice").innerHTML = " - ₹ " + totalDiscount;

   
    localStorage.setItem("total", JSON.stringify(totalprice));
    localStorage.setItem("discount", JSON.stringify(totalDiscount));
    }else{  
      alert("Promo Code not Valid")
    }
    
    }

//----------------------------------------------------------

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("applyNow");
var span3 = document.getElementsByClassName("closeBtn3")[0];
let applyCoupenButtonA = document.getElementById('applyCoupenSub');
btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

applyCoupenButtonA.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
        if (event.target == modal3) {
    modal3.style.display = "none";
}
}




//------------------------------------------------------------

 let placeOrder= document.getElementById('placeOrder');
 placeOrder.addEventListener('click',() => {
     goToAddressPage()
 })

 const  goToAddressPage =() => {
    window.location.href = "../HTML/addressInput.html";
 }