import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = (props) =>  {
    const { isCart = true } = props;

    const { Cart, setCart, setCartVisible } = useContext(CartContext);

    const priceArray = cart.map((p) => p.price);

    const removeProduct = (id) => {
    setCart([...Cart].filter((product) => product.id !== id));
  };



  return (
    <>
      {isCart && (
        <div>
          <div>
            {cart.length <= 0 && (
              <p>There are no products in your cart...</p>
            )}
            {cart.length > 0 &&
              filteredCart.map((product) => (
                <div
                  key={product.id}>
                  <p>
                    {product.name} {product.qty} st <br />
                    {product.price * product.qty} kr
                  </p>
                  <button onClick={() => removeProduct(product.id)}>
                    Remove
                  </button>
                </div>
              ))}
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
          {Cart.length > 0 &&
            filteredcart.map((product) => (
              <div
                key={product.id}>
                <p>
                  {product.name} {product.qty} st <br />
                  {product.price * product.qty} kr
                </p>
                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </div>
            ))}
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