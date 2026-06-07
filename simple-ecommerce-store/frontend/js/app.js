const products = [
{
    id: 1,
    name: "iPhone 15 Pro",
    price: "₹129,999",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569",
    description: "Apple A17 Pro chip, 48MP Camera, Titanium Design"
},
{
    id: 2,
    name: "Samsung S24 Ultra",
    price: "₹119,999",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    description: "200MP Camera, Snapdragon 8 Gen 3"
},
{
    id: 3,
    name: "Sony WH1000XM5",
    price: "₹29,999",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Premium Noise Cancelling Headphones"
},
{
    id: 4,
    name: "Apple Watch",
    price: "₹44,999",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    description: "Fitness Tracking and Health Monitoring"
},
{
    id: 5,
    name: "Canon EOS R10",
    price: "₹89,999",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "24.2MP Mirrorless Camera"
},
{
    id: 6,
    name: "Gaming Keyboard",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a",
    description: "RGB Mechanical Keyboard"
},
{
    id: 7,
    name: "Gaming Mouse",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description: "16000 DPI Gaming Mouse"
},
{
    id: 8,
    name: "Dell 4K Monitor",
    price: "₹34,999",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    description: "27-inch UHD Display"
},
{
    id: 9,
    name: "Nike Air Max",
    price: "₹8,999",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Comfortable Running Shoes"
}
];

const container = document.getElementById("products");

products.forEach(product => {
    container.innerHTML += `
    <div class="card">
        <img src="${product.image}" alt="${product.name}">

        <div class="card-content">
            <h3>${product.name}</h3>

            <div class="rating">★★★★★</div>

            <p class="price">${product.price}</p>

            <p class="description">${product.description}</p>

            <div class="btn-group">
                <button class="btn cart-btn">Add Cart</button>
                <button class="btn view-btn">Details</button>
            </div>
        </div>
    </div>
    `;
});