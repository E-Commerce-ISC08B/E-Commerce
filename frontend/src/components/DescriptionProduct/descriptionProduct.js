import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

export default function DescriptionProduct({ imageURL, name, description }) {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardMedia component="img" height="194" image={imageURL} alt="img" />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {name} {/* Muestra el nombre del producto */}
        </Typography>
        <Typography variant="body1" component="div">
          {description} {/* Muestra la descripción del producto */}
        </Typography>
      </CardContent>
    </Card>
  );
}

DescriptionProduct.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
