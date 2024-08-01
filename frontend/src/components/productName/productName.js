import React from 'react';
import './productName.css'; // Asumiendo que guardas el CSS en ProductCard.css

const ProductName = ({ productName, productDescription, sellerUrl }) => {
  return (
    <div className="product-card">
      <h2 className="product-title">{productName} - {productDescription}</h2>
      <button className="seller-button" onClick={() => window.location.href = sellerUrl}>Vendedor</button>
    </div>
  );
}

export default ProductName;

