// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to render product list
function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Function to render shopping cart
function renderCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });
}

// Function to add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }
}

// Function to clear cart
function clearCart() {
  sessionStorage.removeItem("cart");
  renderCart();
}

// Initial render
renderProducts();
renderCart();

// Event listener for add to cart buttons
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", () => {
    addToCart(parseInt(button.getAttribute("data-id")));
  });
});

// Event listener for clear cart button
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);
