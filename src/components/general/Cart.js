import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = (props) =>  {
    const { isCart = true } = props;

    const { cart, setCart, setCartVisible } = useContext(CartContext);

    const priceArray = cart.map((p) => p.price);

    const removeProduct = (id) => {
    setCart([...cart].filter((product) => product.id !== id));
  };



  return (
    <>
      {isCart && (
        <div>
          <div>
            {Cart.length <= 0 && (
              <p>There are no products in your cart...</p>
            )}
          </div>
          <p>
            Total price:{" "}
            {priceArray.length > 0
              ? priceArray.reduce((total, price) => total + price)
              : "0"}{" "}
            kr
          </p>
          <button onClick={() => setCartVisible(false)}>Hide cart</button>
        </div>
      )}
      {!isCart && (
        <div>
          {Cart.length <= 0 && <p>There are no products in your cart...</p>}
          <p>
            Total price:{" "}
            {priceArray.length > 0
              ? priceArray.reduce((total, price) => total + price)
              : "0"}{" "}
            kr
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;