import React, { useEffect } from 'react';
import './confirmBuyProduct.css';
import { useState } from 'react';

const ConfirmBuyProduct = (props) => {

const [productDetails , setProductDetails] = useState([]); 

// Realizar una solicitud GET

useEffect(()=>{
  fetch('http://137.184.10.186:8080/allproducts')
  .then(response => response.json())
  .then(data => setProductDetails(data))
  .catch(error => console.error('Error:', error));
})

  // Verifica que productDetails esté definido y tenga propiedades
  //if (!productDetails) {
    //return <div>No se encontraron detalles del producto.</div>;
 // }



  return (
    <div className="confirm-container">
      <h2>Confirmar Compra</h2>
      {
        productDetails.map((detail)=>{
      <div className="product-details">
        
       
        <p><strong>ID del Producto:</strong> {detail.productID}</p>
        
        <p><strong>Nombre del Producto:</strong> {detail.productName}</p>
        <p><strong>Precio:</strong> ${detail.productPrice}</p>
        <p><strong>Cantidad:</strong> {detail.productQTY}</p>
      </div>
       })}
      <button className="confirm-button">Confirmar</button>
    </div>
  );
};


export default ConfirmBuyProduct;
