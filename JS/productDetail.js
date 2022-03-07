import { navbar } from "../Component/navbar.js";
import { items } from "../Component/similarProducs.js";
import { displaySimilarProducts } from "../Script/showData.js";
import { footer } from "../Component/footer.js";

let ProductDetailsHeader = document.getElementById("header");
ProductDetailsHeader.innerHTML = navbar();

let productDetailContainer = document.getElementById("productDetailContainer");

const displayData = () => {
  let product = JSON.parse(localStorage.getItem("PoductDetalisData"));

  let productDetailParent = document.getElementById("productDetailParent");
  let Left = document.getElementById("left");
  let Right = document.getElementById("right");

  let p = document.createElement("p");
  p.setAttribute("class", "produtPara");
  p.innerHTML = `Home / Clothing / Men Clothing / Tshirts /<span> ${product.brand}</span>/<span> ${product.title}</span>`;
  productDetailContainer.append(p);

  Left.innerHTML = `<img src="${product.images.image1}" alt="">
    <img src="${product.images.image2}" alt="">
    <img src="${product.images.image3}" alt="">
    <img src="${product.images.image4}" alt="">`;

  Right.innerHTML = ` <h3 class="poductName">${product.brand}</h3>
    <h3 class="ProductTitle">${product.title}</h3>
    <div class="ratebox">
    <p class="productRating">${product.rating}</p>
    <img
      src="https://www.pngkey.com/png/full/894-8942242_blue-star-clipart-blue-star-clip-art-at.png"
    />
    <div class="separator">|</div>
    <span class="ratingCount">${product.count}k Rating</span>
    </div>
    <hr>
    <div class="price"> Rs. ${product.price}    <span class="line-through">Rs. ${product.off_price}</span>     <span class="discount">(${product.discount}% OFF)</span>
    <div class="inclusiveTax">Inclusive of all taxes</div>
    <div class=Selectsize><span> SELECT SIZE </span> <span> SIZE CHART    > </span></div>
    <div class="Pleaseselectsize">Please select a size</div>

    <div class="productSizesdiv">
    <button class="circles">S</button>
    <button class="circles">M</button>
    <button class="circles">L</button>
    <button class="circles">XL</button>
    <button class="circles">XXL</button>
    </div>

    <div id="Buttons">
    <button class="cartbtn" id="cart">
    <img src="https://www.svgrepo.com/show/17522/bag.svg" />ADD TO BAG
    </button>
    <button class="wishbtn" id="wishlist">
    <img src="https://www.svgrepo.com/show/14970/heart.svg" />WISH LIST
    </button>
    </div>

    <div class="deliverOption"> DELIVERY OPTIONS <img src="https://media.istockphoto.com/vectors/fast-delivery-truck-icon-fast-shipping-design-for-website-and-mobile-vector-id1302438914?k=20&m=1302438914&s=170667a&w=0&h=8HroNF2rhDbQCruNiN6ExIbplmIIMcD3vmFN6Z2CZNU=" /></div>

    <div class="enterPincode"><input type="text" placeholder="Enter a PIN code">CHECK</div>

    <p class="pinp">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>

    <p class="paya">100% Original Products </p>
    <p class="paya">Pay on delivery might be available</p>
    <p class="paya">Easy 30 days returns and exchanges</p>
    <p class="paya">Try & Buy might be available</p>

    <hr>

    <div class="produtDetailsdiv"> PRODUCT DETAILS <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwjVwMMSbIn5aK32MPiwO_8b6JA8ps-Lt3A&usqp=CAU" /></div>
    <p class="produtDetailspara">Keep this hip this season with the HRX Men's Athleisure T-shirt. This versatile T-shirt can be styled any way you like for the ultimate gym-to-street look.</p> 

    <div class="produtDetailsdiv"> Features</div>
    <p class="paya">Athleisure T-shirt can be paired with tracks, khakis or jeans </p>
    <p class="paya">Style: Round Neck </p>
    <p class="paya">Sleeve: Short Sleeves</p>
    <p class="paya">Colour: Yellow </p>
    <p class="paya">Print: Typography</p>
    <p class="paya">Fit: Regular</p>

    <div class="produtDetailsdiv"> Size & Fit </div>
    <p class="paya"> The model height 6' is wearing a size M </p>

    <div class="produtDetailsdiv"> Material & Care </div>
    <p class="paya"> 100% cotton </p>
    <p class="paya"> Machine-wash </p>
    <hr>
  `;

  productDetailParent.append(Left, Right);
  productDetailContainer.append(productDetailParent);

  //----------------------------------------------------------------
  //sililar product

  let SimilarProductontainer = document.createElement("div");

  let Spara = document.createElement("div");
  Spara.textContent = "SIMILAR PRODUCTS";
  Spara.setAttribute("class", "Spara");

  let productCOntainerItems = document.createElement("div");
  productCOntainerItems.setAttribute("id", "productCOntainerItems");

  displaySimilarProducts(items, productCOntainerItems); //import

  SimilarProductontainer.append(Spara);
  SimilarProductontainer.append(productCOntainerItems);
  productDetailContainer.append(SimilarProductontainer);

  //----------------------------------------------------------------
  // footer

  let footerContainer = document.createElement("div");
  footerContainer.innerHTML = footer();
  productDetailContainer.append(footerContainer);

  //---------------------------------------------------------------

  let wishlist = document.getElementById("wishlist");
  wishlist.addEventListener("click", () => {
    wishlist.style.backgroundColor = "#535766";
    addToWishList(product);
  });

  wishlist.addEventListener("dblclick", () => {
    wishlist.style.backgroundColor = "#fff";
  });

  //-----------------------------------------------------------------

  let cart = document.getElementById("cart");
  cart.addEventListener("click", () => {
    addToCart(product);
  });

  //-------------------------------------------------------------------
  let shirtSize = document.getElementsByClassName("circles");

  for (let i = 0; i < shirtSize.length; i++) {
    shirtSize[i].addEventListener("click", () => {
      addSize(shirtSize[i]);
    });
  }
};
displayData();

