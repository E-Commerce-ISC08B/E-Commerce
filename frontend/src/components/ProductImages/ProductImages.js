import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

const ProductImages = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={10} md={8}>
          <Paper elevation={3}>
            <img
              src={images[0]}
              alt="Producto principal"
              style={{ width: '100%', height: 'auto', maxWidth: '400px' }} // Establecer ancho máximo
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            {images.slice(1).map((image, index) => (
              <Grid item xs={12} key={index}>
                <Paper elevation={1}>
                  <img
                    src={image}
                    alt={`Producto ${index + 1}`}
                    style={{ width: '100%', height: 'auto', maxWidth: '150px' }} // Establecer ancho máximo
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductImages;
