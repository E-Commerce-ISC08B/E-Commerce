import React from 'react';
//import './productName.css'; // Asumiendo que guardas el CSS en ProductCard.css
import DirectionOrder from '../directionOrder/DirectionOrder';
import ConfirmBuyProduct from '../confirmBuyProduct/confirmBuyProduct';

const Product = ({ productName, productDescription, sellerUrl }) => {
  return (
    <div>
        <DirectionOrder></DirectionOrder>
        <ConfirmBuyProduct></ConfirmBuyProduct>
    </div>
     
  );
}

export default Product;