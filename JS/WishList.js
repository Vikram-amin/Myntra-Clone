import { navbar } from "../Component/navbar.js";
import { footer } from "../Component/footer.js";

let wishListHeader = document.getElementById("header");
wishListHeader.innerHTML = navbar();

let wishListFooter = document.getElementById("footerEl");
wishListFooter.innerHTML = footer();

let wishListData = JSON.parse(localStorage.getItem("WishList"));

let wishlistCount = document.getElementById("wishlistCount");
wishlistCount.innerHTML = `My Wishlist <span> ${wishListData.length} items <span>`;

let WishListContainer = document.getElementById("WishListContainer");

const displayWishListProducts = (data) => {
  WishListContainer.innerHTML = "";

  data.forEach(function (product) {
    let outer_div = document.createElement("div");
    let div = document.createElement("div");
    let image_div = document.createElement("div");
    image_div.className = "img_div";

    outer_div.setAttribute("id", "products");

    let img = document.createElement("img");
    img.src = product.images.image1;

    let undo = document.createElement("button");
    undo.setAttribute("id", "undo");
    undo.textContent = "X";

    div.innerHTML = `<a>
        <div>
          <div class="title">${product.title}</div>
          <div class="price"> Rs. ${product.price} <span class="line-through">Rs. ${product.off_price}</span> <span class="discount">(${product.discount}% OFF)</span></div>
        </div></a>`;

    //<button id ="moveToBag" onclick="addToCart">MOVE TO BAG</button>
    let btn = document.createElement("button");
    btn.textContent = "MOVE TO BAG";
    btn.setAttribute("id", "moveToBag");
    btn.addEventListener("click", () => {
      addToCart(product);
    });

    image_div.append(img);
    image_div.append(undo);
    div.append(btn);
    outer_div.append(image_div, div);

    WishListContainer.append(outer_div);

    //   let cart = document.getElementById('moveToBag');
    //   cart.addEventListener('click',() => {
    //     // addToCart(product)
    //     console.log("hi")
    // })

    undo.addEventListener("click", () => {
      removeWishList(product.id);
    });
  });
};
displayWishListProducts(JSON.parse(localStorage.getItem("WishList")));

let cart = localStorage.getItem("cart");
if (cart === null) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const removeWishList = (id) => {
  // console.log(id)
  let data = JSON.parse(localStorage.getItem("WishList"));
  const newData = data.filter((item) => item.id != id);
  localStorage.setItem("WishList", JSON.stringify(newData));
  location.reload();
};
displayWishListProducts(JSON.parse(localStorage.getItem("WishList")));

function addToCart(data) {
  let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));


    let wishListdata = JSON.parse(localStorage.getItem("WishList"));
    const newData = wishListdata.filter((item) => item.id != data.id);
    localStorage.setItem("WishList", JSON.stringify(newData));
    location.reload();
 
  
}

//-----------------------------

const cartCountInfo = document.getElementById('cart-count-info');
let count = JSON.parse(localStorage.getItem('cart'));
cartCountInfo.textContent = count.length