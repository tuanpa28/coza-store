
const Footer = () => {
  return (
    <footer>
      <div className="mx-auto-300">
        <div className="footer-top">
          <div className="categories-footer-top">
            <h4>CATEGORIES</h4>
            <ul>
              <li>
                <a href="">Women</a>
              </li>
              <li>
                <a href="">Men</a>
              </li>
              <li>
                <a href="">Shoes</a>
              </li>
              <li>
                <a href="">Watches</a>
              </li>
            </ul>
          </div>
          <div className="help-footer-top">
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="">Track Order</a>
              </li>
              <li>
                <a href="">Returns</a>
              </li>
              <li>
                <a href="">Shipping</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="getintouch-footer-top">
            <h4>GET IN TOUCH</h4>
            <p>
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div>
              <ul>
                <li>
                  <a href="">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="newsletter-footer-top">
            <h4>NEWSLETTER</h4>
            <form>
              <div className="input-newsletter-footer-top">
                <input type="text" placeholder="email@example.com" />
                <span></span>
              </div>
              <div className="button-newsletter-footer-top">
                <button>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-buttom">
          <ul>
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293050/coza-store/r9my0z9c3p1lusuwomle.webp"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293050/coza-store/c2ulhvamt4askyrc2ayl.webp"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293050/coza-store/jes5qzwscqsar7r5ahkh.webp"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293050/coza-store/umt5ncs6ehgxrxr3dq3d.webp"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="">
                <img
                  src="https://res.cloudinary.com/dugodumc5/image/upload/v1685293050/coza-store/lo9buig0b4zfvnato9cl.webp"
                  alt=""
                />
              </a>
            </li>
          </ul>

          <p>
            Copyright ©2022 All rights reserved | This template is made with{" "}
            <i className="fa-regular fa-heart"></i> by
            <a href="https://colorlib.com/"> Colorlib</a>
          </p>
        </div>
      </div>
      <div className="end">
        <a href="#">
          <i className="fa-solid fa-angles-up"></i>
        </a>
      </div>
    </footer>
    //   end footer
  );
};

export default Footer;
