const Card = ({ data }) => { 

    return <div className="product_card">
                <img src={data.img} width={"100%"}/>
                <h6>{data.title}</h6>
                <p>₩ {data.price.toLocaleString()}</p>
           </div>

}

export default Card;