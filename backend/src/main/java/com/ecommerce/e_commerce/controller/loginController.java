package com.ecommerce.e_commerce.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class loginController {
  @GetMapping("/")
  public String saludar() {
    return "login";
  }
}
