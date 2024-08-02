import React from "react";
import DescriptionProduct from "../DescriptionProduct/descriptionProduct";
import { Grid } from '@mui/material';

const Home = ({ prods }) => {
  return (
    <Grid container spacing={2}>
      {prods.map((prod, index) => (
        prod && prod.imageURL ? (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <DescriptionProduct
              imageURL={prod.imageURL}
              name={prod.name}
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
