const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

searchIcon.addEventListener("click", () => {
    searchForm.classList.add("active");
    cartItemsContainer.classList.remove("active");
    navbar.classList.remove("active");
});

menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
    searchForm.classList.remove("active");
    cartItemsContainer.classList.remove("active");
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
    cartItemsContainer.classList.add("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
});


// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.getElementById('search-input');
//     const searchButton = document.getElementById('search-button');
//     const searchIcon = document.querySelector(".search-icon");
//     const searchForm = document.querySelector(".search-form");
//     const menuIcon = document.querySelector(".menu-icon");
//     const navbar = document.querySelector(".navbar");
//     const cartIcon = document.querySelector(".cart-icon");
//     const cartItemsContainer = document.querySelector(".cart-items-container");

//     searchButton.addEventListener('click', function() {
//         searchProducts(searchInput.value.trim().toLowerCase());
//     });

//     searchIcon.addEventListener("click", () => {
//         searchForm.classList.add("active");
//         cartItemsContainer.classList.remove("active");
//         navbar.classList.remove("active");
//     });

//     menuIcon.addEventListener("click", () => {
//         navbar.classList.add("active");
//         searchForm.classList.remove("active");
//         cartItemsContainer.classList.remove("active");
//     });

//     cartIcon.addEventListener("click", () => {
//         cartItemsContainer.classList.add("active");
//         searchForm.classList.remove("active");
//         navbar.classList.remove("active");
//     });

//     function searchProducts(query) {
//         // Get all cake cards
//         const cakeCards = document.querySelectorAll('.cake-card');
//         const cheeseCards = document.querySelectorAll('.cheese-card');

//         // Loop through cake cards and cheese cards to filter based on search query
//         cakeCards.forEach(card => {
//             const cakeName = card.querySelector('h3').textContent.toLowerCase();
//             if (cakeName.includes(query)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         });

//         cheeseCards.forEach(card => {
//             const cheeseName = card.querySelector('h3').textContent.toLowerCase();
//             if (cheeseName.includes(query)) {
//                 card.style.display = 'block';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     }
// });




document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.btn');
    const cartItemsContainer = document.querySelector('.cart-items-container');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            const product = event.target.parentElement;
            const productImage = product.querySelector('img').src;
            const productName = product.querySelector('h3').innerText;
            const productPrice = product.querySelector('.price').innerText;

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <span class="fas fa-times"></span>
                <img src="${productImage}" alt="">
                <div class="content">
                    <h3>${productName}</h3>
                    <div class="price">${productPrice}</div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);

            updateCartTotal();
        });
    });

    function updateCartTotal() {
        const cartItems = cartItemsContainer.querySelectorAll('.cart-item');
        let total = 0;
        cartItems.forEach(cartItem => {
            const priceString = cartItem.querySelector('.price').innerText;
            const price = parseFloat(priceString.replace('₹', '').replace('/-', ''));
            total += price;
        });

        // Update total price in the cart
        const totalPriceElement = document.querySelector('.total-price');
        totalPriceElement.innerText = `Total: ₹${total.toFixed(2)}`;
    }
});
