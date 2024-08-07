import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductName from '../productName/productName';
import DescriptionBox from '../DescriptionBox/Description';
import ProductTotal from '../productTotal/productTotal';
import ProductImages from '../ProductImages/ProductImages';
import { Box, Paper, Typography, Grid } from '@mui/material';
import API from '../API/API';
import { useCart } from '../contex/CartProvider';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1); // Agrega el estado para la cantidad

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

    const handleAddToCart = (quantity) => {
        const productWithQuantity = {
            ...product,
            quantity,
        };

        console.log("Producto añadido al carrito con cantidad:", quantity);
        addToCart(productWithQuantity);
        console.log("Producto añadido al carrito");
    };

    const handleBuyNow = () => {
        navigate('/cart');
        console.log("Compra realizada");
        handleAddToCart(quantity); // Asegúrate de pasar la cantida
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
                                    sellerUrl={'https://neekcotton.com/'}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', width: '100%' }}>
                                <Box sx={{ width: '66.67%', paddingRight: 2 }}>
                                    <DescriptionBox
                                        description={product.description}
                                        stock={product.productQTY}
                                        price={product.productPrice}
                                    />
                                </Box>
                                <Box sx={{ width: '33.33%' }}>
                                    <ProductTotal
                                        onAddToCart={handleAddToCart}
                                        onBuyNow={handleBuyNow}
                                        setQuantity={setQuantity} // Agrega esto para actualizar la cantidad
                                        stock={product.productQTY}
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
