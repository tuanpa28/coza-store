import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import IProduct from "../../interfaces/product";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";

interface IProductDetailPage {
  products: IProduct[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleClick?: any;
}

const ProductDetailPage = ({
  products,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClick = () => {},
}: IProductDetailPage) => {
  // const { id } = useParams();
  // const [product, setProduct] = useState<IProduct>();

  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    // const currentPro = products?.find((product) => product._id === id);
    // setProduct(currentPro);
  }, [products]);

  return (
    <>
      <HeaderTop className="shadow" />
      <div>
        <div className="product-detail">
          <div className="category-list">
            <a href="">
              Home<i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="">
              Men<i className="fa-solid fa-angle-right"></i>
            </a>
            <p>Lightweight Jacket</p>
          </div>
          {/* <!-- end category list --> */}
          <div className="pt-15">
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
                  Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus
                  ligula. Mauris consequat ornare feugiat.
                </p>
                <div className="all-choose">
                  <div className="choose">
                    <h5>Size</h5>
                    <select name="" id="">
                      <option value="">Choose an option</option>
                      <option value="">Size S</option>
                      <option value="">Size M</option>
                      <option value="">Size L</option>
                      <option value="">Size XL</option>
                    </select>
                  </div>
                  <div className="choose">
                    <h5>Color</h5>
                    <select name="" id="">
                      <option value="">Choose an option</option>
                      <option value="">Red</option>
                      <option value="">Blue</option>
                      <option value="">White</option>
                      <option value="">Grey</option>
                    </select>
                  </div>
                  <div className="all-more-erase">
                    <div className="more-erase">
                      <div className="erase">
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <input type="text" value="1" />
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
              {/* <!--  --> */}
            </div>
          </div>
          {/* <!-- end detail--> */}
        </div>
        {/* <!-- end product-detail  --> */}
        <div className="related-products mx-auto-300">
          <div>
            <ul>
              <li>
                <a href="">Description</a>
              </li>
              <li>
                <a href="">Additional information</a>
              </li>
              <li>
                <a href="">Reviews (1)</a>
              </li>
            </ul>
            <div className="content-related-product">
              <p>
                Aenean sit amet gravida nisi. Nam fermentum est felis, quis
                feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque
                luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi
                elementum sapien rhoncus pretium maximus. Nulla lectus enim,
                cursus et elementum sed, sodales vitae eros. Ut ex quam, porta
                consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac
                libero varius molestie. Aenean tempor sit amet orci nec iaculis.
                Cras sit amet nulla libero. Curabitur dignissim, nunc nec
                laoreet consequat, purus nunc porta lacus, vel efficitur tellus
                augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non
                tempor erat. Duis in egestas nunc.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- end Related products --> */}
      </div>
      {/* <!-- end  --> */}
      <div className="sku-cate">
        <span>SKU: JAK-01</span>
        <span>Categories: Jacket, Men</span>
      </div>
      {/* <!--  --> */}
      <div className="related">
        <div className="title-related">
          <h2>Related Products</h2>
        </div>
        <div className="next-product">
          <button className="button-left">
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <div className="mt-13 mb-4 list-product">
            <div className="product">
              <div className="img-product">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293264/coza-store/izpc8wlpywutwmlj6djf.webp"
                  alt=""
                />
                <button onClick={() => handleClick()}>Quick View</button>
              </div>
              <div className="title-list-product">
                <div className="sup-title-list-product">
                  <a href="./product-detail.html">Esprit Ruffle Shirt</a>
                  <span>$16.64</span>
                </div>
                <div className="">
                  <a href="">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end product --> */}
            <div className="product">
              <div className="img-product">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293263/coza-store/pp13euvwt5vvtqhyc64s.webp"
                  alt=""
                />
                <button onClick={() => handleClick()}>Quick View</button>
              </div>
              <div className="title-list-product">
                <div className="sup-title-list-product">
                  <a href="./product-detail.html">Herschel supply</a>
                  <span>$35.31</span>
                </div>
                <div className="">
                  <a href="">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end product --> */}
            <div className="product">
              <div className="img-product">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293263/coza-store/bmoqn62vbcogzi5pyqbc.webp"
                  alt=""
                />
                <button onClick={() => handleClick()}>Quick View</button>
              </div>
              <div className="title-list-product">
                <div className="sup-title-list-product">
                  <a href="./product-detail.html">Only Check Trouser</a>
                  <span>$25.50</span>
                </div>
                <div className="">
                  <a href="">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end product --> */}
            <div className="product">
              <div className="img-product">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293264/coza-store/avydaud8d4vnfxb1s5s1.webp"
                  alt=""
                />
                <button onClick={() => handleClick()}>Quick View</button>
              </div>
              <div className="title-list-product">
                <div className="sup-title-list-product">
                  <a href="./product-detail.html">Classic Trench Coat</a>
                  <span>$75.00</span>
                </div>
                <div className="">
                  <a href="">
                    <i className="fa-regular fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- end product --> */}
          </div>
          <button className="button-right">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      {/* <!--  --> */}
    </>
  );
};

export default ProductDetailPage;
