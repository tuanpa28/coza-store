
interface IProductList {
  title?: string;
  handleClick?: () => void;
  className?: string;
}

const ProductList = ({
  title,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleClick = () => {},
  className,
}: IProductList) => {
  return (
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
              <button>
                <i className="fa-solid fa-filter"></i>Filter
              </button>
            </div>
            <div>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end title-product --> */}
      <div className="list-product">
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
        {/*  <!-- end product --> */}
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
            <button onClick={() => handleClick()}>Quick View</button>
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
            <button onClick={() => handleClick()}>Quick View</button>
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
            <button onClick={() => handleClick()}>Quick View</button>
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
            <button onClick={() => handleClick()}>Quick View</button>
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
            <button onClick={() => handleClick()}>Quick View</button>
          </div>
          <div className="title-list-product">
            <div className="sup-title-list-product">
              <a href="./product-detail.html">Converse All Star Hi Plimsolls</a>
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
            <button onClick={() => handleClick()}>Quick View</button>
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
            <button onClick={() => handleClick()}>Quick View</button>
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
            <button onClick={() => handleClick()}>Quick View</button>
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
    //  end product overview
  );
};

export default ProductList;
