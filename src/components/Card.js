import { useNavigate } from "react-router-dom";

const Card = ({ data }) => { 

    const navigate = useNavigate();

    return <div className="Card" onClick={()=> navigate(`/detail/${data.id}`)}>
                <img src={data.img} width={"100%"}/>
                <h5>{data.title}</h5>
                <p>₩ {data.price.toLocaleString()}</p>
           </div>

}

export default Card;