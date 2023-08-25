import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { changeName, changeAge } from "../store/userSlice";

const Cart = () => {

  // Redux Store 가져오는 hook 
  let cart = useSelector((state)=> {return state.cart})
  let user = useSelector((state)=> {return state.user})
  
  // store.js로 요청을 보내는 함수 
  // dispatch(state변경함수())
  let dispatch = useDispatch();

    
  return (
    <div className="Cart">
        <div style={{textAlign:"start"}}>
            <div>이름: {user.name}</div>
            <div>나이: {user.age}</div>
            <button onClick={()=>{ dispatch(changeName()) }} style={{margin: 5}}>
                이름 변경
            </button>
            <button onClick={()=>{ dispatch(changeAge(7)) }}>
                age 변경
            </button>
        </div>


        {cart.map((it)=> (
            <CartItem cartProdcut={it} key={it.cartId}/>
        ))}
    </div>
  );
};

export default Cart;
