import {navbar,footer} from '../Component/CheckoutNavbarFooter.js'

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

var dataDiv = document.createElement('div')
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
        <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLSididhxOn_gqSKHQ_QWoDHQiFq6_CVDWjA&usqp=CAU'/> <span> Apply Coupons </span>  <button onclick="applyOffers()" id="applyOffer"><b>Apply</b></button> </div>
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
    <button onclick="applyNow()" id="applyNow"><b>Add Gift Wrap</b></button>
</div>
</div>`

cartRight.append(giftsDiv)

cartParent.append(cartLeft,cartRight)


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

//---------------------------------------------------------------------------------------

const removeCartList = (id) => {
    // console.log(id)
    let data = JSON.parse(localStorage.getItem("cart"));
    const newData = data.filter((item) => item.id != id);
    localStorage.setItem("cart", JSON.stringify(newData));
    location.reload();
  };
  displayData(JSON.parse(localStorage.getItem("cart")));