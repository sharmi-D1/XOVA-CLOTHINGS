// Navbar toggle functionality
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".navbar-menu").classList.toggle("active");
});

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartDisplay() {
    const cartContainer = document.querySelector(".cart-container");
    const cartTotalElement = document.querySelector(".cart-total");
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        cartTotalElement.innerHTML = "";
    } else {
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>Price: $${item.price} x ${item.quantity}</p>
                <input type="number" class="cart-quantity" data-id="${item.id}" value="${item.quantity}" min="1">
                <button class="remove-from-cart" data-id="${item.id}">Remove</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        cartTotalElement.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    document.querySelector(".cart-count").textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-from-cart")) {
        const productId = parseInt(event.target.dataset.id);
        cart = cart.filter(item => item.id !== productId);
        updateCartDisplay();
    }
});

document.addEventListener("input", function (event) {
    if (event.target.classList.contains("cart-quantity")) {
        const productId = parseInt(event.target.dataset.id);
        const newQuantity = parseInt(event.target.value);
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem && newQuantity > 0) {
            cartItem.quantity = newQuantity;
            updateCartDisplay();
        }
    }
});

// Coupon code functionality
document.querySelector(".apply-coupon").addEventListener("click", function () {
    const couponInput = document.querySelector(".coupon-input").value;
    const cartTotalElement = document.querySelector(".cart-total");
    let totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (couponInput === "DISCOUNT10") {
        totalPrice *= 0.9; // 10% discount
        cartTotalElement.innerHTML = `<h3>Total (after discount): $${totalPrice.toFixed(2)}</h3>`;
    } else {
        alert("Invalid coupon code");
    }
});

updateCartDisplay();
// 3D Body Scanning and Custom Fit
document.getElementById('scan-button').addEventListener('click', function() {
    const fileInput = document.getElementById('body-scan-upload');
    const file = fileInput.files[0];
    
    if (file) {
        // Simulate a fit recommendation based on the uploaded file
        document.getElementById('fit-recommendations').innerHTML = `
            <h3>Fit Recommendations:</h3>
            <ul>
                <li>Size: M</li>
                <li>Recommended Styles: Casual, Sporty</li>
            </ul>
        `;
    } else {
        alert('Please upload a file for scanning.');
    }
});

// Outfit Builder Tool
const outfitBuilder = document.querySelector('.outfit-builder');
const selectedOutfit = document.getElementById('selected-outfit');

outfitBuilder.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const outfitItem = document.createElement('div');
        outfitItem.textContent = itemName;
        selectedOutfit.appendChild(outfitItem);
    });
});

document.getElementById('purchase-button').addEventListener('click', function() {
    alert('Thank you for your purchase!');
});

// Live Fashion Shows