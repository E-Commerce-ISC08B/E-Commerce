<<<<<<< Updated upstream
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
=======
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams
import ProductName from '../productName/productName';
import DescriptionBox from '../DescriptionBox/Description'
import ProductTotal from '../productTotal/productTotal';
import ProductImages from '../ProductImages/ProductImages';
import { Box, Paper, Typography, Grid } from '@mui/material';
import API from '../API/API';
import { Description } from '@mui/icons-material';

const Product = () => {
    const { productId } = useParams(); // Extraer productId de la URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await API.getProductById(productId);
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <Typography variant="h6">Producto no encontrado</Typography>;
    }

    const images = product.img ? [product.img, product.img, product.img] : [];

    const handleAddToCart = () => {
        console.log("Producto añadido al carrito");
    };

    const handleBuyNow = () => {
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
                                productName={product.productName}
                                productDescription={product.description}
                                sellerUrl={'https://bely-y-beto-wiki.fandom.com/es/wiki/Beto'}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <Box sx={{ width: '66.67%', paddingRight: 2 }}>
                                <DescriptionBox
                                    name={product.productName}
                                    description={product.description}
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
>>>>>>> Stashed changes
};

export default Product;
