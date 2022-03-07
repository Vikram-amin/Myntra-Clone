  import { navbar, footer } from "../Component/CheckoutNavbarFooter.js";

  let headerEl = document.getElementById("headerEl");
  headerEl.innerHTML = navbar();

  let footerEl = document.getElementById("footerEl");
  footerEl.innerHTML = footer();


  let adressContainer = document.getElementById('AdressContainer')

  let LeftPart = document.createElement('div')
  LeftPart.setAttribute('id','LeftPart')

  let RightPart = document.createElement('div')
  RightPart.setAttribute('id','RightPart')

  let topDiv = document.createElement('div')
  let middleDiv = document.createElement('div')
  middleDiv.setAttribute('id','middleDiv')
  let BottomDiv = document.createElement('div')

  topDiv.innerHTML=`    <div id="select_add">
  <div id="select_add_text" > Select Delivery Address </div>
  <div id="select_add_btn"> <button id="myBtn">ADD NEW ADDRESS</button></div>
  </div> <br>
  <div id="default_add_head">DEFAULT ADDRESS</div>
  `

  let data = JSON.parse(localStorage.getItem('address'))

  function displayAdress(){
    data.forEach(el => {
      middleDiv.innerHTML=`<div> </br>
  <span class="name_txt"><input type="radio">${el.name}</span>
  <div class="address_txt">${el.address}</div>
  <div class="location_txt"> <span>${el.city}</span>  <span>${el.state}</span>  <span>${el.pincode}</span> </div> <br>
  <div class="moble_txt">Mobile :<span> ${el.mobileNum}</span></div> </br>
  <div class="COD">Cash on Delivery avilable </div> 
  <div class="button_txt"><button>REMOVE</button> <button>EDIT</button></div>
  </div>`
      
    });
  }

  displayAdress()

  BottomDiv.innerHTML=` <div id="add_newAdressDIV">
  <button id="myBtn2">+ ADD NEW ADDRESS </button> </div>`

  LeftPart.append(topDiv,middleDiv,BottomDiv)

//--------------------------------------------------------------------

  let dataDiv = document.createElement('div')
  dataDiv.setAttribute('id','dataDiv')

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();

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

        let dateDiv = document.createElement('div');
        dateDiv.setAttribute('id','dateDiv')

        dateDiv.innerHTML=`Estimated delivery by <span> ${days[day]} ${date} ${months[month]} </span>`


        div.append(imgDiv,dateDiv)

        dataDiv.append(div)
      })
    }


  displayData(JSON.parse(localStorage.getItem('cart')))

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
    </div>
    <button id="placeOrder">Continue</button>`
  
  RightPart.append(dataDiv,priceDetailsContainer)

  adressContainer.append(LeftPart,RightPart)

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

  
//------------------------------------------------------adress input


let addressBtn = document.getElementById("addAdress")
addressBtn.addEventListener('click',()=>{
  addAddress(event)
});

let dataAdd = localStorage.getItem('address')
if(dataAdd  === null){
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

        let datas = JSON.parse(localStorage.getItem('address'))
        if(name.length > 0){
            datas.push(addressData)
        }
        localStorage.setItem("address",JSON.stringify(datas))

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

//---------------------------------------- modal window

var modal = document.getElementById('modal');
var shade = document.getElementById('shade');
document.getElementById('myBtn').onclick = function() {
  modal.style.display = shade.style.display = 'block';
};
document.getElementById('myBtn2').onclick = function() {
  modal.style.display = shade.style.display = 'block';
};
document.getElementById('close').onclick = function() {
  modal.style.display = shade.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload()
}

}

//------------------------------------------

let placeOrder= document.getElementById('placeOrder');
placeOrder.addEventListener('click',() => {
    goToPaymentPage()
})

const  goToPaymentPage =() => {
   window.location.href = "../HTML/payment.html";
}