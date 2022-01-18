import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import useRemoveArrayDuplicates from "../../hooks/useRemoveArrayDuplicates.js";

const Cart = (props) =>  {
    const { isCart = true } = props;

    const { cart, setCart, setCartVisible } = useContext(CartContext);
    const filteredCart = useRemoveArrayDuplicates(cart);

    const priceArray = cart.map((p) => p.price);

    const removeProduct = (id) => {
    setCart([...cart].filter((prod) => prod.id !== id));
  };
const CartProdstyling ={
  border: "1px solid black",
    textAlign: 'center',
    marginBottom: "5px",
    width: "200px"
}
  return (
    <>
      {isCart && (
        <div>
          <div>
            {cart.length <= 0 && (
              <p>There are no products in your cart...</p>
            )}
            {cart.length > 0 &&
              filteredCart.map((prod) => (
                <div
                  key={prod.id}>
                  <p style={{border: "1px solid black",
                            textAlign: 'center',
                            marginBottom: "5px",
                            width: "200px"}}>
                    {prod.name} {prod.qty} st <br />
                    {prod.price * prod.qty} kr
                  <button  onClick={() => removeProduct(prod.id)}>
                    Remove
                  </button>
                  </p>
                </div>
              ))}
          </div>
          <p style={{ 
              textAlign: 'center',
              marginBottom: "5px",
              width: "200px" }}>
            Total price:{" "}
            {priceArray.length > 0
              ? priceArray.reduce((total, price) => total + price)
              : "0"}{" "}
            kr
          </p>
          
        </div>
      )}
      {!isCart && (
        <div>
          {cart.length <= 0 && <p>There are no products in your cart...</p>}
          {cart.length > 0 &&
            filteredCart.map((prod) => (
              <div
                key={prod.id}>
                <p>
                  {prod.name} {prod.qty} st <br />
                  {prod.price * prod.qty} kr
                </p>
                <button onClick={() => removeProduct(prod.id)}>
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