// script.js

// Add Products Functionality
const addProductForm = document.getElementById('addProductForm');
const productNameInput = document.getElementById('productName');
const quantityInput = document.getElementById('quantity');
const productList = document.getElementById('productList');

addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const productName = productNameInput.value;
    const quantity = quantityInput.value;

    // Add the product to the product list
    productList.innerHTML += `<p>${productName} - ${quantity} pcs</p>`;

    // Clear the form inputs
    productNameInput.value = '';
    quantityInput.value = '';
});

// View Inventory Functionality (simulated data)
const inventoryList = document.getElementById('inventoryList');
// Simulated inventory data
const inventoryData = [
    { name: 'Product 1', quantity: 50 },
    { name: 'Product 2', quantity: 30 },
    { name: 'Product 3', quantity: 60 },
];

// Display inventory data
inventoryData.forEach((item) => {
    inventoryList.innerHTML += `<p>${item.name} - ${item.quantity} pcs</p>`;
});

// Place Orders Functionality
const placeOrderForm = document.getElementById('placeOrderForm');
const productToOrderSelect = document.getElementById('productToOrder');
const orderQuantityInput = document.getElementById('orderQuantity');
const orderHistory = []; // You can use this array to store order history.

placeOrderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get user input
    const selectedProduct = productToOrderSelect.value;
    const orderQuantity = orderQuantityInput.value;

    // Add the order to the order history (simplified example)
    orderHistory.push({ product: selectedProduct, quantity: orderQuantity });

    // Clear the form inputs
    orderQuantityInput.value = '';

    // You can choose to display the order history if needed
});

// View Products Functionality (simulated data)
const productsData = [
    { name: 'Product 1', price: 10.99 },
    { name: 'Product 2', price: 15.99 },
    { name: 'Product 3', price: 9.99 },
];

const displayProductList = document.getElementById('productList');

// Display product data
productsData.forEach((product) => {
    displayProductList.innerHTML += `<p>${product.name} - $${product.price}</p>`;
});
