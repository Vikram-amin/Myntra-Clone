import {navbar,footer} from '../Component/CheckoutNavbarFooter.js'

let headerEl = document.getElementById('headerEl');
headerEl.innerHTML = navbar()

let footerEl = document.getElementById('footerEl');
footerEl.innerHTML = footer()