package com.ecommerce.e_commerce.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import com.ecommerce.e_commerce.model.Product;
import com.ecommerce.e_commerce.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class ProductController {
    private final ProductService productService;
    
    public ProductController(@Autowired ProductService productService){
        this.productService = productService;
    }

    @GetMapping("/productCrud")
    public ResponseEntity<List<Product>> getProducts(){
        return ResponseEntity.ok(productService.getProducts());
    }
    
}
