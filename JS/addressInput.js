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

  //---------------------------------------------------------------------------

  let cartCount = document.getElementById('Pcount')
  const updateCartCount = (cart) => {
    cartCount.textContent = `( ${cart.length} Items)`
  }
  updateCartCount(JSON.parse(localStorage.getItem('cart')))

  const cartTotal = ()  => {
    let totalMRP = JSON.parse(localStorage.getItem('totalMRP'));
    let total = JSON.parse(localStorage.getItem('total'));
    let discount = JSON.parse(localStorage.getItem('discount'));
    //console.log(sum)
    document.getElementById("totalPrice").innerHTML = " ₹ " + totalMRP ;
    document.getElementById("totalAmount").innerHTML = " ₹ " + total;
    document.getElementById("discountPrice").innerHTML = " - ₹ " + discount;
  }
  cartTotal();

  //---------------------------------------------------------------

  let addressBtn = document.getElementById("addAdress")
  addressBtn.addEventListener('click',()=>{
    addAddress(event)
});

  let data = localStorage.getItem('address')
  if(data === null){
      localStorage.setItem("address",JSON.stringify([]))
  }
 
      function addAddress(event){
           event.preventDefault();
          let name = document.getElementById("name").value;
          let mobileNum = document.getElementById("mobileNo").value;
          let  pincode= document.getElementById("pincode").value;
          let  address = document.getElementById("address").value;
          let  location = document.getElementById("location").value;
          let  city = document.getElementById("city").value;
          let  state = document.getElementById("state").value;
          

          let addressData ={
              name,
              mobileNum,
              pincode,
              address,
              location,
              city,
              state,
          }

          let data = JSON.parse(localStorage.getItem('address'))
          if(name.length > 0){
              data.push(addressData)
          }
          localStorage.setItem("address",JSON.stringify(data))

          if(name &&
            mobileNum &&
            pincode &&
            address &&
            location &&
            city &&
            state){
              goToAdressPage()
            }else{
              alert('Please Fill all boxes')
            }

           document.getElementById("name").value;
           document.getElementById("mobileNo").value;
           document.getElementById("pincode").value;
           document.getElementById("address").value;
           document.getElementById("location").value;
           document.getElementById("city").value;
           document.getElementById("state").value;
      }

      function goToAdressPage(){
        window.location.href ='../HTML/address.html'
      }