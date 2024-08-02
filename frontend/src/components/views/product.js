import React from 'react';
import NavBar from '../NavBar/NavBar';
import ProductName from '../ProductName/productName';
import DescriptionProduct from '../DescriptionProduct/descriptionProduct';
import ProductTotal from '../productTotal/productTotal';
import ProductImages from '../ProductImages/ProductImages';
import ProductStars from '../productStars/productStars';
import './product.css';

const Product = () => {
  return (
    <div className="product-page">
      <NavBar />
      <div className="product-container">
        <div className="product-images">
          <ProductImages />
        </div>
        <div className="product-details">
          <div className="product-name">
            <ProductName />
          </div>
          <div className="product-description">
            <DescriptionProduct />
          </div>
          <div className="product-total">
            <ProductTotal />
          </div>
        </div>
        <div className="product-stars">
          <ProductStars />
        </div>
      </div>
    </div>
  );
};

export default Product;
