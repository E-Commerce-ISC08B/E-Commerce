import React, { useState } from 'react';

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
    <div style={{ border: '1px solid black', padding: '20px', width: '200px' }}>
      <div>
        <span>$xxxx</span>
      </div>
      <div>
        <span>Disponible</span>
      </div>
      <div>
        <label htmlFor="quantity">Cantidad: </label>
        <select
          id="quantity"
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
        <button onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
      <div>
        <button onClick={handleBuyNow}>Comprar ahora</button>
      </div>
    </div>
  );
};

export default ProductComponent;
