import { useEffect, useState, useContext } from "react";
import productsService from "../../services/productsService";
import { CartContext } from '../../context/CartContext';

const Product = () => {

  const [products, setProducts] = useState([]);
  
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    setProducts(productsService)
  }, []);

  const addToCart = (prod) => {
    console.log(prod.name)
    console.log(prod.price+" kr")
    console.log("Id: "+prod.id)
    const same = cart.filter(item => item === prod);
    Object.assign(prod, {
      qty: same.length + 1,
    });
    setCart([...cart, prod]);
    console.log(cart);
  }

  const productStyle = {
    border: "1px solid black",
    textAlign: 'center',
    marginBottom: "5px",
    width: "200px"
  }

  return (
    <>
      {products.map((prod, index) =>
        <div  key={index} style={productStyle}>
          <p>{prod.name}: {prod.price} kr</p>
          <button onClick={() => addToCart(prod)}>Add to cart</button>
        </div>
      )}
    </>
  );
}

export default Product;