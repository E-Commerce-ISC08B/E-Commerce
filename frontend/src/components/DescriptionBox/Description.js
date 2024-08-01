import React from 'react';
import './descriptionbox.css'; // Importa el archivo CSS

import CardItem from '../CardItem';
import DescriptionProduct from '../DescriptionProduct/descriptionProduct';

const Description = ({ product }) => {
  // Verifica que product esté definido y tenga propiedades
  if (!product) {
    return <div>No se encontró información del producto.</div>;
  }

  return (
    <div className="container">
      <div className="imageContainer">
        <CardItem imageUrl={product.imageUrl} alt={product.productName} />
      </div>
      <div className="descriptionContainer">
        <DescriptionProduct description={product.description} />
      </div>
    </div>
  );
};

// Estilos en línea para el componente
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '600px',
    margin: '20px auto',
  },
  imageContainer: {
    marginBottom: '20px',
  },
  descriptionContainer: {
    textAlign: 'center',
  },
};

export default Description;
