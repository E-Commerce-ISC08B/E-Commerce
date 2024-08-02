import React from "react";
import { Grid } from '@mui/material';
import DescriptionProduct from "../DescriptionProduct/descriptionProduct";
<<<<<<< Updated upstream
import { Grid } from '@mui/material';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes

const Home = ({ prods }) => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Navegar a la página del producto usando el ID en la URL
  };

  return (
    <Grid container spacing={2}>
      {prods.map((prod, index) => (
<<<<<<< Updated upstream
        prod && prod.imageURL ? (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <DescriptionProduct
              imageURL={prod.imageURL}
              name={prod.name}
=======
        prod && prod.img ? (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} onClick={() => handleProductClick(prod.productID)}>
            <DescriptionProduct
              imageURL={prod.img}
              name={prod.productName}
>>>>>>> Stashed changes
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
