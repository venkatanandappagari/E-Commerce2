package com.ecommerce.config;

import com.ecommerce.model.Product;
import com.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            // Electronics
            productRepository.save(new Product("Dell XPS 13 Laptop", "High-performance ultrabook with Intel i7 processor, 16GB RAM, 512GB SSD", 
                new BigDecimal("799.99"), 15, "Electronics", "Dell", new BigDecimal("4.3"), 1245, 20, 
                new BigDecimal("999.99"), "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400", "TechStore", true));
            
            productRepository.save(new Product("iPhone 15 Pro", "Latest iPhone with A17 Pro chip, 128GB storage, Pro camera system", 
                new BigDecimal("899.99"), 25, "Electronics", "Apple", new BigDecimal("4.6"), 2891, 10, 
                new BigDecimal("999.99"), "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400", "AppleStore", true));
            
            productRepository.save(new Product("Samsung Galaxy S24", "Flagship Android smartphone with 256GB storage and triple camera", 
                new BigDecimal("699.99"), 18, "Electronics", "Samsung", new BigDecimal("4.4"), 1567, 15, 
                new BigDecimal("829.99"), "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", "SamsungOfficial", true));
            
            // Audio
            productRepository.save(new Product("Sony WH-1000XM5 Headphones", "Industry-leading noise canceling wireless headphones", 
                new BigDecimal("329.99"), 30, "Audio", "Sony", new BigDecimal("4.7"), 3456, 12, 
                new BigDecimal("379.99"), "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", "SonyOfficial", true));
            
            productRepository.save(new Product("AirPods Pro (2nd Gen)", "Active Noise Cancellation with Personalized Spatial Audio", 
                new BigDecimal("199.99"), 42, "Audio", "Apple", new BigDecimal("4.5"), 8934, 20, 
                new BigDecimal("249.99"), "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=400", "AppleStore", true));
            
            // Home & Kitchen
            productRepository.save(new Product("Keurig K-Elite Coffee Maker", "Single Serve K-Cup Pod Coffee Maker with Iced Coffee Setting", 
                new BigDecimal("129.99"), 12, "Home & Kitchen", "Keurig", new BigDecimal("4.2"), 2134, 25, 
                new BigDecimal("169.99"), "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400", "KitchenWorld", true));
            
            productRepository.save(new Product("Instant Vortex Plus Air Fryer", "4-quart air fryer with rotisserie and dehydrator functions", 
                new BigDecimal("79.99"), 20, "Home & Kitchen", "Instant", new BigDecimal("4.4"), 5672, 30, 
                new BigDecimal("119.99"), "https://images.unsplash.com/photo-1585515656519-b5960d8ab5e0?w=400", "KitchenWorld", true));
            
            // Sports & Fitness
            productRepository.save(new Product("Nike Air Zoom Pegasus 40", "Men's road running shoes with responsive cushioning", 
                new BigDecimal("109.99"), 35, "Sports & Fitness", "Nike", new BigDecimal("4.3"), 4567, 15, 
                new BigDecimal("129.99"), "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", "NikeOfficial", true));
            
            productRepository.save(new Product("Fitbit Charge 5", "Advanced fitness and health tracker with built-in GPS", 
                new BigDecimal("149.99"), 28, "Sports & Fitness", "Fitbit", new BigDecimal("4.2"), 3289, 25, 
                new BigDecimal("199.99"), "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400", "FitbitStore", true));
            
            // Fashion
            productRepository.save(new Product("Levi's 501 Original Jeans", "Classic straight fit jeans in medium wash", 
                new BigDecimal("49.99"), 45, "Fashion", "Levi's", new BigDecimal("4.1"), 1892, 17, 
                new BigDecimal("59.99"), "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", "LevisStore", true));
            
            productRepository.save(new Product("Patagonia Houdini Jacket", "Ultra-lightweight windbreaker perfect for outdoor activities", 
                new BigDecimal("89.99"), 22, "Fashion", "Patagonia", new BigDecimal("4.6"), 987, 10, 
                new BigDecimal("99.99"), "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?w=400", "PatagoniaOfficial", true));
            
            // Books
            productRepository.save(new Product("The Seven Husbands of Evelyn Hugo", "A captivating novel about Hollywood's golden age", 
                new BigDecimal("12.99"), 150, "Books", "Atria Books", new BigDecimal("4.8"), 89567, 35, 
                new BigDecimal("19.99"), "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", "BookDepot", true));
        }
    }
}