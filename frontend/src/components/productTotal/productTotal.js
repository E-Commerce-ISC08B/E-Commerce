import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ProductTotal = ({ onAddToCart, stock }) => {
    const [quantity, setQuantity] = useState(1);
    const [open, setOpen] = useState(false); // Estado para el modal

    const handleAddToCart = () => {
        if (quantity > stock) {
            setOpen(true); // Abre el modal si la cantidad supera el stock
        } else {
            onAddToCart(quantity); // Llama a la función para agregar al carrito
        }
    };

    const handleClose = () => {
        setOpen(false); // Cierra el modal
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
                onChange={(e) => {
                    const value = Number(e.target.value);
                    // Solo permitir números positivos
                    if (value > 0 || e.target.value === "") {
                        setQuantity(value);
                    }
                }}
                variant="outlined"
                size="small"
                sx={{ marginBottom: 2 }} // Espaciado entre el campo de texto y el botón
            />

            <Button variant="contained" color="primary" sx={{ marginBottom: 1 }} onClick={handleAddToCart}>
                Añadir al Carrito
            </Button>
            <Button variant="contained" color="secondary" onClick={() => console.log("Comprar Ahora")}>
                Comprar Ahora
            </Button>

            {/* Modal de advertencia */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Advertencia</DialogTitle>
                <DialogContent>
                    <p>No puedes agregar más productos de los que tenemos en stock.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default ProductTotal;
