import React, { useState, useEffect } from 'react';

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
    <div style={{ border: '2px solid red', padding: '10px', width: '300px' }}>
      <h1>buyProduct</h1>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <h2>Dirección</h2>
        <p>{address}</p>
        <a href="/cambiar-direccion">Cambiar dirección de envío</a>
        <button onClick={handlePayment} style={{ display: 'block', marginTop: '10px' }}>Pagar</button>
        <label style={{ display: 'block', marginTop: '10px' }}>
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
