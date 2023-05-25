import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header.jsx';
import Routes from '../../routes/Routers';
import Carts from '../Cart/Carts/Carts';
import './Layout.css';

const Layout = () => {
  const showCart = useSelector(state => state.cartUi.cartIsVisible);

  return (
    <div className="layout">
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
    </div>
  );
};

export default Layout;
