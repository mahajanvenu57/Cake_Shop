document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = button.dataset.name;
            const itemPrice = parseInt(button.dataset.price);

            addToCart(itemName, itemPrice);
            updateTotalPrice(itemPrice);
        });
    });

    function addToCart(name, price) {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${name} - ₹${price}/-`;
        cartItemsList.appendChild(cartItem);
    }

    function updateTotalPrice(price) {
        totalPrice += price;
        totalPriceElement.textContent = totalPrice;
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const cartItemsList = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total');
    let totalPrice = 0;

    // Function to add cake to cart
    function addToCart(name, price) {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${name} - ₹${price}/-</span>
            <button class="delete-item" data-price="${price}">Delete</button>
        `;
        cartItemsList.appendChild(cartItem);
    }

    // Function to update total price
    function updateTotalPrice(price) {
        totalPrice += price;
        totalPriceElement.textContent = totalPrice;
    }

    // Event delegation for delete button
    cartItemsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-item')) {
            const price = parseInt(event.target.dataset.price);
            event.target.parentNode.remove();
            totalPrice -= price;
            totalPriceElement.textContent = totalPrice;
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const cartItemsList = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total');
    let totalPrice = 0;

    // Function to add cake to cart
    function addToCart(name, price) {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <span>${name} - ₹${price}/-</span>
            <button class="delete-item" data-price="${price}">Delete</button>
        `;
        cartItemsList.appendChild(cartItem);
    }

    // Function to update total price
    function updateTotalPrice(price) {
        totalPrice += price;
        totalPriceElement.textContent = totalPrice;
    }

    // Event delegation for delete button
    cartItemsList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-item')) {
            const price = parseInt(event.target.dataset.price);
            event.target.parentNode.remove();
            totalPrice -= price;
            totalPriceElement.textContent = totalPrice;
        }
    });
});

