let cart = [];
let totalCost = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalCost += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="cart-item-name">${cartItem.item}</span><span class="cart-item-price">₹${cartItem.price.toFixed(2)}</span>`;
        cartItems.appendChild(li);
    });

    const totalCostElement = document.getElementById('total-cost');
    totalCostElement.textContent = `Total: ₹${totalCost.toFixed(2)}`;
}
