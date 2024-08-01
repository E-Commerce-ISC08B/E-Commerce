import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import ProductName from '../components/productName/productName';
import DescriptionProduct from '../components/DescriptionProduct/descriptionProduct';
import ProductTotal from '../components/productTotal/productTotal';
import ProductImages from '../components/ProductImages/ProductImages';
import ProductStars from '../components/productStars/productStars';
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
