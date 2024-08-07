import React, { useState } from 'react';
import './DirectionOrder.css'; 

const DirectionOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    country: '',
    city: '',
    postalCode: '',
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleCancel = () => {
    setPaymentMethod('');
    setUserInfo({
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      country: '',
      city: '',
      postalCode: '',
    });
  };

  return (
    <div className="direction-order">
      <button className="cancel-button" onClick={handleCancel}>Cancelar</button>
      <div className="payment-methods">
        <div onClick={() => handlePaymentMethodChange('creditCard')}>Tarjeta de crédito/débito</div>
        <div onClick={() => handlePaymentMethodChange('storePayment')}>Pago en sucursal</div>
        <div onClick={() => handlePaymentMethodChange('paypal')}>PayPal</div>
        <div onClick={() => handlePaymentMethodChange('bankTransfer')}>Transferencia bancaria</div>
      </div>
      <div className="user-info">
        <input type="text" name="firstName" placeholder="Nombre" value={userInfo.firstName} onChange={handleInputChange} />
        <input type="text" name="lastName" placeholder="Apellido(s)" value={userInfo.lastName} onChange={handleInputChange} />
        <input type="text" name="phone" placeholder="Número de teléfono" value={userInfo.phone} onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Dirección de entrega" value={userInfo.address} onChange={handleInputChange} />
        <input type="text" name="country" placeholder="País" value={userInfo.country} onChange={handleInputChange} />
        <input type="text" name="city" placeholder="Ciudad" value={userInfo.city} onChange={handleInputChange} />
        <input type="text" name="postalCode" placeholder="Código postal" value={userInfo.postalCode} onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default DirectionOrder;
