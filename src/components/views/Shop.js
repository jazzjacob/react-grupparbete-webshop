import { Link } from 'react-router-dom';
import ProductList from '../general/ProductList';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const Shop = () => {
  const { cart } = useContext(CartContext);
  
  return (
    <main>
      <Link to="/checkout">To checkout</Link>
      <p>Items in cart: {cart.length}</p>
      <h1>Goa gubbar till salu</h1>
      <h2>Billigt billigt</h2>
      <ProductList />
    </main>
  );
}

export default Shop;