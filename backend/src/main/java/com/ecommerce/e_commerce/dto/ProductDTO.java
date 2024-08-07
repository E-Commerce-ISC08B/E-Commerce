package com.ecommerce.e_commerce.dto;

import lombok.Data;

@Data
public class ProductDTO {
    private Integer productID;
    private String productName;
    private Float productPrice;
    private Short productQTY;
    private String description;

    // Getters and Setters
    public Integer getProductID() {
        return productID;
    }

    public void setProductID(Integer productID) {
        this.productID = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Float getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Float productPrice) {
        this.productPrice = productPrice;
    }

    public Short getProductQTY() {
        return productQTY;
    }

    public void setProductQTY(Short productQTY) {
        this.productQTY = productQTY;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
