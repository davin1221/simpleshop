const Card = ({ data }) => { 

    return <div className="col-md-4 col-sm-6 col-6 product_card">
                <img src={data.img} width={"100%"}/>
                <h6>{data.title}</h6>
                <p>₩ {data.price.toLocaleString()}</p>
           </div>

}

export default Card;