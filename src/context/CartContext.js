import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  console.log(cart);

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, cartVisible, setCartVisible }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
