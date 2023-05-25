import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Shops from '../pages/Shops/Shops';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/Checkout/Checkout';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shops" />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Routers;
