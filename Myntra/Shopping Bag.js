function showMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("showMoreOffer");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
    }
}

// ------------------------start-------------------------------
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("applyNow");
var span3 = document.getElementsByClassName("closeBtn3")[0];
btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
window.onclick = function(event) {
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
    }
    // ---------------------------end------------------------------------