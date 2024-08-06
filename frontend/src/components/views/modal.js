import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Typography, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

const CheckoutModal = ({ open, handleClose, total }) => {
  const shippingCost = (total * 0.05).toFixed(2); // 5% del total de productos
  const grandTotal = (parseFloat(total) + parseFloat(shippingCost)).toFixed(2); // Suma del total y el costo de envío

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">¿Cómo quieres pagar?</Typography>
            <FormControl component="fieldset">
              <RadioGroup name="paymentMethod">
                <FormControlLabel value="card" control={<Radio />} label="Tarjeta de crédito/débito" />
                <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                <FormControlLabel value="store" control={<Radio />} label="Pago en sucursal" />
                <FormControlLabel value="bankTransfer" control={<Radio />} label="Transferencia bancaria" />
              </RadioGroup>
            </FormControl>

            <Typography variant="h6" style={{ marginTop: 20 }}>Información del comprador</Typography>
            <TextField label="Nombre(s)" fullWidth margin="normal" />
            <TextField label="Apellido(s)" fullWidth margin="normal" />
            <TextField label="Número de teléfono" fullWidth margin="normal" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6">Dirección de entrega</Typography>
            <TextField label="País" fullWidth margin="normal" />
            <TextField label="Ciudad" fullWidth margin="normal" />
            <TextField label="Código postal" fullWidth margin="normal" />
            <TextField label="Dirección" fullWidth margin="normal" />

            <Typography variant="h6" style={{ marginTop: 20 }}>Resumen del pedido</Typography>
            <Typography>Producto: ${total}</Typography>
            <Typography>Envío: ${shippingCost}</Typography>
            <Typography>Total: ${grandTotal}</Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancelar</Button>
        <Button onClick={handleClose} color="primary">Pagar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckoutModal;
