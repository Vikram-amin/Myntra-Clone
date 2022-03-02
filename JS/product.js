import { navbar } from "../Component/navbar.js";
import {ItemtShirts} from '../Component/ProductsList.js'


  let tShirtsData = ItemtShirts()

if (JSON.parse(localStorage.getItem("tShirts")) == null) {
localStorage.setItem('tShirts',JSON.stringify(tShirtsData))
}






let ProductsHeader = document.getElementById('ProductsHeader');

//ProductsHeader.innerHTML = navbar()

// brand: "Roadster"
// categories: "tshirt"
// color: "blue"
// count: 420
// description: "Blue T-shirt for men"
// discount: 10
// gender: "men"
// id: 5
// images: {image1: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,…in-Klein-Jeans-Men-Tshirts-4161632910116207-1.jpg', image2: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,…in-Klein-Jeans-Men-Tshirts-4161632910116207-2.jpg', image3: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,…in-Klein-Jeans-Men-Tshirts-4161632910116207-4.jpg', image4: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,…in-Klein-Jeans-Men-Tshirts-4161632910116207-5.jpg'}
// off_price: 3399
// price: "3299
// rating: 4.9
// size: "Sizes : 39, 40, 42, 44..."
// title: "Men Light Blue Logo Printed Slim Fit Casual T-shirt"

let productGridItems = document.getElementById('productGridItems')

const displayProducts = (data ) => {

productGridItems.innerHTML=""
// console.log(data)

  data.forEach (function (product) {
    let outer_div = document.createElement ('div');
    let div = document.createElement('div')
    let image_div = document.createElement('div')
    image_div.className = 'img_div';

    outer_div.setAttribute('id','products')

    let img =  document.createElement('img');
    img.src =   product.images.image1;
  
  
    div.innerHTML = `<a>
    <div>
      <div class="brandname">${product.brand} <span></span></div>
      <div class="title">${product.title}</div>
      <div class="price"> Rs. ${product.price} <span class="line-through">Rs. ${product.off_price}</span> <span class="discount">(${product.discount}% OFF)</span>
      </div>
    </div></a
  >`

  outer_div.addEventListener ('mouseenter', startInterval);
  outer_div.addEventListener ('mouseleave', stopInterval);

  let interval;
  function startInterval () {
    let i = 1;
    interval = setInterval (function () {
      if (i > 4) {
        i = 1;
      }
      let x = 'image' + i;
      img.src = product.images[x];
      x = '';
      i = i + 1;
    }, 1000);
  }


  function stopInterval () {
    clearInterval (interval);
    img.src = product.images.image1;
  }

  image_div.append(img)
  outer_div.append(image_div,div)

  outer_div.addEventListener('click',()=>{
    window.location.href='../HTML/productDetail.html'
  })

  // let wisListButton = document.createElement('button');
  // wisListButton.setAttribute('id','wishListBtn')
  


    productGridItems.append (outer_div);
  });
}

displayProducts(JSON.parse(localStorage.getItem('tShirts')))

let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("change", sortProducts)

function sortProducts(){
  let sortCriteria = sortButton.value;
  let productList = JSON.parse(localStorage.getItem('tShirts'));

  let updatedProductList = productList.sort((prodA,prodB) => {
    if(sortCriteria === 'asc'){
      return prodA.price - prodB.price;
    }else if(sortCriteria === 'desc'){
      return prodB.price - prodA.price;
    }
    else if(sortCriteria === 'whatsNew'){
      return prodB.id - prodA.id;
    }
    else if(sortCriteria === 'popularity'){
      return prodA.rating - prodB.rating;
    }
    else if(sortCriteria === 'rating'){
      return prodB.rating - prodA.rating;
    }
    else if(sortCriteria === 'discount'){
      return prodB.discount - prodA.discount;
    }else{
      return true
    }
  })
  displayProducts(updatedProductList)
}


let FilterBrand = document.getElementById('filterButtonBrand')

FilterBrand.addEventListener('click',(event)=>{

  let productList = JSON.parse(localStorage.getItem('tShirts'));
  let filter =  event.target.checked
  if(filter){
    let filterCriteria = event.target.value

    let updatedProductList = productList.filter((prod) => {
      if(filterCriteria === 'Roadster'){
        return prod.brand == "Roadster" 
      }else if(filterCriteria === 'WROGN'){
        return prod.brand == 'WROGN'
      }else if(filterCriteria === 'HRX by Hrithik Roshan'){
        return prod.brand == 'HRX by Hrithik Roshan'
      }else{
        return true;
      }
    })
    displayProducts(updatedProductList)
  
  }
})

let FilterPrice = document.getElementById('filterButtonPrice')

FilterPrice.addEventListener('click',(event)=>{

  let productList = JSON.parse(localStorage.getItem('tShirts'));
  let filter =  event.target.checked
  if(filter){
    let filterCriteria = event.target.value


    let updatedProductList = productList.filter((prod) => {
      if(filterCriteria === '174-1881'){
        return prod.price >= 174 && prod.price <=1881;
      }else if(filterCriteria === '1881-3588'){
        return prod.price > 1881 && prod.price <=3588;
      }else if(filterCriteria === '3588-5295'){
        return prod.price > 3588 && prod.price <=5299;
      }else if(filterCriteria === '5295-7002'){
          return prod.price > 5295 && prod.price <= 7002;
      }else{
        return true;
      }
    })
    displayProducts(updatedProductList)
  
  }
})