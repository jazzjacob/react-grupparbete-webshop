import Product from './Product';

const ProductList = () => {
  const productListStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
  
  return (
    <div style={productListStyle}>
      <Product />
    </div>
  );
}

export default ProductList;