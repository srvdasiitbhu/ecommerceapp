import React from "react";
import AppBar from "./components/AppBar/AppBar";
import LeftNav from "./components/LeftNav/LeftNav";
import { Grid, Paper } from "@material-ui/core";
import ProductList from "./components/ProductList/ProductList";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Grid container spacing={4} className="container">
        <Grid item md={4} className="column">
          <LeftNav />
        </Grid>
        <Grid item md={8} className="content">
          <ProductList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
