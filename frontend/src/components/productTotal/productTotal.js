import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const ProductTotal = ({ onAddToCart, onBuyNow }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginY: 2 }}>
      <TextField
        label="Cantidad"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={1}
        variant="outlined"
        size="small"
        sx={{ marginBottom: 2 }} // Espaciado entre el campo de texto y el botón
      />
      <Button variant="contained" color="primary" sx={{ marginBottom: 1 }} onClick={onAddToCart}>
        Añadir al Carrito
      </Button>
      <Button variant="contained" color="secondary" onClick={onBuyNow}>
        Comprar Ahora
      </Button>
    </Box>
  );
};

export default ProductTotal;
