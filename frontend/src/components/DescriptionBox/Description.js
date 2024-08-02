import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function DescriptionBox({ name, description }) {
  return (
    <Card sx={{ width: '100%', maxWidth: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Acerca del producto
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

DescriptionBox.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};
