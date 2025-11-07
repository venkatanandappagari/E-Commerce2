# ShopMart - Amazon/Flipkart-Style E-Commerce Platform

## Overview
A comprehensive full-stack e-commerce marketplace built with Java Spring Boot backend and vanilla frontend, featuring advanced e-commerce functionality inspired by Amazon and Flipkart.

## Architecture
- **Backend**: Java Spring Boot 2.7.15 with Maven
- **Database**: H2 in-memory database with enhanced product schema
- **Frontend**: Vanilla HTML/CSS/JavaScript with modern UI/UX
- **API**: Comprehensive REST endpoints with search and filtering
- **CORS**: Configured for cross-origin requests

## 🚀 Current State - Amazon/Flipkart Features
✅ Enhanced product model with brand, rating, discounts, images, seller info
✅ 12 realistic products with major brands (Apple, Samsung, Nike, Sony, etc.)
✅ Amazon-style navigation with category sidebar and search
✅ Product filtering by price range and ratings
✅ Sorting by price, rating, and discount percentage
✅ Shopping cart with localStorage persistence
✅ Dedicated product detail pages with full product information
✅ Responsive design optimized for mobile and desktop
✅ Search functionality across name, brand, and category
✅ Star ratings and review counts display
✅ Discount badges and original price display
✅ Professional Amazon/Flipkart-inspired UI design

## Project Structure
```
├── backend/
│   ├── src/main/java/com/ecommerce/
│   │   ├── EcommerceApplication.java
│   │   ├── model/Product.java (Enhanced with 9 additional fields)
│   │   ├── repository/ProductRepository.java
│   │   ├── controller/ProductController.java (5 API endpoints)
│   │   ├── controller/HomeController.java
│   │   └── config/
│   │       ├── DataInitializer.java (12 realistic products)
│   │       └── WebConfig.java
│   ├── src/main/resources/application.properties
│   └── pom.xml
└── frontend/
    ├── index.html (Amazon-style homepage)
    ├── product-details.html (Dedicated product pages)
    ├── styles.css (Professional marketplace styling)
    └── script.js (Advanced shopping functionality)
```

## 🛍️ Key Features

### Enhanced Product Model
- **Brand**: Apple, Samsung, Nike, Sony, Dell, etc.
- **Rating**: 1-5 star ratings with decimal precision
- **Review Count**: Realistic review numbers (hundreds to thousands)
- **Discount System**: Original price + discount percentage
- **Product Images**: High-quality Unsplash images
- **Seller Information**: Individual seller names
- **Stock Management**: Real-time stock tracking
- **Availability Status**: In-stock/out-of-stock indicators

### API Endpoints
- `GET /api/products` - All products
- `GET /api/products/search?query=` - Search products
- `GET /api/products/category/{category}` - Filter by category
- `GET /api/products/{id}` - Individual product details
- `GET /api/categories` - Available categories

### Frontend Features
- **Search Bar**: Real-time product search
- **Category Navigation**: Left sidebar with all categories
- **Advanced Filtering**: Price range sliders, rating filters
- **Sorting Options**: Price (low-high), Rating, Discount percentage
- **Shopping Cart**: Add/remove items with quantity management
- **Product Cards**: Amazon-style layout with images, ratings, prices
- **Product Details**: Dedicated pages with full product information
- **Responsive Design**: Mobile-optimized layout

## 📱 Product Categories
- **Electronics**: Laptops, Smartphones (Apple, Samsung, Dell)
- **Audio**: Headphones, AirPods (Sony, Apple)
- **Home & Kitchen**: Coffee Makers, Air Fryers (Keurig, Instant)
- **Sports & Fitness**: Running Shoes, Fitness Trackers (Nike, Fitbit)
- **Fashion**: Jeans, Jackets (Levi's, Patagonia)
- **Books**: Bestselling novels

## 🔧 How to Use
1. **Homepage**: Browse products with filtering and sorting
2. **Search**: Use the search bar to find specific products or brands
3. **Categories**: Click sidebar categories to filter products
4. **Product Details**: Click any product to view detailed information
5. **Shopping**: Add items to cart and track with cart counter
6. **API Access**: All endpoints available for developers

## 💾 Technical Details
- **Database Schema**: Enhanced with 9 additional product fields
- **Null-Safe Backend**: Robust error handling in search endpoints
- **LocalStorage Cart**: Persistent shopping cart across sessions
- **Professional Styling**: Amazon color scheme (#232f3e, #ff9900)
- **Performance**: In-memory filtering and sorting
- **Security**: XSS protection with HTML escaping

## 🎯 User Experience
- **Visual Design**: Matches Amazon/Flipkart design patterns
- **Navigation**: Intuitive category browsing and search
- **Product Discovery**: Multiple ways to find products
- **Shopping Flow**: Seamless add-to-cart experience
- **Mobile-First**: Responsive design for all devices

## User Preferences
- ✅ Java Spring Boot for backend architecture
- ✅ H2 in-memory database for development
- ✅ Maven for dependency management
- ✅ Modular project structure
- ✅ Vanilla frontend (no frameworks)
- ✅ Amazon/Flipkart-inspired design and functionality
- ✅ CORS enabled for seamless frontend-backend communication