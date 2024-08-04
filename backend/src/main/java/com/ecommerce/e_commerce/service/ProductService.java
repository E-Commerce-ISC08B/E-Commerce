package com.ecommerce.e_commerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.e_commerce.model.Product;
<<<<<<< Updated upstream
import com.ecommerce.e_commerce.Repository.ProductRepository;
=======
import com.ecommerce.e_commerce.repository.ProductRepository;
>>>>>>> Stashed changes
import com.ecommerce.e_commerce.dto.ProductDTO;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    

    public List<Product> getProducts(){ //obtener todos los productos
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id){
        return productRepository.findById(id);
    }

    public interface ProductDtoService {
    public List<ProductDTO> findAllDto();
    }
    //obtener por id
    public Optional<Product> getProduct(Long id){
        return productRepository.findById(id);
    }
    //delete product
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }
    //create and update product
    public void saveProduct(Product product){
        productRepository.save(product);
    }
    //update product
    public List<Product> getProductsByName(String productName) {
        return productRepository.findByProductName(productName);
    }

    public List<ProductDTO> findAllDto() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAllDto'");
    }
}

