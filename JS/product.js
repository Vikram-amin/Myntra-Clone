import { navbar } from "../Component/navbar.js";
import { footer } from "../Component/footer.js";
import { ItemtShirts } from "../Component/ProductsList.js";

// Footer Added Here---->
let footerBlock = document.getElementById("footerBlock");
footerBlock.innerHTML = footer();
// ----------->

let tShirtsData = ItemtShirts();

if (JSON.parse(localStorage.getItem("tShirts")) == null) {
  localStorage.setItem("tShirts", JSON.stringify(tShirtsData));
}

let ProductsHeader = document.getElementById("header");
ProductsHeader.innerHTML = navbar();

let productGridItems = document.getElementById("productGridItems");

const displayProducts = (data) => {
  productGridItems.innerHTML = "";
  console.log(data);
  data.forEach(function (product) {
    let outer_div = document.createElement("div");
    let div = document.createElement("div");
    let image_div = document.createElement("div");
    image_div.className = "img_div";

    outer_div.setAttribute("id", "products");

    let img = document.createElement("img");
    img.src = product.images.image1;
 

    div.innerHTML = `<a>
    <div>
      <div class="brandname">${product.brand} <span></span></div>
      <div class="title">${product.title}</div>
      <div class="price"> Rs. ${product.price} <span class="line-through">Rs. ${product.off_price}</span> <span class="discount">(${product.discount}% OFF)</span>
      </div>
    </div></a>`;

    outer_div.addEventListener("mouseenter", startInterval);
    outer_div.addEventListener("mouseleave", stopInterval);

    let interval;
    function startInterval() {
      let i = 1;
      interval = setInterval(function () {
        if (i > 4) {
          i = 1;
        }
        let x = "image" + i;
        img.src = product.images[x];
        x = "";
        i = i + 1;
      }, 1000);
    }

    function stopInterval() {
      clearInterval(interval);
      img.src = product.images.image1;
    }

   
    //---------------------------------------

    let wishListDiv = document.createElement ('div');
    wishListDiv.setAttribute('id','wishListDiv')
    let wishListBtn = document.createElement ('button');
    wishListBtn.setAttribute('id','wishListBtn');
    let wishicon = document.createElement ('span');
    wishicon.className = 'material-icons';
    wishicon.innerHTML = 'favorite_border';
    let wishname = document.createElement ('span');
    wishname.innerHTML = 'WISHLIST';
    wishListBtn.append (wishicon, wishname);
    wishListDiv.append(wishListBtn)


    outer_div.onmousemove = function () {
      wishListDiv.style.visibility = 'visible';
      // wishListBtn.innerHTML=`<button id="wishListBtn"><span class='material-icons'>favorite_border</span>WISH LIST</button>`
    };

     outer_div.onmouseout = function () {
      wishListDiv.style.visibility = 'hidden';
    };

  

    wishListBtn.onclick = function () {
      wishListBtn.style.backgroundColor = "#535766";
      wishListBtn.style.color = "white"
      wishname.innerHTML = 'WISHLISTED';
      addToWishList(product);
    };

//---------------------------------------------------------
    image_div.append (img, wishListDiv);

    outer_div.append(image_div, div);

    img.addEventListener("click", () => {
      localStorage.setItem("PoductDetalisData", JSON.stringify(product));
      window.location.href = "../HTML/productDetail.html";
    });

    div.addEventListener("click", () => {
      localStorage.setItem("PoductDetalisData", JSON.stringify(product));
      window.location.href = "../HTML/productDetail.html";
    });

    productGridItems.append(outer_div);
  });
};

displayProducts(JSON.parse(localStorage.getItem("tShirts")));

//---------------------------------------------------------------------------------

let WishListData = localStorage.getItem("WishList");
if (WishListData === null) {
  localStorage.setItem("WishList", JSON.stringify([]));
}


const addToWishList = (product) => {
  WishListData = JSON.parse(localStorage.getItem("WishList"));
  console.log(WishListData);
  let checkIfProductExit = WishListData.find((Item) => Item.id === product.id);

  if (!checkIfProductExit) {
    WishListData.push(product);
    localStorage.setItem("WishList", JSON.stringify(WishListData));
  }
};

