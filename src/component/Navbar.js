import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div style={{ display: 'flex', alignItems: 'space-between' }}>
      <span className='logo'>Redux Store</span>
      <Link className='navLink' to='/'>
        Home
      </Link>
      <Link className='navLink' to='/cart'>
        Cart
      </Link>
      <span style={{ fontWeight: '600' }} className='cartItem'>
        CART ITEMS: {items.length}
      </span>
    </div>
  );
};

export default Navbar;
