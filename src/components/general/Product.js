import { useEffect, useState } from "react";
import productsService from "../../services/productsService"

const Product = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsService)
  }, []);

  const addToCart = (prod) => {
    console.log(prod.name)
    console.log(prod.price+" kr")
    console.log("Id: "+prod.id)
  }

  const productStyle = {
    border: "1px solid black",
    marginBottom: "5px",
    width: "200px"
  }

  return (
    <>
      <p>This is a product</p>
      {products.map((prod, index) =>
        <div key={index} style={productStyle}>
          <p>{prod.name}: {prod.price} kr</p>
          <button onClick={() => addToCart(prod)}>Add to cart</button>
        </div>
      )}
    </>
  );
}

export default Product;