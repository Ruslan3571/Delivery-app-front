import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../../store/shopping-cart/cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  return (
    <section className="cartSection">
      <div className="cartWrapper">
        <div>
          {cartItems.length === 0 ? (
            <h5 className="cartWrapper__title">Your cart is empty</h5>
          ) : (
            <>
              <h5 className="cartWrapper__title">Summary of your order</h5>
              <table className="table table-borderless mb-5 align-middle">
                <tbody>
                  {cartItems.map(item => (
                    <Tr item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
        <div>
          <h6>
            Subtotal: $<span className="cart__subtotal">{totalAmount}</span>
          </h6>
          <p>Taxes and shipping will calculate at checkout</p>
          <div className="cart__page-btn">
            <button className="addTOCart__btn">
              <Link to="/shops">Continue Shopping</Link>
            </button>
            <button className="addTOCart__btn">
              <Link to="/checkout">Proceed to checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tr = props => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td>{title}</td>
      <td>${price}</td>
      <td>{quantity}px</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
