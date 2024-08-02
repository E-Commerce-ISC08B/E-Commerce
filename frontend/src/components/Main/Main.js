import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../views";
<<<<<<< Updated upstream
import NavBar from "../NavBar/NavBar";

function Main() {
  const products = [
    {
      imageURL: "https://th.bing.com/th/id/R.15794eee4281b5e27b5de8e137db8f40?rik=bcauWVvOIITtQQ&pid=ImgRaw&r=0",
      name: "Producto 1",
      description: "Descripción del Producto 1",
    },
    {
      imageURL: "https://via.placeholder.com/150",
      name: "Producto 2",
      description: "Descripción del Producto 2",
    },
    {
      imageURL: "https://via.placeholder.com/150",
      name: "Producto 3",
      description: "Descripción del Producto 3",
    },
  ];
  return (
    <div>
        <NavBar />
        <Routes>
            <Route path="/" element={<Payment />} />
            <Route path="/home" element={<Home prods={products} />} />
            <Route path="/product" element={<Product />} />
        </Routes>
=======
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
        setProducts(data); // Actualiza el estado con los productos
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
>>>>>>> Stashed changes
    </div>
  );
}

export default Main;
