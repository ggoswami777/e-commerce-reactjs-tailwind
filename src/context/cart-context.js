import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    wishlist: [],
  };
  const [{ cart, wishlist }, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, cartDispatch, wishlist }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);
export { CartProvider, useCart };
