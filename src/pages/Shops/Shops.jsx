import React, { useState } from 'react';
import products from '../../assets/data/products';
import ProductCard from '../../components/Cart/ProductCard/ProductCard';
import './Shops.css';

const Shops = () => {
  // const searchedProduct = products;
  const burgerProduct = products.filter(item => item.category === 'Burger');
  const pizzaProduct = products.filter(item => item.category === 'Pizza');
  const breadProduct = products.filter(item => item.category === 'Bread');

  const [activeButton, setActiveButton] = useState('Button1');

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <div className="wrapperBlock">
      <div className="leftBlock">
        <h2>Shops:</h2>
        <ul>
          <li onClick={() => handleButtonClick('Button1')}>McDonalds</li>
          <li onClick={() => handleButtonClick('Button2')}>PizzaDay</li>
          <li onClick={() => handleButtonClick('Button3')}>BreadShop</li>
        </ul>
      </div>
      <div className="rightBlock">
        {activeButton === 'Button1' &&
          burgerProduct.map(item => (
            <ul className="wrapperBlock__list" key={item.id}>
              <ProductCard item={item} />
            </ul>
          ))}
        {activeButton === 'Button2' &&
          pizzaProduct.map(item => (
            <ul className="wrapperBlock__list" key={item.id}>
              <ProductCard item={item} />
            </ul>
          ))}
        {activeButton === 'Button3' &&
          breadProduct.map(item => (
            <ul className="wrapperBlock__list" key={item.id}>
              <ProductCard item={item} />
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Shops;
