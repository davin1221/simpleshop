const RecentlyViewed = () => { 

    return <div className="RecentlyViewd">
        <ul>
            <li className="viewedItem">
                <div>
                    <img src={process.env.PUBLIC_URL + "/imgs/necklace.webp"}/>
                </div>
                <div>
                    <h4>SPACED LETTER NECKLACE</h4>
                    <span>₩ 399,000</span>
                </div>
            </li>
            <li className="viewedItem">
                <div>
                    <img src={process.env.PUBLIC_URL + "/imgs/necklace.webp"}/>
                </div>
                <div>
                    <h4>SPACED LETTER NECKLACE</h4>
                    <span>₩ 399,000</span>
                </div>
            </li>
            <li className="viewedItem">
                <div>
                    <img src={process.env.PUBLIC_URL + "/imgs/necklace.webp"}/>
                </div>
                <div>
                    <h4>SPACED LETTER NECKLACE</h4>
                    <span>₩ 399,000</span>
                </div>
            </li>
        </ul>
    </div>

}

export default RecentlyViewed;