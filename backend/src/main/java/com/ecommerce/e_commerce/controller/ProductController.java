package com.ecommerce.e_commerce.controller;

import java.util.List;
import java.util.Optional;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.e_commerce.model.Product;
import com.ecommerce.e_commerce.service.ProductService;

@RestController
@RequestMapping("/products") //lo que borre fue: /api/products
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService){

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/all")
    @GetMapping("/all")
    public ResponseEntity<List<Product>> getProducts(){
        return ResponseEntity.ok(productService.getProducts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> product = productService.getProduct(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        if (productService.getProduct(id).isPresent()) {
            productService.deleteProduct(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return ResponseEntity.ok(product);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> existingProduct = productService.getProduct(id);
        if (existingProduct.isPresent()) {
            Product productToUpdate = existingProduct.get();
            productToUpdate.setName(productDetails.getName());
            productToUpdate.setPrice(productDetails.getPrice());
            productToUpdate.setDescription(productDetails.getDescription());
            productService.saveProduct(productToUpdate);
            return ResponseEntity.ok(productToUpdate);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
