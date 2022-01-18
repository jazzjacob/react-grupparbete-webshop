import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = (props) =>  {
    const { isCart = true } = props;

    const { Cart, setCart, setCartVisible } = useContext(CartContext);

    const priceArray = cart.map((p) => p.price);

    const removeProduct = (id) => {
    setCart([...cart].filter((product) => product.id !== id));
  };



    return(
        <>
            <h1>I'm a Cart</h1>
        </>
    );
};

export default Cart;