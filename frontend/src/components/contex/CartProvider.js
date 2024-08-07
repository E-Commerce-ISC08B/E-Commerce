import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [] });

    const addToCart = (product) => {
        const existingProduct = cart.items.find(item => item.productID === product.productID);
        if (existingProduct) {
            // Si el producto ya existe, actualiza la cantidad
            const updatedItems = cart.items.map(item =>
                item.productID === product.productID
                    ? { ...item, quantity: item.quantity + product.quantity }
                    : item
            );
            setCart({ items: updatedItems });
        } else {
            // Si el producto no existe, añádelo al carrito
            setCart(prevCart => ({
                items: [...prevCart.items, product],
            }));
        }
    };

    const removeFromCart = (productId) => {
        // Filtrar el producto que se desea eliminar
        const updatedItems = cart.items.filter(item => item.productID !== productId);
        setCart({ items: updatedItems });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Hook para usar el contexto del carrito
export const useCart = () => {
    return useContext(CartContext);
};
