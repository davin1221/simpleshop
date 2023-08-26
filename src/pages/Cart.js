import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {

  // Redux Store 가져오는 hook 
  let cart = useSelector((state)=> {return state.cart})

    
  return (
    <div className="Cart">
        {cart.map((it)=> (
            <CartItem cartProdcut={it} key={it.cartId}/>
        ))}
    </div>
  );
};

export default Cart;
