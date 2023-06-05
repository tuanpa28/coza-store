import { useEffect, useState } from "react";
import { getProducts } from "../../api/product";
import IProduct from "../../interfaces/product";
import { Link } from "react-router-dom";
import ProductDetailSub from "./ProductDetailSub/ProductDetailSub";

interface IProductList {
  title?: string;
  className?: string;
}

const ProductList = ({ title, className }: IProductList) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");

  const searchParams = new URLSearchParams(window.location.search);

  const onHandleSearchByName = (value: string) => {
    searchParams.set("_searchText", value);
    window.location.href = `${window.location.origin}?${searchParams}`;
  };

  const onHandleSortByPrice = (value: string) => {
    searchParams.set("_order", value);
    window.location.href = `${window.location.origin}?${searchParams}`;
  };
  const onHandleFilterPrice = (minPrice: string, maxPrice: string) => {
    searchParams.set("_minPrice", minPrice);
    searchParams.set("_maxPrice", maxPrice);
    window.location.href = `${window.location.origin}?${searchParams}`;
  };
  const onHandleGetAll = () => {
    window.location.href = `${window.location.origin}`;
  };

  // Get Products
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await getProducts(window.location.search);
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleShowProductDetail = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className={`pb-35 pt-6 ${className}`}>
        <div className="title-product">
          {title && (
            <div className="sup-title-product">
              <h2>{title}</h2>
            </div>
          )}

          <div className="list-title-product">
            <div className="sup-list-title-product">
              <button>All Product</button>
              <button>Women</button>
              <button>Men</button>
              <button>Bag</button>
              <button>Shoes</button>
              <button>Watches</button>
            </div>
            <div className="icon-list-title-product">
              <div>
                <button onClick={() => setIsShowFilter(!isShowFilter)}>
                  <i className="fa-solid fa-filter"></i>Filter
                </button>
              </div>
              <div>
                <button onClick={() => setIsShowSearch(!isShowSearch)}>
                  <i className="fa-solid fa-magnifying-glass"></i>Search
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-full pb-[15px] pt-[10px] duration-300 ${
              !isShowSearch && "hidden"
            }`}
          >
            <div className="rounded-sm flex pl-[15px] border-solid border-[#e6e6e6] border">
              <button
                onClick={() => onHandleSearchByName(searchText)}
                className="w-[38px] h-[60px] text-[#333]"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <input
                type="text"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                className=" h-[60px] text-[#333] text-base pr-[15px]"
                placeholder="Search"
              />
            </div>
          </div>
          {/* filter */}
          <div className={`mt-10 ${!isShowFilter && "hidden"}`}>
            <div className="bg-[#f2f2f2] flex-wrap flex w-full pr-[40px] pl-[40px] pt-[27px]">
              <div className="w-[27%] pr-[15px] pb-[27px]">
                <div className="text-[#333] text-base pb-[15px]">Sort By</div>
                <ul>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleGetAll()}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      Default
                    </a>
                  </li>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleSortByPrice("asc")}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      Price: Low to High
                    </a>
                  </li>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleSortByPrice("desc")}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      Price: High to Low
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-[27%] pr-[15px] pb-[27px]">
                <div className="text-[#333] text-base pb-[15px]">Price</div>
                <ul>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleGetAll()}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      All
                    </a>
                  </li>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleFilterPrice("0", "200")}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      0 - 200
                    </a>
                  </li>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleFilterPrice("200", "400")}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      200 - 400
                    </a>
                  </li>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleFilterPrice("400", "600")}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      400 - 600
                    </a>
                  </li>
                  <li className="pb-[6px]">
                    <a
                      onClick={() => onHandleFilterPrice("600", "800")}
                      className="text-[#aaa] text-sm border-b border-solid border-transparent cursor-pointer"
                    >
                      600 - 800
                    </a>
                  </li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        {/* <!-- end title-product --> */}
        <div className="list-product">
          {products?.map(
            (product): JSX.Element => (
              <>
                <div className="product">
                  <div className="img-product">
                    <img src={product.image.url} alt="" />
                    <button onClick={() => handleShowProductDetail()}>
                      Quick View
                    </button>
                  </div>
                  <div className="title-list-product">
                    <div className="sup-title-list-product">
                      <Link to={`/products/${product._id}`}>
                        {product.name}
                      </Link>
                      <span>${product.price}</span>
                    </div>
                    <div className="">
                      <a href="">
                        <i className="fa-regular fa-heart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )
          )}

          <div className="product">
            <div className="img-product">
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293264/coza-store/izpc8wlpywutwmlj6djf.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
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
          {/*  <!-- end product --> */}
          <div className="product">
            <div className="img-product">
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293263/coza-store/pp13euvwt5vvtqhyc64s.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
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
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
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
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">classNameic Trench Coat</a>
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
          <div className="product">
            <div className="img-product">
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293341/coza-store/vhqix2gutvoytz0am4eu.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Front Pocket Jumper</a>
                <span>$34.75</span>
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
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293341/coza-store/fs4bhvjgqkophg6inowz.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Vintage Inspired classNameic</a>
                <span>$93.20</span>
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
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293341/coza-store/ektcynjefcd71pcqonc0.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Shirt in Stretch Cotton</a>
                <span>$52.66</span>
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
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293341/coza-store/sn6sgoahfrs1fiywbzsi.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Pieces Metallic Printed</a>
                <span>$18.96</span>
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
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293468/coza-store/cfiulaok9ps5sa6zkmvy.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">
                  Converse All Star Hi Plimsolls
                </a>
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
          <div className="product">
            <div className="img-product">
              <img
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293468/coza-store/zgwbo8zfshgmekwdz3z5.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Femme T-Shirt In Stripe</a>
                <span>$25.85</span>
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
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293468/coza-store/atvmbxnjan7sidldjpn3.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Herschel supply</a>
                <span>$63.16</span>
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
                src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293468/coza-store/uwrceciy8yjy16acrt4o.webp"
                alt=""
              />
              <button onClick={() => handleShowProductDetail()}>
                Quick View
              </button>
            </div>
            <div className="title-list-product">
              <div className="sup-title-list-product">
                <a href="./product-detail.html">Herschel supply</a>
                <span>$63.15</span>
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
        {/* <!-- end list-product --> */}
        <div className="new-list-product">
          <a href="">Load More</a>
        </div>
      </div>
      <ProductDetailSub
        isClicked={isClicked}
        handleShowProductDetail={handleShowProductDetail}
      />
    </>
    //  end product overview
  );
};

export default ProductList;
