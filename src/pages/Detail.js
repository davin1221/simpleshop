import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataStateContext } from "../App";

const Detail = () => {


  const {id} = useParams();

  const data = useContext(DataStateContext);

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
            <div className="opt_colors">
              { data[id].opts.map((it)=> (
                  <div className={`opt opt_${it}`}> </div>
              ))} 
            </div>

            <span>Quantity</span>
            <div className="opt_quantity">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>

            <div className="order_area">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
