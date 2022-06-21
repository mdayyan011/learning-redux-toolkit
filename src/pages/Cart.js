import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className='cartContainer'>
      <h3 className='cartHeading'>Cart</h3>
      {products.map((product) => (
        <div className='card' key={product.id}>
          <img src={product.image} alt='' />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleRemove(product.id)} className='btn-red'>
            Remove From Cart
          </button>
        </div>
      ))}
      {/* {console.log(products)} */}
    </div>
  );
};

export default Cart;
