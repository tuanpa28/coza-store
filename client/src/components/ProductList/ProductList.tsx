/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getProducts } from "../../api/product";
import IProduct from "../../interfaces/product";
import { Link } from "react-router-dom";
import ProductDetailSub from "./ProductDetailSub/ProductDetailSub";
import { useNavigate } from "react-router-dom";
import { getCategories, getCategory } from "../../api/category";
import ICategory from "../../interfaces/category";

interface IProductList {
  title?: string;
  className?: string;
}

const ProductList = ({ title, className }: IProductList) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isShowFilter, setIsShowFilter] = useState<boolean>(false);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");
  const [productId, setProductId] = useState("");
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const queryString = `${
    urlParams.toString() ? `?${urlParams.toString()}` : ""
  }`;

  const onHandleSearchByName = () => {
    urlParams.set("_searchText", encodeURIComponent(searchText));
    navigate(`?${urlParams}`);
  };

  const onHandleSortByPrice = (value: string) => {
    urlParams.set("_order", encodeURIComponent(value));
    navigate(`?${urlParams}`);
  };
  const onHandleFilterPrice = (minPrice: string, maxPrice: string) => {
    urlParams.set("_minPrice", encodeURIComponent(minPrice));
    urlParams.set("_maxPrice", encodeURIComponent(maxPrice));
    navigate(`?${urlParams}`);
  };
  const onHandleGetAll = () => {
    navigate(window.location.pathname);
  };

  const onHandleGetOneCategory = async (id: any) => {
    try {
      const { data } = await getCategory(id);
      setProducts(data.category.productId);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Products
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products },
        } = await getProducts(queryString);
        setProducts(products.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [queryString]);

  // Get Categories
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { categories },
        } = await getCategories();
        setCategories(categories.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleShowProductDetail = (productId?: any) => {
    setProductId(productId || "");
    setIsClicked(!isClicked);
  };

  const getAllProduct = async () => {
    try {
      const {
        data: { products },
      } = await getProducts();
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`pb-35 pt-6 ${className}`}>
        <div className="title-product">
          {title && (
            <div style={{ marginBottom: "16px" }} className="sup-title-product">
              <h2>{title}</h2>
            </div>
          )}

          <div className="list-title-product">
            <div className="sup-list-title-product">
              <button onClick={getAllProduct}>All Product</button>
              {categories.map((cate) => (
                <button
                  key={cate._id}
                  onClick={() => onHandleGetOneCategory(cate._id)}
                >
                  {cate.name}
                </button>
              ))}
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
                onClick={onHandleSearchByName}
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
                      onClick={onHandleGetAll}
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
                      onClick={onHandleGetAll}
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
              <div key={product._id} className="product">
                <div className="img-product">
                  <img src={product.image.url} alt="" />
                  <button onClick={() => handleShowProductDetail(product._id)}>
                    Quick View
                  </button>
                </div>
                <div className="title-list-product">
                  <div className="sup-title-list-product">
                    <Link to={`/products/${product._id}`}>{product.name}</Link>
                    <span>${product.price}</span>
                  </div>
                  <div className="">
                    <a href="">
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}

          {/* <!-- end product --> */}
        </div>
        {/* <!-- end list-product --> */}
        <div className="new-list-product">
          <a href="">Load More</a>
        </div>
      </div>
      <ProductDetailSub
        products={products}
        productId={productId}
        isClicked={isClicked}
        handleShowProductDetail={handleShowProductDetail}
      />
    </>
    //  end product overview
  );
};

export default ProductList;
