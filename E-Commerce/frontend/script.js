// Use same origin since backend serves both frontend and API
const API_BASE_URL = window.location.origin;

console.log('API Base URL:', API_BASE_URL);

// DOM elements
const loadingElement = document.getElementById('loading');
const productsContainer = document.getElementById('products-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoriesList = document.getElementById('categories-list');
const sortSelect = document.getElementById('sort-select');
const priceMinSlider = document.getElementById('price-min');
const priceMaxSlider = document.getElementById('price-max');
const priceMinValue = document.getElementById('price-min-value');
const priceMaxValue = document.getElementById('price-max-value');
const cartCount = document.getElementById('cart-count');

// Application state
let allProducts = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('ShopMart app initialized');
    updateCartCount();
    fetchProducts();
    fetchCategories();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    sortSelect.addEventListener('change', handleSort);
    
    priceMinSlider.addEventListener('input', updatePriceDisplay);
    priceMaxSlider.addEventListener('input', updatePriceDisplay);
    priceMinSlider.addEventListener('change', applyFilters);
    priceMaxSlider.addEventListener('change', applyFilters);
    
    // Rating filter
    document.querySelectorAll('.rating-filter input').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
}

// Fetch and display products
async function fetchProducts() {
    try {
        loadingElement.style.display = 'block';
        productsContainer.innerHTML = '';
        
        const response = await fetch(`${API_BASE_URL}/api/products`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        allProducts = await response.json();
        filteredProducts = [...allProducts];
        displayProducts(filteredProducts);
        
    } catch (error) {
        console.error('Error fetching products:', error);
        displayError('Failed to load products. Please check if the backend server is running.');
    } finally {
        loadingElement.style.display = 'none';
    }
}

// Fetch categories
async function fetchCategories() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/categories`);
        if (response.ok) {
            const categories = await response.json();
            displayCategories(categories);
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

// Display categories in sidebar
function displayCategories(categories) {
    categoriesList.innerHTML = categories.map(category => `
        <a href="#" class="category-item" data-category="${category}">${category}</a>
    `).join('');
    
    // Add event listeners to category links
    document.querySelectorAll('.category-item').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterByCategory(link.dataset.category);
        });
    });
}

// Display products on the page
function displayProducts(products) {
    if (products.length === 0) {
        productsContainer.innerHTML = '<p class="error">No products found.</p>';
        return;
    }
    
    productsContainer.innerHTML = products.map(product => `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.imageUrl}" alt="${escapeHtml(product.name)}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            
            <div class="product-brand">${escapeHtml(product.brand)}</div>
            
            <h3 class="product-title">${escapeHtml(product.name)}</h3>
            
            <div class="product-rating">
                <span class="stars">${generateStars(product.rating)}</span>
                <span class="rating-text">${product.rating}</span>
                <span class="review-count">(${product.reviewCount.toLocaleString()})</span>
            </div>
            
            <div class="price-section">
                <span class="current-price">$${product.price}</span>
                ${product.discountPercentage > 0 ? `
                    <span class="original-price">$${product.originalPrice}</span>
                    <span class="discount-badge">${product.discountPercentage}% off</span>
                ` : ''}
            </div>
            
            <div class="product-description">${escapeHtml(product.description)}</div>
            
            <div class="product-footer">
                <div class="seller-info">by ${escapeHtml(product.seller)}</div>
                <div class="stock-info">${product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}</div>
            </div>
            
            <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" 
                    ${product.stock === 0 ? 'disabled' : ''}>
                ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
        </div>
    `).join('');
}

// Generate star rating display
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return '★'.repeat(fullStars) + 
           (halfStar ? '☆' : '') + 
           '☆'.repeat(emptyStars);
}

// Handle search
async function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        filteredProducts = [...allProducts];
        displayProducts(filteredProducts);
        return;
    }
    
    try {
        const response = await fetch(`${API_BASE_URL}/api/products/search?query=${encodeURIComponent(query)}`);
        if (response.ok) {
            filteredProducts = await response.json();
            displayProducts(filteredProducts);
        }
    } catch (error) {
        console.error('Error searching products:', error);
    }
}

// Filter by category
async function filterByCategory(category) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/products/category/${encodeURIComponent(category)}`);
        if (response.ok) {
            filteredProducts = await response.json();
            displayProducts(filteredProducts);
        }
    } catch (error) {
        console.error('Error filtering by category:', error);
    }
}

// Handle sorting
function handleSort() {
    const sortBy = sortSelect.value;
    let sorted = [...filteredProducts];
    
    switch (sortBy) {
        case 'price-low':
            sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case 'price-high':
            sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
        case 'rating':
            sorted.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
            break;
        case 'discount':
            sorted.sort((a, b) => (b.discountPercentage || 0) - (a.discountPercentage || 0));
            break;
        default:
            // Default order
            break;
    }
    
    displayProducts(sorted);
}

// Update price display
function updatePriceDisplay() {
    const minPrice = priceMinSlider.value;
    const maxPrice = priceMaxSlider.value;
    
    // Ensure min is not greater than max
    if (parseInt(minPrice) > parseInt(maxPrice)) {
        priceMinSlider.value = maxPrice;
    }
    if (parseInt(maxPrice) < parseInt(minPrice)) {
        priceMaxSlider.value = minPrice;
    }
    
    priceMinValue.textContent = `$${priceMinSlider.value}`;
    priceMaxValue.textContent = `$${priceMaxSlider.value}`;
}

// Apply filters
function applyFilters() {
    const minPrice = parseFloat(priceMinSlider.value);
    const maxPrice = parseFloat(priceMaxSlider.value);
    const ratingFilters = Array.from(document.querySelectorAll('.rating-filter input:checked'))
                              .map(cb => parseFloat(cb.value));
    
    let filtered = [...allProducts];
    
    // Price filter
    filtered = filtered.filter(product => {
        const price = parseFloat(product.price);
        return price >= minPrice && price <= maxPrice;
    });
    
    // Rating filter
    if (ratingFilters.length > 0) {
        const minRating = Math.min(...ratingFilters);
        filtered = filtered.filter(product => parseFloat(product.rating) >= minRating);
    }
    
    filteredProducts = filtered;
    displayProducts(filteredProducts);
}

// Add to cart
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    showNotification(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// View product details
function viewProduct(productId) {
    window.location.href = `product-details.html?id=${productId}`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem;
        border-radius: 4px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Display error message
function displayError(message) {
    productsContainer.innerHTML = `<div class="error">${escapeHtml(message)}</div>`;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
`;
document.head.appendChild(style);