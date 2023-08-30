import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import data from "../components/Data";
import { useDispatch, useSelector } from "react-redux";
import { reCalculate } from "../store";

const Cart = () => {

  const dispatch = useDispatch();

  let cart = JSON.parse(localStorage.getItem("cart"));

  const [subTotal, setSubTotal] = useState();

  let sum = 0;
  useEffect(() => {
    cart.forEach((element) => {
      sum += element.totalPrice;
    });
    setSubTotal(sum);
  });

  // 계산해야할 상태가 true라면 다시 계산
  let doCalculate = useSelector((state) => state.calculatePrice);

  if(doCalculate){ 
    cart.forEach((element) => {
      sum += element.totalPrice;
    });
    setSubTotal(sum);

    dispatch(reCalculate());
  }

  return (
    <div className="Cart">
      {cart.map((it) => (
        <CartItem cartProdcut={it} key={it.cartId} />
      ))}

      <div className="cart_total">
        <span>Subtotal </span>
        <span>
          ₩ {subTotal != undefined ? subTotal.toLocaleString() : subTotal}
        </span>
      </div>
    </div>
  );
};

export default Cart;
