import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IHeaderTop {
  className?: string;
}

const HeaderTop = ({ className }: IHeaderTop) => {
  const [isScrollMenu, setIsScrollMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Xử lý logic khi scroll diễn ra
      document.documentElement.scrollTop > 40
        ? setIsScrollMenu(true)
        : setIsScrollMenu(false);
    };

    window.addEventListener("scroll", handleScroll); // Thêm sự kiện scroll

    return () => {
      window.removeEventListener("scroll", handleScroll); // Loại bỏ sự kiện scroll khi component unmount
    };
  }, []);

  return (
    <>
      <div className="header_top">
        <div className=" header-top-sp h-full">
          <div className="sup-header-top">
            <p>Website Clone by Pham Anh Tuan</p>
          </div>
          <div className="list-header-top">
            <a href="">Help & FAQs</a>
            <Link to={"/signin"}>My Account</Link>
            <a href="">EN</a>
            <a href="">USD</a>
          </div>
        </div>
      </div>
      {/* <!-- end header-top --> */}
      <nav
        id="nav"
        className={
          isScrollMenu ? `menu scroll-menu ${className}` : `menu ${className}`
        }
      >
        <div className={isScrollMenu ? "sub-menu scroll-sub-menu" : "sub-menu"}>
          <div className="flex">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685292789/coza-store/jn3h2a7b5z16v3ucxnbx.webp"
                  alt=""
                />
              </Link>
            </div>
            <div className="list-menu">
              <ul className="flex m-0">
                <li>
                  <Link className="text-blue" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/products"}>Shop</Link>
                </li>
                <li>
                  <Link to={"/shoping-cart"}>Features</Link>
                </li>
                <li>
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex list-icon-menu">
            <div className="icon-menu">
              <a href="">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span></span>
              </a>
            </div>
            <div className="icon-menu">
              <a href="">
                <i className="fa-solid fa-cart-shopping"></i>
              </a>
            </div>
            <div className="icon-menu">
              <a href="">
                <i className="fa-solid fa-heart"></i>
              </a>
            </div>
            <div className="sub-dark-sun">
              <button id="dark-sun">
                <i className="fa-solid fa-sun"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- end menu --> */}
    </>
  );
};

export default HeaderTop;
