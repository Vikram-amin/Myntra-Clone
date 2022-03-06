var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

const cartCountInfo = document.getElementById('cart-count-info');
let count = JSON.parse(localStorage.getItem('cart'));
cartCountInfo.textContent = count.length
