import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { DataStateContext } from "../App";

const Detail = () => {


  const {id} = useParams();

  const data = useContext(DataStateContext);

  const [colorName, setColorName ] = useState();
  const [selectedColor, setSelectedColor ] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const showColorName = (it) => { 
    setColorName(it.replace(/_/g, ' '));
  }

  const selectColor = (it) => { 
    setSelectedColor(it);
  }

  const selectQuantity = (quantity) => { 
    if(selectedQuantity === 1 && quantity === -1) { 
        return
    }
    setSelectedQuantity(selectedQuantity + quantity);
  }

  let cartId = 0;

  const handleAddCart = (id) => { 
    if(selectedColor === undefined) {
        alert("색상을 선택해주세요.");
        return
    }
    
    let options = { cartid: 'cart' + cartId, id: id, color: selectedColor, quantity: selectedQuantity, totalPrice : selectedQuantity * data[id].price };
    
    console.log("options: ", options )

    // 로컬스토리지에서 cart 데이터 가져오기 
    let localCartData = JSON.parse(localStorage.getItem('cart'));

    // 옵션 추가 
    localCartData.push(options);

    // 로컬스토리지에 다시 추가 
    localStorage.setItem('cart', JSON.stringify(localCartData));

    cartId += 1;
  }

  return (
    <section className="Detail">
      <div className="detail_wrap">
        <div className="detail_img">
          <img src={process.env.PUBLIC_URL + `${data[id].img}`} />
        </div>

        <div className="detail_info">
          <div className="info_area">
            <span>{ data[id].title }</span>
            <span>₩ { data[id].price.toLocaleString() }</span>
            <span>
                { data[id].content }
            </span>
          </div>

          <div className="opt_area">
            <span>Color</span>
            <div className="opt_color_wrap">
                <div className="opt_colors">
                { data[id].opts.map((it)=> (
                    <div className={`opt opt_${it} ${selectedColor === it ? 'selected' : ''}`}
                         onMouseEnter={()=> showColorName(it)}
                         onClick={()=> selectColor(it)}></div>
                ))} 
                </div>
                <span className="opt_color_name">{colorName}</span>
            </div>
            
            <span>Quantity</span>
            <div className="opt_quantity">
              <button onClick={()=>selectQuantity(-1)}>-</button>
              <span>{selectedQuantity}</span>
              <button onClick={()=>selectQuantity(1)}>+</button>
            </div>

            <div className="order_area">
              <button onClick={()=> handleAddCart(data[id].id)}>Add to Cart</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Detail;
