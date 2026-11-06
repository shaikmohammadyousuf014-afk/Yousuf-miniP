
// YousufMart - Products

const products = [
    {
        id: 1,
        name: "Samsung Mobile",
        category: "Electronics",
        price: 15000
    },
    {
        id: 2,
        name: "Men's T-Shirt",
        category: "Fashion",
        price: 599
    },
    {
        id: 3,
        name: "Nike Shoes",
        category: "Shoes",
        price: 2499
    },
    {
        id: 4,
        name: "Headphones",
        category: "Electronics",
        price: 999
    }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

// Display Products
function displayProducts() {
    productList.innerHTML = "";

    products.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}

// Add Product to Cart
function addToCart(id) {
    const product = products.find(item => item.id === id);
    cart.push(product);
    displayCart();
}
// Search Products
function searchProducts() {
    const searchValue = document
        .getElementById("searchInput")
        .value.toLowerCase();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue)
    );

    productList.innerHTML = "";

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}
// Display Cart
// Filter Products by Category
function filterProducts(category) {
    productList.innerHTML = "";

    const filteredProducts = category === "All"
        ? products
        : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        productList.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
    });
}
function displayCart() {
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeFromCart(${index})">
                    Remove
                </button>
            </p>
        `;
    });

    totalElement.textContent = "Total: ₹" + total;
}

// Remove Product
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Initial Display
displayProducts();
displayCart();
