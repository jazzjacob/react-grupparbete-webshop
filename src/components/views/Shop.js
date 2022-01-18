import { Link } from 'react-router-dom';
import ProductList from '../general/ProductList';

const Shop = () => {
  return (
    <main>
      <Link to="/checkout">To checkout</Link>
      <h1>Goa gubbar till salu</h1>
      <h2>Billigt billigt</h2>
      <ProductList />
    </main>
  );
}

export default Shop;