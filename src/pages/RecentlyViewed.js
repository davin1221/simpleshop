import { useState } from "react";
import data from "../components/Data";
import { useNavigate } from "react-router-dom";

const RecentlyViewed = () => { 

    // localStorage에서 최근 본 상품 가져오기 
    let viewdData = JSON.parse(localStorage.getItem('RecentlyViewd'));
    
    // 상품 정보 가져오기 
    const [product] = useState(data);
    const viewedItems = product.filter((it)=> viewdData.includes(it.id));

    const navigate = useNavigate()

    return <div className="RecentlyViewd">
        <ul>
            {viewedItems.map((it)=> (
                <li className="viewedItem">
                <div>
                    <img src={it.img} onClick={()=>navigate(`/detail/${it.id}`)}/>
                </div>
                <div>
                    <h4>{it.title}</h4>
                    <span>₩ {it.price.toLocaleString()}</span>
                </div>
            </li>
            ))}
        </ul>
    </div>

}

export default RecentlyViewed;