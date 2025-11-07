[README.md](https://github.com/user-attachments/files/23419050/README.md)
# ShopMart - E-Commerce Platform

A full-stack e-commerce marketplace built with Java Spring Boot and vanilla frontend, featuring Amazon/Flipkart-style functionality.

## 🚀 Features

- **Product Catalog**: 12+ products with brands like Apple, Samsung, Nike, Sony
- **Search & Filter**: Real-time search, price/rating filters, category browsing
- **Shopping Cart**: Add/remove items with persistent storage
- **Product Details**: Dedicated pages with full product information
- **Responsive Design**: Mobile-optimized Amazon-style UI

## 🛠️ Tech Stack

- **Backend**: Java 11, Spring Boot 2.7.15, Maven
- **Database**: H2 in-memory database
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **API**: RESTful endpoints with CORS support

## 📦 Project Structure

```
├── backend/                 # Spring Boot application
│   ├── src/main/java/
│   │   └── com/ecommerce/
│   │       ├── EcommerceApplication.java
│   │       ├── model/Product.java
│   │       ├── repository/ProductRepository.java
│   │       ├── controller/
│   │       └── config/
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
└── frontend/                # Web interface
    ├── index.html          # Homepage
    ├── product-details.html # Product pages
    ├── styles.css          # Styling
    └── script.js           # JavaScript functionality
```

## 🏃‍♂️ Quick Start

### Prerequisites
- Java 11 or higher
- Maven 3.6+

### Running the Application

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>
   ```

2. **Start the backend server**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   Server runs on: `http://localhost:8080`

3. **Open the frontend**
   Open `frontend/index.html` in your web browser

## 🌐 API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/search?query=` - Search products
- `GET /api/products/category/{category}` - Filter by category
- `GET /api/products/{id}` - Get product details
- `GET /api/categories` - Get available categories

## 🛍️ Product Categories

- Electronics (Laptops, Smartphones)
- Audio (Headphones, AirPods)
- Home & Kitchen (Coffee Makers, Air Fryers)
- Sports & Fitness (Running Shoes, Fitness Trackers)
- Fashion (Jeans, Jackets)
- Books

## 🔧 Development

### Backend Development
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Development
Simply open `frontend/index.html` in your browser or serve with a local HTTP server.

## 📱 Usage

1. **Browse Products**: Visit the homepage to see all available products
2. **Search**: Use the search bar to find specific items or brands
3. **Filter**: Use category sidebar and filters to narrow down results
4. **Shop**: Click products to view details and add to cart
5. **Cart**: View your items in the shopping cart counter

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
