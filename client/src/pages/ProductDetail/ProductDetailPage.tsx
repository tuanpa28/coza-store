import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import IProduct from "../../interfaces/product";
import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";
import { getProduct } from "../../api/product";
import ProductDetailSub from "../../components/ProductList/ProductDetailSub/ProductDetailSub";
import { message } from "antd";
import { addProductToCart } from "../../features/cartSlice";
import { IAddToCart } from "../../interfaces/cart";
import { useAppDispatch } from "../../app/hook";
import Cookies from "js-cookie";

const ProductDetailPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [productId, setProductId] = useState("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getProduct(String(id));
        setProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  const handleShowProductDetail = (productId?: string) => {
    setProductId(String(productId));
    setIsClicked(!isClicked);
  };

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
                    {product?.album.map((item) => (
                      <li>
                        <img src={item.url} alt="" />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="img-detail">
                  <img src={product?.image.url} alt="" />
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
                      <div
                        onClick={() => setQuantity((pre) => pre - 1)}
                        className="erase"
                      >
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <input
                        type="text"
                        value={quantity}
                        onChange={(event) =>
                          setQuantity(Number(event.target.value))
                        }
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
        <span>Categories: {product?.categoryId?.name}</span>
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
            {product?.categoryId?.productId?.map((pro: IProduct) => (
              <div className="product">
                <div className="img-product">
                  <img src={pro.image.url} alt="" />
                  <button onClick={() => handleShowProductDetail(pro._id)}>
                    Quick View
                  </button>
                </div>
                <div className="title-list-product">
                  <div className="sup-title-list-product">
                    <Link to={`/products/${pro._id}`}>{pro.name}</Link>
                    <span>${pro.price}</span>
                  </div>
                  <div className="">
                    <a href="">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="button-right">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      {/* <!--  --> */}
      <ProductDetailSub
        products={product?.categoryId?.productId}
        productId={productId}
        isClicked={isClicked}
        handleShowProductDetail={handleShowProductDetail}
      />
    </>
  );
};

export default ProductDetailPage;