//----------------------------------------------------------------------------------

let WishListData = localStorage.getItem("WishList");
if (WishListData === null) {
  localStorage.setItem("WishList", JSON.stringify([]));
}

let SelectedSize;
const addSize = (data) => {
  SelectedSize = data.textContent;
  WishListData = JSON.parse(localStorage.getItem("WishList"));
  let newData = WishListData.forEach((data) => {
    data.size = SelectedSize;
    // console.log(data)
  });
  // console.log(newData)
  //  localStorage.setItem("WishList", JSON.stringify(newData));
};

const addToWishList = (product) => {
  WishListData = JSON.parse(localStorage.getItem("WishList"));
  console.log(WishListData);
  let checkIfProductExit = WishListData.find((Item) => Item.id === product.id);

  if (!checkIfProductExit) {
    WishListData.push(product);
    localStorage.setItem("WishList", JSON.stringify(WishListData));
  }
};

//---------------------------------------------------------------------------------

let cart = localStorage.getItem("cart");
if (cart === null) {
  localStorage.setItem("cart", JSON.stringify([]));
}

const addToCart = (data) => {
  let cartbtn = document.getElementById("cart");
  let cart = JSON.parse(localStorage.getItem("cart"));
  let checkIfProductExit = cart.find((cartItem) => cartItem.id === data.id);
  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
};

// let go = document.getElementById('gotoBag')
// go.addEventListener('click',()=>{
//   window.location.href = "../HTML/cart.html";
// })
//---------------------------------------------------------------------
const cartCountInfo = document.getElementById("cart-count-info");
let count = JSON.parse(localStorage.getItem("cart"));
cartCountInfo.textContent = count.length;
