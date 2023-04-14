import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <div className="cartImg">
              <img src={product.image} alt="" />
            </div>
            <h5 className="cartTitle">{product.title}</h5>
            <h5 className="cartPrice">₹{product.price}</h5>
            <button
              className="cartBtn"
              onClick={() => handleRemove(product.id)}
            >
              <AiFillMinusCircle />
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
