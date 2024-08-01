import React from 'react';
import './confirmBuyProduct.css';

const ConfirmBuyProduct = ({ productDetails }) => {
  // Verifica que productDetails esté definido y tenga propiedades
  if (!productDetails) {
    return <div>No se encontraron detalles del producto.</div>;
  }

  const { productID, productName, productPrice, productQTY, description } = productDetails;

  return (
    <div className="confirm-container">
      <h2>Confirmar Compra</h2>
      <div className="product-details">
        <p><strong>ID del Producto:</strong> {productID}</p>
        <p><strong>Nombre del Producto:</strong> {productName}</p>
        <p><strong>Precio:</strong> ${productPrice}</p>
        <p><strong>Cantidad:</strong> {productQTY}</p>
        <p><strong>Descripción:</strong> {description}</p>
      </div>
      <button className="confirm-button">Confirmar</button>
    </div>
  );
};

export default ConfirmBuyProduct;
