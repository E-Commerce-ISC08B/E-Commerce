package com.ecommerce.e_commerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.e_commerce.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    
} 