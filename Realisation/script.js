// Sample JSON data
const products = [
    { id: 1, name: "Blach hoody", category: "Hoodies", price: 249, image: "images/Black hoody.jpg" },
    { id: 2, name: "Black suit", category: "SUITS", price: 899, image: "images/Black suit.jpg" },
    { id: 3, name: "Bluesky hoody", category: "Hoodies", price: 249, image: "images/Bluesky hoody.jpg" },
    { id: 4, name: "Classic suit", category: "Suits", price: 999, image: "images/Classic suit.jpg"},
    { id: 5, name: "Blue Jeans", category: "Jeans", price: 299, image: "images/Blue jeans.jpg"},
    { id: 6, name: "Purple hoody", category: "Hoodies", price: 249, image: "images/Purple hoody.jpg"},
    { id: 7, name: "Red hoody", category: "Hoodies", price: 249, image: "images/Red hoody.jpg"},
    { id: 8, name: "Green hoody", category: "Hoodies", price: 249, image: "images/Green hoody.png"},
    { id: 9, name: "White suit", category: "Suits", price: 1000, image: "images/White suit.jpg"},
    { id: 10, name: "Green jeans", category: "Jeans", price: 300, image: "images/Green jeans.jpg"},
    { id: 11, name: "Jeans", category: "Jeans", price: 300, image:  "images/Jeans.jpg"},
    { id: 12, name: "Black jeans", category: "Jeans", price: 300, image:  "images/Black jeans.png"},
];

const productContainer = document.getElementById('productContainer');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');

// Function to display products
function displayProducts(items) {
    productContainer.innerHTML = '';
    items.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>price: ${product.price}$ </p>
            <p>category: ${product.category}</p>
        `;
        productContainer.appendChild(productCard);
    });
}

// Initial display
displayProducts(products);

// Search functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});

// Filter functionality
filterCategory.addEventListener('change', () => {
    const category = filterCategory.value;
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
});
