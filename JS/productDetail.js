


let productDetailContainer = document.getElementById('productDetailContainer');

const displayData = () => {
    let product = JSON.parse(localStorage.getItem('PoductDetalisData'));

    let productDetailParent = document.getElementById('productDetailParent');
    let Left = document.getElementById('left');
    let Right = document.getElementById('right');
 
    let p = document.createElement('p')
    p.setAttribute('class','produtPara')
    p.innerHTML=`Home / Clothing / Men Clothing / Tshirts /<span> ${product.brand}</span>/<span> ${product.title}</span>`
    productDetailContainer.append(p)

    Left.innerHTML = `<img src="${product.images.image1}" alt="">
    <img src="${product.images.image2}" alt="">
    <img src="${product.images.image3}" alt="">
    <img src="${product.images.image4}" alt="">`

    Right.innerHTML=` <h3 class="poductName">${product.brand}</h3>
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
  <div class="circles">S</div>
  <div class="circles">M</div>
  <div class="circles">L</div>
  <div class="circles">XL</div>
  <div class="circles">XXL</div>
</div>

<div id="Buttons">
<button class="cartbtn" onclick="addtoCart()">
<img src="https://www.svgrepo.com/show/17522/bag.svg" />ADD TO BAG
</button>
<button class="wishbtn" onclick="addtoWishList()">
<img src="https://www.svgrepo.com/show/14970/heart.svg" />WISH LIST
</button>
</div>

<div class="deliverOption"> DELIVERY OPTIONS <img src="https://media.istockphoto.com/vectors/fast-delivery-truck-icon-fast-shipping-design-for-website-and-mobile-vector-id1302438914?k=20&m=1302438914&s=170667a&w=0&h=8HroNF2rhDbQCruNiN6ExIbplmIIMcD3vmFN6Z2CZNU=" /></div>

<div class="enterPincode"><input type="text" placeholder="Enter a PIN code">CHECK</div>
  `

    productDetailParent.append(Left,Right)
    productDetailContainer.append(productDetailParent)

}

displayData()