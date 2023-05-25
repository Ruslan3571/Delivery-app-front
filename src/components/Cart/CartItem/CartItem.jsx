import React from 'react';

import './CartItem.css';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({ item, onClose }) => {
  const { id, title, price, image01, quantity } = item;

  const dispatch = useDispatch();
  const incrementItem = event => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
    event.stopPropagation();
  };

  const decreaseItem = event => {
    dispatch(cartActions.removeItem(id));
    event.stopPropagation();
  };

  const deleteItem = event => {
    dispatch(cartActions.deleteItem(id));
    event.stopPropagation();
  };

  const handlePizzaSelection = () => {
    onClose();
  };

  return (
    <div className="cart__item" onClick={handlePizzaSelection}>
      <div className="cart__item-info">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className="cart__product-price">
              {quantity}x <span>${price}</span>
            </p>

            <div className="increase__decrease-btn">
              <span
                className="increase__btn"
                onClick={event => incrementItem(event)}
              >
                <i className="ri-add-line"></i>
              </span>
              <span>{quantity}</span>
              <span
                className="decrease__btn"
                onClick={event => decreaseItem(event)}
              >
                <i className="ri-subtract-line"></i>
              </span>
            </div>
          </div>

          <span className="delete__btn" onClick={event => deleteItem(event)}>
            <i className="ri-close-line"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
