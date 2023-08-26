import { useState } from "react";
import data from "./Data";

const CartItem = ({ cartProdcut }) => { 

    const [prodcut] = useState(data);
    const cartProductinfo = prodcut.find((it)=> it.id === cartProdcut.id);

    const handleQuantity = (props) => {
        console.log("clicked: ", props )
    }



    return <div className="CartItem">
        <div className="cart_img">
            <img src={cartProductinfo.img}/>
        </div>
        <div className="cart_info">
            <h4>{cartProdcut.name}</h4>
            <span className="cart_info_opts">
                {cartProductinfo.opts.map((it)=> (
                    <div className={`${it}`}></div>
                ))}
            </span>
            <span className="cart_info_quantity">
                <button onClick={()=>handleQuantity(-1)}>-</button>
                <span>{cartProdcut.quantity}</span>
                <button onClick={()=>handleQuantity(1)}>+</button>
            </span>
            <span className="cart_info_price">
                ₩ {(cartProductinfo.price * cartProdcut.quantity).toLocaleString()}
            </span>
        </div>

    </div>
}

export default CartItem;