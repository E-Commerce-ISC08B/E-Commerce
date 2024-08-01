import React from 'react';
import './confirmBuyProduct.css'; // Importa el archivo CSS

// Componente de confirmación de compra
const ConfirmBuyProduct = ({ productDetails }) => {
  // Destructuración de los detalles del producto
  const { productID, productName, productPrice, productQTY, description } = productDetails;

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Confirmación de Compra</h1>
      <div style={styles.productDetails}>
        <h2>Detalles del Producto</h2>
        <p><strong>ID del Producto:</strong> {productID}</p>
        <p><strong>Nombre del Producto:</strong> {productName}</p>
        <p><strong>Precio:</strong> ${productPrice.toFixed(2)}</p>
        <p><strong>Cantidad:</strong> {productQTY}</p>
        <p><strong>Descripción:</strong> {description}</p>
      </div>
    </div>
  );
};

// Estilos en línea para el componente
const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center'
  },
  header: {
    fontSize: '24px',
    color: '#333'
  },
  productDetails: {
    marginTop: '20px',
    textAlign: 'left'
  }
};

export default ConfirmBuyProduct;
