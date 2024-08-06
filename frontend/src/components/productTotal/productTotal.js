import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const ProductTotal = ({ onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad

  const handleAddToCart = () => {
    onAddToCart(quantity); // Pasar la cantidad al manejador de añadir al carrito
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginY: 2 }}>
      <TextField
        label="Cantidad"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))} // Actualiza el estado al cambiar el valor
        variant="outlined"
        size="small"
        sx={{ marginBottom: 2 }} // Espaciado entre el campo de texto y el botón
      />
      <Button variant="contained" color="primary" sx={{ marginBottom: 1 }} onClick={handleAddToCart}>
        Añadir al Carrito
      </Button>
      <Button variant="contained" color="secondary" onClick={onBuyNow}>
        Comprar Ahora
      </Button>
    </Box>
  );
};

export default ProductTotal;
