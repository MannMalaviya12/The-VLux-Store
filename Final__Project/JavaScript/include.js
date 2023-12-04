// include.js

document.addEventListener('DOMContentLoaded', function () {
    // Include header
    fetch('./header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
            
            // Add click event listeners to each 'Add to Cart' button in the header
            const headerAddToCartButtons = document.querySelectorAll('header .add-to-cart-btn');
            headerAddToCartButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const productName = button.parentElement.parentElement.querySelector('img').alt;
                    addToCart(productName);
                });
            });
        });

    // Include footer
    fetch('./footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
            
            // Add click event listeners to each 'Buy Now' button in the footer
            const footerBuyNowButtons = document.querySelectorAll('footer .buy-now-btn');
            footerBuyNowButtons.forEach(button => {
                button.addEventListener('click', function () {
                    const productName = button.parentElement.parentElement.querySelector('img').alt;
                    buyNow(productName);
                });
            });
        });
});
