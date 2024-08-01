import React, { useState } from 'react';
import './productTotal.css'; // Asumiendo que guardas el CSS en ProductComponent.css

const ProductComponent = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Lógica para añadir al carrito
    console.log(`Añadir ${quantity} al carrito`);
  };

  const handleBuyNow = () => {
    // Lógica para comprar ahora
    console.log(`Comprar ${quantity} ahora`);
  };

  return (
    <div className="product-container">
      <div className="product-price">
        <span>$xxxx</span>
      </div>
      <div className="product-availability">
        <span>Disponible</span>
      </div>
      <div className="product-quantity">
        <label htmlFor="quantity">Cantidad: </label>
        <select
          id="quantity"
          className="product-select"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button className="product-button" onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
      <div>
        <button className="product-button" onClick={handleBuyNow}>Comprar ahora</button>
      </div>
    </div>
  );
};

export default ProductComponent;
