import { useState } from "react";
import data from "./Data";
import { addCart } from "../store";
import { useDispatch } from "react-redux";

const CartItem = ({ cartProdcut }) => { 

    // 장바구니 아이템 - 데이터 비교 후 필요 정보 가져오기 
    const [prodcut] = useState(data);
    const cartProductinfo = prodcut.find((it)=> it.id === cartProdcut.id);

    
    // 수량 
    const [quantity, setQuantity] = useState(cartProdcut.quantity);

    // 가격 
    const [totalPrice, setTotalPrice] = useState(cartProductinfo.price * quantity);

    const dispath = useDispatch();

    const handleQuantity = (prop) => {
        if(quantity === 1 && prop === -1) { 
            return
        } 

        const newQuantity = quantity+ prop;
        const newTotal = cartProductinfo.price * newQuantity;
        setQuantity(newQuantity);
        setTotalPrice(newTotal);

        editCart();
    }

    // 색상 
    const [color, setColor] = useState(cartProdcut.color);
    const handleColor = (color) => {
        setColor(color);
    }


    // 장바구니 수정 
    const  editCart = () => { 

        
    }



    return <div className="CartItem">
        <div className="cart_img">
            <img src={cartProductinfo.img}/>
        </div>

        <div className="cart_info">
            
            <div className="cart_info_top">
                <h4>{cartProductinfo.title}</h4>
                <span>&times;</span>
            </div>
            
            <span className="cart_info_opts">
                {cartProductinfo.opts.map((it)=> (
                    <div className={`${it} ${color === it ? 'selected' : ''}`}
                         onClick={()=> handleColor(it)}></div>
                ))}
            </span>
            <span className="cart_info_quantity">
                <button onClick={()=>handleQuantity(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={()=>handleQuantity(1)}>+</button>
            </span>
            <span className="cart_info_price">
                ₩ {totalPrice.toLocaleString()}
            </span>
        </div>
    </div>
}

export default CartItem;