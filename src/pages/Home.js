import React from 'react';
import Product from '../component/Product';
const Home = () => {
  return (
    <div className='homeContainer'>
      <h3 className='homeTitle'>Welcome to Redux Store</h3>
      <section>
        <h3>Products</h3>
        <Product />
      </section>
    </div>
  );
};

export default Home;
