import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import CheckoutModal from './modal'; // Asegúrate de ajustar la ruta según sea necesario
import { useCart } from '../contex/CartProvider';

const ShoppingCart = () => {
    const { cart } = useCart();
    const { items } = cart;
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const calculateTotal = () => {
        return items.reduce((total, item) => total + (item.productPrice ? item.productPrice : 0) * (item.quantity ? item.quantity : 1), 0).toFixed(2);
    };

    const shippingAddress = '123 Calle Falsa, Ciudad, País';

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
                                    <TableCell>${item.productPrice ? item.productPrice.toFixed(2) : '0.00'}</TableCell>
                                    <TableCell>
                                        ${((item.productPrice ? item.productPrice : 0) * (item.quantity ? item.quantity : 1)).toFixed(2)}
                                    </TableCell>
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
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h5" gutterBottom align="center">
                    Dirección de Envío
                </Typography>
                <Typography align="center">{shippingAddress}</Typography>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }} onClick={handleClickOpen}>
                    Pagar
                </Button>
            </Box>

            <CheckoutModal open={open} handleClose={handleClose} />
        </Box>
    );
};

export default ShoppingCart;