//---------------------------------------------------------------------------
// // sort Products
let sortButton = document.getElementById("sortButton");
sortButton.addEventListener("change", sortProducts);

function sortProducts() {
  let sortCriteria = sortButton.value;
  let productList = JSON.parse(localStorage.getItem("tShirts"));

  let updatedProductList = productList.sort((prodA, prodB) => {
    if (sortCriteria === "asc") {
      return prodA.price - prodB.price;
    } else if (sortCriteria === "desc") {
      return prodB.price - prodA.price;
    } else if (sortCriteria === "whatsNew") {
      return prodB.id - prodA.id;
    } else if (sortCriteria === "popularity") {
      return prodA.rating - prodB.rating;
    } else if (sortCriteria === "rating") {
      return prodB.rating - prodA.rating;
    } else if (sortCriteria === "discount") {
      return prodB.discount - prodA.discount;
    } else {
      return true;
    }
  });
  displayProducts(updatedProductList);
}

// // filter Product By Brand

// let FilterBrand = document.getElementById("filterButtonBrand");

// FilterBrand.addEventListener("click", (event) => {
//   let productList = JSON.parse(localStorage.getItem("tShirts"));
//   let filter = event.target.checked;
//   if (filter) {
//     let filterCriteria = event.target.value;

//     let updatedProductList = productList.filter((prod) => {
//       if (filterCriteria === "Roadster") {
//         return prod.brand == "Roadster";
//       } else if (filterCriteria === "WROGN") {
//         return prod.brand == "WROGN";
//       } else if (filterCriteria === "HRX by Hrithik Roshan") {
//         return prod.brand == "HRX by Hrithik Roshan";
//       } else if (filterCriteria === "Louis Philippe Sport") {
//         return prod.brand == "Louis Philippe Sport";
//       } else if (filterCriteria === "Puma") {
//         return prod.brand == "Puma";
//       } else {
//         return true;
//       }
//     });
//     displayProducts(updatedProductList);
//   }
// });

// //    filter Product By Price

// let FilterPrice = document.getElementById("filterButtonPrice");

// FilterPrice.addEventListener("click", (event) => {
//   let productList = JSON.parse(localStorage.getItem("tShirts"));
//   let filter = event.target.checked;

//   if (filter) {
//     let filterCriteria = event.target.value;

//     let updatedProductList = productList.filter((prod) => {
//       if (filterCriteria === "174-1881") {
//         return prod.price >= 174 && prod.price <= 1881;
//       } else if (filterCriteria === "1881-3588") {
//         return prod.price > 1881 && prod.price <= 3588;
//       } else if (filterCriteria === "3588-5295") {
//         return prod.price > 3588 && prod.price <= 5299;
//       } else if (filterCriteria === "5295-7002") {
//         return prod.price > 5295 && prod.price <= 7002;
//       } else {
//         return true;
//       }
//     });
//     displayProducts(updatedProductList);
//   }
// });


// filter Product By Brand

let FilterBrand = document.getElementById("filterButtonBrand");

