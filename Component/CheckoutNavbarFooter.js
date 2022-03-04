function navbar() {
    return `<div id="navbar">
    <div class="logo">
        <img src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png" alt="Myntra" height="64px" width="84px">
    </div>
    <nav>
        <ul>
            <li>
                <a href="./Shopping Bag.html" id="currentBag"><b>BAG</b></a></li>
            <li>----------</li>
            <li><a href="./Address.html" id="curentAdress">ADDRESS</a></li>
            <li>----------</li>
            <li><a href="Payment.html" id="curentPayment">PAYMENT</a></li>
        </ul>
    </nav>
    <div class="secure-logo">
        <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" alt="sprite-secure"><span>100% SECURE<span></div>
</div>`
}

function footer() {
    return `    <div class="CheckoutFooter">
    <div class="CheckoutFootercontainer">
        <div class="CheckoutFooterimages">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png">
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png">
        </div>
        <div class="Help">
            <div> Need Help ? Contact Us </div>
        </div>
    </div>
</div>`
}

export {navbar,footer}