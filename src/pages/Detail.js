const Detail = () => { 
    return (
    <section className="Detail">

        <div className="detail_wrap">
        <div className="img_area">
            <img src= {process.env.PUBLIC_URL + "/imgs/necklace.webp"}/>
        </div>

        <div className="info_area">
            <span>SPACED LETTER NECKLACE</span>
            <span>₩ 399000</span>
            <span>
                Undoubtedly our best selling style.<br/> 
                Nothing spells luxe like something made just for you. <br />
                This piece will grow with you, is always in style, on-trend, and age-appropriate. <br />
                Customize your heart out and get it in the world's finest metals.</span>
        </div>

        </div>

       
    </section>
    )
}

export default Detail;