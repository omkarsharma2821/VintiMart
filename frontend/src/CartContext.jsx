import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartitems, setCartItems] = useState([]);
    const addItemToCart = (item) => {
        setCartItems([...cartitems, item])
    }
    const removeItemFromCart = (index) => {
        let temp = cartitems;
        temp.splice(index, 1)
        setCartItems([...temp])
    }
    return <CartContext.Provider value={{cartitems, setCartItems, addItemToCart, removeItemFromCart}}>
        
        {children}
        </CartContext.Provider>
};

const useCartContext = () => useContext(CartContext);
export default useCartContext;