package com.ecommerce.e_commerce.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.ecommerce.e_commerce.dto.ProductDTO;
import org.springframework.http.HttpStatus;
import com.ecommerce.e_commerce.model.Product;
import com.ecommerce.e_commerce.service.ProductService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class ProductController {
    private final ProductService productService;

    public ProductController(@Autowired ProductService productService) {
        this.productService = productService;
    }

    // Crear productos
    @GetMapping({ "/createproduct" })
    public String Create(Model model) {
        model.addAttribute("product", new Product());
        return "crud";
    }

    @PostMapping("/createproduct")
    public String save(@Valid Product product, BindingResult br) {
        if (br.hasErrors()) {
            return "crud";
        }
        productService.saveProduct(product);
        return "redirect:/"; // cambiar a la vista de productos
    }

    // Leer productos
    @GetMapping({ "/allproducts" })
    public ResponseEntity<List<Product>> Read() {
        return ResponseEntity.ok(productService.getProducts());
    }
    
    @GetMapping({ "/todosDto" })
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findAllDto() {
    return productService.findAllDto();
    }

    @GetMapping("/eliminar/{id}")  // Eliminar Boton
    @ResponseStatus(HttpStatus.OK) // Eliminar Boton
    public String deleteProduct(@PathVariable Long id ) {
        if (id > 0 ) {
            productService.deleteProduct(id);
        }
        return "redirect:/";   // equivalente a  @GetMapping ("/listado")
    } 

    @GetMapping("/update/{id}")
    public String updateProduct(@PathVariable Long id, Model model) {
        Optional<Product> product = productService.getProduct(id);
        if (product.isPresent()) {
            model.addAttribute("product", product.get());
            return "crud"; // Retorna la vista "crud" con el producto
        } else {
            return "redirect:/"; // Redirige a la vista de productos si el producto no existe
        }
    }
    @GetMapping("/name/{productName}")
    public List<Product> getProductsByName(@PathVariable String productName) {
        return productService.getProductsByName(productName);
    }

}