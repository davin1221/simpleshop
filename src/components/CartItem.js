import { useEffect, useState } from "react";
import data from "./Data";
import { useDispatch } from "react-redux";
import { reCalculate } from "../store";

const CartItem = ({ cartProdcut }) => { 

    const dispatch = useDispatch();

    // 장바구니 아이템 - 데이터 비교 후 필요 정보 가져오기 
    const [prodcut] = useState(data);
    const cartProductinfo = prodcut.find((it)=> it.id === cartProdcut.id);

    
    // 수량 
    const [quantity, setQuantity] = useState(cartProdcut.quantity);

    // 가격 
    const [totalPrice, setTotalPrice] = useState(cartProductinfo.price * quantity);

    // 색상 
    const [color, setColor] = useState(cartProdcut.color);


    // 각 옵션이 변경될 때 editCart
    useEffect(() => {
        editCart();
    }, [quantity, color, totalPrice]);

    // 장바구니 수정 
    const  editCart = () => { 
        // 로컬스토리지에서 cart데이터 가져오기 
        let localData = JSON.parse(localStorage.getItem('cart'));

        // 새로운 옵션
        const newOption = {...cartProdcut, color: color, quantity: quantity, totalPrice: totalPrice};


        // 수정할 카트 아이템이 빠진 새로운 배열 
        const newCartArr = localData.filter((it) => it.cartid !== cartProdcut.cartid);

        // 새로운 배열에 추가 
        newCartArr.push(newOption);

        // 새로운 배열 정렬 
        newCartArr.sort((a,b)=> a.cartid.localeCompare(b.cartid));

        console.log("new!" , newCartArr)

        // 로컬스토리지에 다시 세팅 
        localStorage.setItem('cart', JSON.stringify(newCartArr));

        // 총 합계 다시 계산 
        dispatch( reCalculate() );
    }

    const handleQuantity = (prop) => {
        if(quantity === 1 && prop === -1) { 
            return
        } 
        setQuantity((prevQuantity)=> prevQuantity + prop);
        setTotalPrice(cartProductinfo.price * (quantity + prop));
    }

    
    const handleColor = (color) => {
        setColor(color);
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