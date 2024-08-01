import React from 'react';
// import './productName.css'; // Asumiendo que guardas el CSS en ProductCard.css
import DirectionOrder from '../directionOrder/DirectionOrder';
import ConfirmBuyProduct from '../confirmBuyProduct/confirmBuyProduct'; // Corrected file path case sensitivity
import './product.css';

const Product = () => {
  return (
    <div className="product-container">
      <DirectionOrder />
      <ConfirmBuyProduct />
    </div>
  );
}

export default Product;
