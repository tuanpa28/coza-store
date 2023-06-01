
interface IProductDetailSub {
  isClicked: boolean;
  handleShowProductDetail: () => void;
}

const ProductDetailSub = ({ isClicked, handleShowProductDetail }: IProductDetailSub) => {
  return (
    <div
      id="app"
      style={{ display: isClicked ? "block" : "none" }}
      className="sub_detail-product"
    >
      <div id="clear" onClick={() => handleShowProductDetail()}>
        <button>
          <img
            src="https://res.cloudinary.com/dugodumc5/image/upload/v1685294476/coza-store/rxgbixnfs0b1d7aysbu4.webp"
            alt=""
          />
        </button>
      </div>

      <div className="detail">
        <div className="all-img-detail">
          <div className="sup-img-detail">
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293341/coza-store/sn6sgoahfrs1fiywbzsi.webp"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293264/coza-store/avydaud8d4vnfxb1s5s1.webp"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293263/coza-store/bmoqn62vbcogzi5pyqbc.webp"
                  alt=""
                />
              </li>
            </ul>
          </div>
          <div className="img-detail">
            <img
              src="https://res.cloudinary.com/dugodumc5/image/upload/v1685294639/coza-store/gzxl3ycytfdbrjonzbhu.webp"
              alt=""
            />
            <a href="">
              <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
            </a>
            <div className="button-img-detail">
              <button>
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
        {/* <!--end all-img-detail--> */}
        <div className="content-img-detail">
          <h4>Lightweight Jacket</h4>
          <span>$58.79</span>
          <p>
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
            Mauris consequat ornare feugiat.
          </p>
          <div className="all-choose">
            <div className="choose">
              <h5>Size</h5>
              <select name="" id="">
                <option defaultValue="">Choose an option</option>
                <option defaultValue="">Size S</option>
                <option defaultValue="">Size M</option>
                <option defaultValue="">Size L</option>
                <option defaultValue="">Size XL</option>
              </select>
            </div>
            <div className="choose">
              <h5>Color</h5>
              <select name="" id="">
                <option defaultValue="">Choose an option</option>
                <option defaultValue="">Red</option>
                <option defaultValue="">Blue</option>
                <option defaultValue="">White</option>
                <option defaultValue="">Grey</option>
              </select>
            </div>
            <div className="all-more-erase">
              <div className="more-erase">
                <div className="erase">
                  <i className="fa-solid fa-minus"></i>
                </div>
                <input type="text" defaultValue="1" />
                <div className="more">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
          <div className="list-icon-choose">
            <div className="list-icon-choose-a-first-child">
              <a data-tooltip="Add to Wishlist" href="">
                <i className="fa-solid fa-heart"></i>
              </a>
            </div>
            <a data-tooltip="Facebook" href="">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a data-tooltip="Tiwtter" href="">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a data-tooltip="Google Plus" href="">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
    // end detail
  );
};

export default ProductDetailSub;
