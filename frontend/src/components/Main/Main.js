import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../views";
import Product from "../views/product";
import Login from "../login/Login";
import ShoppingCart from "../views/cart";
import API from "../API/API";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#cfbaac',
      contrastText: '#0d0601', // Color del texto
    },
    secondary: {
      main: '#76564f',
    },
  },
});

function Main() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [selectedProductId, setSelectedProductId] = useState(null); // Estado para el ID del producto seleccionado

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await API.getProducts(); // Llama a la API
        setProducts(data); // Actualiza el estado con los productos
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Cambia el estado de carga
      }
    };

    fetchProducts(); // Llama a la función fetchProducts
  }, []); // Se ejecuta una vez cuando el componente se monta

  if (loading) {
    return <div>Loading...</div>; // Mensaje de carga mientras se obtienen los productos
  }

  return (
    <div>

      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
        <Route 
            path="/" 
            element={<Home prods={products} setSelectedProductId={setSelectedProductId} />} 
          />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route 
            path="/home" 
            element={<Home prods={products} setSelectedProductId={setSelectedProductId} />} 
          />
          <Route 
            path="/product/:productId" 
            element={<Product productId={selectedProductId} />} 
          />
          <Route 
          path="/login" 
          element={<Login />} 
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default Main;