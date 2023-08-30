
import { useNavigate } from "react-router-dom";


const Card = ({ data }) => { 

  const navigate = useNavigate();


  const clickedProduct = (id) => {
    navigate(`/detail/${id}`)
    
    // 중복을 제거할 Set 자료형
    const viewedSet = new Set();
    
    // localStorage에서 데이터 가져와 배열에 복호하여 저장 
    let localData = JSON.parse(localStorage.getItem('RecentlyViewd'));

    // 클릭한 id 추가 
    localData.push(id);

    // 해당 배열을 Set으로 변환하여 중복 확인
    localData = new Set(localData);

    // Set을 다시 배열로 변환 
    localData =  Array.from(localData);

    // LocalStorage에 저장 
    localStorage.setItem('RecentlyViewd', JSON.stringify(localData))
  }



    return <div className="Card" 
                onClick={()=> clickedProduct(data.id)}>
                <img src={data.img} width={"100%"}/>
                <h5>{data.title}</h5>
                <p>₩ {data.price.toLocaleString()}</p>
           </div>

}

export default Card;