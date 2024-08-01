import * as React from 'react';
import PropTypes from 'prop-types';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
/*
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
*/
export default function DescriptionProduct({imageURL, name, description}) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 300 }}>
      <CardMedia 
        component="img"
        height="194"
        image={imageURL}
        alt="img"
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div">
          {description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

DescriptionProduct.propTypes = {
  imageURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}