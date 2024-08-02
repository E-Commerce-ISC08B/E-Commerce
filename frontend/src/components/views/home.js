import React from "react";
import { Grid } from '@mui/material';
import DescriptionProduct from "../DescriptionProduct/descriptionProduct";
import { useNavigate } from 'react-router-dom';

const Home = ({ prods }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navegar a la página del producto usando el ID en la URL
  };

  return (
    <Grid container spacing={2}>
      {prods.map((prod, index) => (
        prod && prod.img ? (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} onClick={() => handleProductClick(prod.productID)}>
            <DescriptionProduct
              imageURL={prod.img}
              name={prod.productName}
              description={prod.description}
            />
          </Grid>
        ) : (
          <Grid item xs={12} key={index}>
            Información del producto no disponible
          </Grid>
        )
      ))}
    </Grid>
  );
};

export default Home;
