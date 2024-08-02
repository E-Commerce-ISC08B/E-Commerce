import React, { useState } from 'react';
import {Box, Typography, Table, TableBody, TableCell, TableContainer,TableHead, TableRow, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import CheckoutModal from './modal'; // Asegúrate de ajustar la ruta según sea necesario

const ShoppingCart = () => {
  // Datos de ejemplo estáticos
  const items = [
    {
      id: 1,
      name: 'Producto A',
      description: 'Descripción del Producto A',
      quantity: 2,
      price: 25.00,
      img: 'https://via.placeholder.com/100', // URL de la imagen
    },
    {
      id: 2,
      name: 'Producto B',
      description: 'Descripción del Producto B',
      quantity: 1,
      price: 15.50,
      img: 'https://via.placeholder.com/100', // URL de la imagen
    },
    {
      id: 3,
      name: 'Producto C',
      description: 'Descripción del Producto C',
      quantity: 3,
      price: 10.00,
      img: 'https://via.placeholder.com/100', // URL de la imagen
    },
  ];

  const [open, setOpen] = useState(false); // Estado para el modal

  const handleClickOpen = () => {
    setOpen(true); // Abre el modal
  };

  const handleClose = () => {
    setOpen(false); // Cierra el modal
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const shippingAddress = '123 Calle Falsa, Ciudad, País'; // Dirección de envío estática

  if (!items || items.length === 0) {
    return (
      <Box sx={{ padding: 3 }}>
        <Typography variant="h6">El carrito está vacío.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3, display: 'flex' }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h4" gutterBottom>
          Carrito de Compras
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Imagen</TableCell>
                <TableCell>Producto</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto' }} />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={5} align="right">
                  <Typography variant="h6">Total:</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">${calculateTotal()}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={{
          width: '300px',
          marginLeft: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Centra horizontalmente
          justifyContent: 'center', // Centra verticalmente
        }}
      >
        <Typography variant="h5" gutterBottom align="center">
          Dirección de Envío
        </Typography>
        <Typography align="center">{shippingAddress}</Typography>
        {/* Botón de Pagar debajo de la dirección de envío */}
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleClickOpen}>
          Pagar
        </Button>
      </Box>

      {/* Modal de Checkout */}
      <CheckoutModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default ShoppingCart;
