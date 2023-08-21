const Detail = () => {
  return (
    <section className="Detail">
      <div className="detail_wrap">
        <div className="detail_left">
          <img src={process.env.PUBLIC_URL + "/imgs/necklace.webp"} />
        </div>

        <div className="detail_right">
          <div className="info_area">
            <span>SPACED LETTER NECKLACE</span>
            <span>₩ 399,000</span>
            <span>
              Undoubtedly our best selling style. Nothing spells luxe like
              something made just for you. This piece will grow with you, is
              always in style, on-trend, and age-appropriate. Customize your
              heart out and get it in the world's finest metals.
            </span>
          </div>

          <div className="opt_area">
            <div className="opt opt_gold"></div>
            <div className="opt opt_rose_gold"></div>
            <div className="opt opt_silver"></div>
          </div>

          <div className="order_area">
            <button>장바구니</button>
            <button>찜</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
