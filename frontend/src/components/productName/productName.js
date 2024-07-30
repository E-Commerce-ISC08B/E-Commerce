import React from 'react';

const ProductCard = ({ productName, productDescription, sellerUrl }) => {
  return (
    <div style={{ border: '2px solid red', padding: '10px', width: '300px' }}>
      <h2>{productName} - {productDescription}</h2>
      <button onClick={() => window.location.href = sellerUrl}>Vendedor</button>
    </div>
  );
}

export default ProductCard;
