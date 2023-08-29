import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import data from "../components/Data";

const Cart = () => {

  // 로컬스토리지에서 cart 데이터 가져오기 
  let cart = JSON.parse(localStorage.getItem('cart'));

  const [subTotal, setSubTotal] = useState();

  let sum = 0;
  useEffect(()=>{ 
    cart.forEach(element => {
        sum += element.totalPrice;
    });
    setSubTotal(sum);
  },[cart])

  return (
    <div className="Cart">
        {cart.map((it)=> (
            <CartItem cartProdcut={it} key={it.cartId}/>
        ))}

        <div className="cart_total">
          <span>Subtotal </span>
          <span>₩ {subTotal.toLocaleString()}</span>
        </div>
    </div>
    
  );
};

export default Cart;
