import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const rawResponse = await fetch('https://fakestoreapi.com/products');
      const data = await rawResponse.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product)); 
  };
  return (
    <div className='productWrapper'>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='' />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className='btn'>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
