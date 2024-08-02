import React from 'react';
import ProductName from '../productName/productName';
import DescriptionProduct from '../DescriptionProduct/descriptionProduct';
import ProductTotal from '../productTotal/productTotal';
import ProductImages from '../ProductImages/ProductImages';
import { Box, Typography, Grid, Paper } from '@mui/material';

const images = [
  'https://th.bing.com/th/id/R.15794eee4281b5e27b5de8e137db8f40?rik=bcauWVvOIITtQQ&pid=ImgRaw&r=0',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
  'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
  'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
];

const Product = () => {
  const productName = "Mapache";
  const productDescriptionPequeña = "Descripción del Producto";
  const productDescription = "Descripción detallada del producto que explica sus características y beneficios.";
  const sellerUrl = "https://www.bioenciclopedia.com/mapache-205.html";

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
    console.log("Producto añadido al carrito");
  };

  const handleBuyNow = () => {
    // Lógica para comprar ahora
    console.log("Compra realizada");
  };

  return (
    <div>
      <Box sx={{ padding: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <ProductImages images={images} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ padding: 3 }}>
              <Box sx={{ width: '100%', marginBottom: 2 }}>
                <ProductName 
                  productName={productName} 
                  productDescription={productDescriptionPequeña} 
                  sellerUrl={sellerUrl} 
                />
              </Box>
              <Box sx={{ display: 'flex', width: '100%' }}>
                <Box sx={{ width: '66.67%', paddingRight: 2 }}>
                  <DescriptionProduct 
                    name={productName} 
                    description={productDescription} 
                  />
                </Box>
                <Box sx={{ width: '33.33%' }}>
                  <ProductTotal 
                    onAddToCart={handleAddToCart} 
                    onBuyNow={handleBuyNow} 
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Product;
