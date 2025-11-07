package com.ecommerce.controller;

import com.ecommerce.model.Product;
import com.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // TODO: Restrict to actual frontend origin in production
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    
    @GetMapping("/products/search")
    public List<Product> searchProducts(@RequestParam String query) {
        if (query == null || query.trim().isEmpty()) {
            return productRepository.findAll();
        }
        
        String lowerQuery = query.toLowerCase();
        return productRepository.findAll().stream()
                .filter(product -> {
                    String name = product.getName() != null ? product.getName().toLowerCase() : "";
                    String brand = product.getBrand() != null ? product.getBrand().toLowerCase() : "";
                    String category = product.getCategory() != null ? product.getCategory().toLowerCase() : "";
                    
                    return name.contains(lowerQuery) ||
                           brand.contains(lowerQuery) ||
                           category.contains(lowerQuery);
                })
                .collect(Collectors.toList());
    }
    
    @GetMapping("/products/category/{category}")
    public List<Product> getProductsByCategory(@PathVariable String category) {
        return productRepository.findAll().stream()
                .filter(product -> product.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }
    
    @GetMapping("/categories")
    public List<String> getAllCategories() {
        return productRepository.findAll().stream()
                .map(Product::getCategory)
                .distinct()
                .collect(Collectors.toList());
    }
    
    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }
}