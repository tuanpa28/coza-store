import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className="header">
      <HeaderTop />

      <div>
        <div className="img-benner">
          <img
            src="https://res.cloudinary.com/dugodumc5/image/upload/v1685292746/coza-store/wuiotga55uurslt81ahm.webp"
            alt=""
          />
        </div>
        <div className="title-benner">
          <div className="test">
            <h3>Men Collection 2018</h3>
            <h1>NEW ARRIVALS</h1>
            <Link to={"/products"}>SHOP NOW</Link>
          </div>
        </div>
      </div>

      {/* <!-- end img-bg-benner --> */}
    </header>
  );
};

export default Header;
