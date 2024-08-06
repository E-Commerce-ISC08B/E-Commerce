package com.ecommerce.e_commerce.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Customers")
public class Users {
    
    @Id
    @Column(name = "customerID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long customerID;
    private String billingAddress;
    private String customerName;
    private String email;
    private String password;
    private String defaultAddress;
    private String country;
    private String phone;

}
