import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const ProductName = ({ productName, productDescription, sellerUrl }) => {
  return (
    <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
      <Typography variant="h5" component="div" gutterBottom>
        {productName} - {productDescription}
      </Typography>
      <Button 
        variant="outlined" 
        onClick={() => window.location.href = sellerUrl}
      >
        Vendedor
      </Button>
    </Box>
  );
};

export default ProductName;
