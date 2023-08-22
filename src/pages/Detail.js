const Detail = () => {
  return (
    <section className="Detail">
      <div className="detail_wrap">
        <div className="detail_img">
          <img src={process.env.PUBLIC_URL + "/imgs/necklace.webp"} />
        </div>

        <div className="detail_info">
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
            <span>Colors</span>
            <div className="opt_colors">
              <div className="opt opt_gold"></div>
              <div className="opt opt_rose_gold"></div>
              <div className="opt opt_silver"></div>
            </div>

            <span>Quantity</span>
            <div className="opt_quantity">
              <button>+</button>
              <span>0</span>
              <button>-</button>
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
