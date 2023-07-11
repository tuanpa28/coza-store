import { message } from "antd";
import { IAddToCart } from "../../../interfaces/cart";
import IProduct from "../../../interfaces/product";
import { useAppDispatch } from "../../../app/hook";
import { addProductToCart } from "../../../features/cartSlice";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
interface IProductDetailSub {
  products?: IProduct[];
  productId?: string;
  isClicked: boolean;
  handleShowProductDetail: () => void;
}

const ProductDetailSub = ({
  isClicked,
  productId,
  products,
  handleShowProductDetail,
}: IProductDetailSub) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState<number>(1);
  const product = products?.find((product) => product._id === productId);

  const onHandleAddToCart = (dataCart: IAddToCart) => {
    if (!Cookies.get("accessToken")) {
      message.success("Mời bạn đăng nhập!");
      navigate("/signin");
    } else {
      dispatch(addProductToCart(dataCart));
      message.success("Sản phẩm đã được thêm vào giỏ hàng!");
    }
  };

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
              {product?.album.map((item, index) => (
                <li key={index}>
                  <img src={item?.url} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <div className="img-detail">
            <img src={product?.image?.url} alt="" />
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
        <div style={{ width: "100%" }} className="content-img-detail">
          <h4>{product?.name}</h4>
          <span>${product?.price}</span>
          <p>{product?.description}</p>
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
                <div
                  onClick={() => setQuantity((pre) => pre - 1)}
                  className="erase"
                >
                  <i className="fa-solid fa-minus"></i>
                </div>
                <input
                  type="text"
                  value={quantity}
                  onChange={(event) => setQuantity(Number(event.target.value))}
                />
                <div
                  onClick={() => setQuantity((pre) => pre + 1)}
                  className="more"
                >
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
              <button
                onClick={() =>
                  onHandleAddToCart({
                    productId: String(product?._id),
                    quantity,
                  })
                }
              >
                Add to cart
              </button>
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
