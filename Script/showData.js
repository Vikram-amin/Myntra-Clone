


 const displaySimilarProducts = (data,productCOntainerItems) => {

    productCOntainerItems.innerHTML=""
    
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
    
      image_div.append(img)
      outer_div.append(image_div,div)
      
      productCOntainerItems.append (outer_div);
      });
    }
    

    export{ displaySimilarProducts } 