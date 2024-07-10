package com.ecommerce.e_commerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

public class loginController {

@Controller
public class SaludoController {

    @GetMapping("/") 
    public String saludar() {
      return "crud";
    }

}
}
