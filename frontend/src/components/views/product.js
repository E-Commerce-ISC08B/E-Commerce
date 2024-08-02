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
};

export default Product;
