document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons with class 'add-to-cart-btn' and 'buy-now-btn'
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const buyNowButtons = document.querySelectorAll('.buy-now-btn');

    // Add click event listeners to each 'Add to Cart' button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = button.parentElement.parentElement.querySelector('img').alt;
            addToCart(productName);
        });
    });

    // Add click event listeners to each 'Buy Now' button
    buyNowButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = button.parentElement.parentElement.querySelector('img').alt;
            buyNow(productName);
        });
    });
});

function addToCart(productName) {
    alert(`Added ${productName} to the cart!`);
}

function buyNow(productName) {
    alert(`Proceeding to buy ${productName}!`);
}
