import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
<<<<<<< Updated upstream
import Home from "../views";
=======
import Home from "../views/home";
>>>>>>> Stashed changes
import Product from "../views/product";
import ShoppingCart from "../views/cart";
import API from "../API/API";

function Main() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [selectedProductId, setSelectedProductId] = useState(null); // Estado para el ID del producto seleccionado

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await API.getProducts(); // Llama a la API
<<<<<<< Updated upstream
        setProducts(data); // Actualiza el estado con los productos
=======
        setProducts(data);
        console.log(products); // Actualiza el estado con los productos
>>>>>>> Stashed changes
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
      </Routes>
    </div>
  );
}

export default Main;
