import { navbar } from "../Component/navbar.js";
import { footer } from "../Component/footer.js";
let header = document.getElementById("headerEl");
header.innerHTML = navbar();
let footerEl = document.getElementById("footerEl");
footerEl.innerHTML = footer();
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);
