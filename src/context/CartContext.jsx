import { createContext, useState } from "react";

const CartContext = createContext();
export { CartContext };

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addCartProduct = (newProduct) => {
        setCart(prevCart => {
            const productExist = prevCart.find(product => product.id === newProduct.id);

            if (productExist) {
                return prevCart.map(product =>
                    product.id === newProduct.id
                        ? { ...product, quantity: product.quantity + newProduct.quantity }
                        : product
                );
            } else {
                return [...prevCart, { ...newProduct, quantity: newProduct.quantity || 1 }];
            }
        });
    };

    const clearCart = ()=>{
        setCart([]);
    };

    const deleteCartProduct = (id) => {
        setCart(prevCart => prevCart.filter(product => product.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addCartProduct, deleteCartProduct,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;