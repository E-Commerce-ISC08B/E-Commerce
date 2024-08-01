import React, { useState, useEffect } from 'react';
import './buyProducts.css'; // Asumiendo que guardas el CSS en BuyProduct.css

const BuyProduct = () => {
  const [address, setAddress] = useState('');
  const [isGift, setIsGift] = useState(false);

  useEffect(() => {
    // Simular una llamada a una API para obtener la dirección
    const fetchAddress = async () => {
      const response = await fetch('/api/address'); // Ajusta esta URL según tu API
      const data = await response.json();
      setAddress(data.address);
    };

    fetchAddress();
  }, []);

  const handlePayment = () => {
    // Manejar el proceso de pago aquí
    console.log('Pagar');
  };

  return (
    <div className="buy-product-container">
      <h1>buyProduct</h1>
      <div className="address-container">
        <h2 className="address-title">Dirección</h2>
        <p className="address-text">{address}</p>
        <a className="change-address-link" href="/cambiar-direccion">Cambiar dirección de envío</a>
        <button className="payment-button" onClick={handlePayment}>Pagar</button>
        <label className="gift-checkbox">
          <input 
            type="checkbox" 
            checked={isGift}
            onChange={() => setIsGift(!isGift)}
          />
          Este pedido es un regalo.
        </label>
      </div>
    </div>
  );
};

export default BuyProduct;