FilterBrand.addEventListener("click", (event) => {
    let productList = JSON.parse(localStorage.getItem("tShirts"));
    let filter = event.target.checked;
    let sortCriteria = sortButton.value;
    let filterCriteria = event.target.value;
    if (filter) {
      let updatedProductList = productList.filter((prod) => {
        if (filterCriteria === "Roadster") {
          return prod.brand == "Roadster";
        } else if (filterCriteria === "WROGN") {
          return prod.brand == "WROGN";
        } else if (filterCriteria === "HRX by Hrithik Roshan") {
          return prod.brand == "HRX by Hrithik Roshan";
        } else if (filterCriteria === "Louis Philippe Sport") {
          return prod.brand == "Louis Philippe Sport";
        } else if (filterCriteria === "Puma") {
          return prod.brand == "Puma";
        } else {
          return true;
        }
      }).sort((prodA, prodB) => {
        if (sortCriteria === "asc") {
          return prodA.price - prodB.price;
        } else if (sortCriteria === "desc") {
          return prodB.price - prodA.price;
        } else if (sortCriteria === "whatsNew") {
          return prodB.id - prodA.id;
        } else if (sortCriteria === "popularity") {
          return prodA.rating - prodB.rating;
        } else if (sortCriteria === "rating") {
          return prodB.rating - prodA.rating;
        } else if (sortCriteria === "discount") {
          return prodB.discount - prodA.discount;
        } else {
          return true;
        }
      });
      displayProducts(updatedProductList);
    }
  });
  
  //    filter Product By Price
  
  let FilterPrice = document.getElementById("filterButtonPrice");
  
  FilterPrice.addEventListener("click", (event) => {
    let productList = JSON.parse(localStorage.getItem("tShirts"));
    let filter = event.target.checked;
    let sortCriteria = sortButton.value;
    let filterCriteria = event.target.value;
  
    if (filter) {  
      let updatedProductList = productList.filter((prod) => {
        if (filterCriteria === "Roadster") {
          return prod.brand == "Roadster";
        } else if (filterCriteria === "WROGN") {
          return prod.brand == "WROGN";
        } else if (filterCriteria === "HRX by Hrithik Roshan") {
          return prod.brand == "HRX by Hrithik Roshan";
        } else if (filterCriteria === "Louis Philippe Sport") {
          return prod.brand == "Louis Philippe Sport";
        } else if (filterCriteria === "Puma") {
          return prod.brand == "Puma";
        } else {
          return true;
        }
      }).sort((prodA, prodB) => {
        if (sortCriteria === "asc") {
          return prodA.price - prodB.price;
        } else if (sortCriteria === "desc") {
          return prodB.price - prodA.price;
        } else if (sortCriteria === "whatsNew") {
          return prodB.id - prodA.id;
        } else if (sortCriteria === "popularity") {
          return prodA.rating - prodB.rating;
        } else if (sortCriteria === "rating") {
          return prodB.rating - prodA.rating;
        } else if (sortCriteria === "discount") {
          return prodB.discount - prodA.discount;
        } else {
          return true;
        }
      });
      displayProducts(updatedProductList);
    }
  });


  // sort Products
// let sortButton = document.getElementById("sortButton");
// sortButton.addEventListener("change", (event) => {
//   let productList = JSON.parse(localStorage.getItem("tShirts"));
//     let filter = event.target.checked;
//     let sortCriteria = sortButton.value;
//     let filterCriteria = event.target.value;
  
//     if (filter) {  
//       let updatedProductList = productList.filter((prod) => {
//         if (filterCriteria === "174-1881") {
//           return prod.price >= 174 && prod.price <= 1881;
//         } else if (filterCriteria === "1881-3588") {
//           return prod.price > 1881 && prod.price <= 3588;
//         } else if (filterCriteria === "3588-5295") {
//           return prod.price > 3588 && prod.price <= 5299;
//         } else if (filterCriteria === "5295-7002") {
//           return prod.price > 5295 && prod.price <= 7002;
//         } else {
//           return true;
//         }
//       }).sort((prodA, prodB) => {
//         if (sortCriteria === "asc") {
//           return prodA.price - prodB.price;
//         } else if (sortCriteria === "desc") {
//           return prodB.price - prodA.price;
//         } else if (sortCriteria === "whatsNew") {
//           return prodB.id - prodA.id;
//         } else if (sortCriteria === "popularity") {
//           return prodA.rating - prodB.rating;
//         } else if (sortCriteria === "rating") {
//           return prodB.rating - prodA.rating;
//         } else if (sortCriteria === "discount") {
//           return prodB.discount - prodA.discount;
//         } else {
//           return true;
//         }
//       });
//       displayProducts(updatedProductList);
//     }
//   });



const cartCountInfo = document.getElementById('cart-count-info');
let count = JSON.parse(localStorage.getItem('cart'));
cartCountInfo.textContent = count.length
