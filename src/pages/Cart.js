import CartItem from "../components/CartItem";
import { useState } from "react";
import data from "../components/Data";

const Cart = () => {

  // 로컬스토리지에서 cart 데이터 가져오기 
  let cart = JSON.parse(localStorage.getItem('cart'));
  const [prodcut] = useState(data);

  const filteredItem = prodcut.filter((it)=> prodcut.some((it2)=> it2.id === it.id));
  console.log(filteredItem);

  return (
    <div className="Cart">
        {cart.map((it)=> (
            <CartItem cartProdcut={it} key={it.cartId}/>
        ))}

        <div className="cart_total">
          <span>Subtotal </span>
          <span>₩ 10,000,000</span>
        </div>
    </div>
    
  );
};

export default Cart;
