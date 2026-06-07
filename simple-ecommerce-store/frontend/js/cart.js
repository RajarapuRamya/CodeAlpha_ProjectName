let cart =
JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer =
document.getElementById("cart-items");

let total = 0;

cart.forEach(item => {

    total += item.price;

    cartContainer.innerHTML += `
        <p>${item.name} - ₹${item.price}</p>
    `;
});

document.getElementById("total").innerText =
"Total = ₹" + total;

function checkout() {

    alert("Order Placed Successfully");

    localStorage.removeItem("cart");

    location.reload();
}