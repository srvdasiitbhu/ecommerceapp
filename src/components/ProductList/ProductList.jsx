import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./ProductList.css";

const ProductList = () => {
  return (
    <Card className="root" variant="outlined">
      <CardContent className="root">
        <Typography color="textSecondary" gutterBottom></Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(ProductList);
