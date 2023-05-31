import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";
import "../../assets/css/shoping-cart.css"

const ShopingCartPage = () => {
  return (
    <>
      <HeaderTop className="shadow" />
      <div className="product-detail">
        <div className="category-list">
          <a href="">
            Home<i className="fa-solid fa-angle-right"></i>
          </a>
          <p>Shoping Cart</p>
        </div>
        {/* <!-- end category list --> */}
        <form className="pt-75 pb-85">
          <div className="row">
            <div className="sub-row-1">
              <div className="bor-l bor-r">
                <table className="table-shoping-cart">
                  <tr className="table-head">
                    <th className="column-1">Product</th>
                    <th className="column-2"></th>
                    <th className="column-3">Price</th>
                    <th className="column-4">Quantity</th>
                    <th className="column-5">Total</th>
                  </tr>
                  <tr className="table-row bor-b">
                    <td className="column-1">
                      <div className="how-itemcart1">
                        <img src="https://res.cloudinary.com/dugodumc5/image/upload/v1685349069/coza-store/ewhwojirzrbyd2gulmc6.webp" alt="" />
                      </div>
                    </td>
                    <td className="column-2">Fresh Strawberries</td>
                    <td className="column-3">$ 36.00</td>
                    <td className="column-4">
                      <div
                        style={{ marginLeft: "18px" }}
                        className="more-erase"
                      >
                        <div className="erase">
                          <i className="fa-solid fa-minus"></i>
                        </div>
                        <input type="text" value="1" />
                        <div className="more">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                    </td>
                    <td className="column-5">$ 36.00</td>
                  </tr>
                  <tr className="table-row">
                    <td className="column-1">
                      <div className="how-itemcart1">
                        <img src="https://res.cloudinary.com/dugodumc5/image/upload/v1685349069/coza-store/l9ef1qhsupftjxfpcuy2.webp" alt="" />
                      </div>  
                    </td>
                    <td className="column-2">Lightweight Jacket</td>
                    <td className="column-3">$ 16.00</td>
                    <td className="column-4">
                      <div
                        style={{ marginLeft: "18px" }}
                        className="more-erase"
                      >
                        <div className="erase">
                          <i className="fa-solid fa-minus"></i>
                        </div>
                        <input type="text" value="1" />
                        <div className="more">
                          <i className="fa-solid fa-plus"></i>
                        </div>
                      </div>
                    </td>
                    <td className="column-5">$ 16.00</td>
                  </tr>
                </table>
              </div>
              <div className="bor1 flex-sb plr-40 ptb-20">
                <div className="flex align-center">
                  <input
                    className="input-coupon"
                    type="text"
                    placeholder="Coupon Code"
                  />
                  <div className="update-cart">Apply coupon</div>
                </div>

                <div className="update-cart">Update Cart</div>
              </div>
            </div>
            <div className="sub-row-2">
              <div className="bor1 ml-50 mb-50 pt-30 pb-40 pl-40 pr-40">
                <h3 className="h3">Cart Totals</h3>
                <div className="bor12 pb-13 flex">
                  <div className="size-208">
                    <span className="stext">Subtotal:</span>
                  </div>
                  <div className="size-209">
                    <span className="mtext">$79.65</span>
                  </div>
                </div>
                <div className="bor12 flex pt-6 pb-30">
                  <div className="size-208">
                    <span className="stext">Shipping:</span>
                  </div>
                  <div className="size-209 pr-10">
                    <p className="m-0 pt-2 p">
                      There are no shipping methods available. Please double
                      check your address, or contact us if you need any help.
                    </p>
                    <div className="pt-15">
                      <span className="span">Calculate Shipping</span>
                      <div className="bor8 mb-12 mt-9">
                        <select className="select" name="" id="">
                          <option>Select a country...</option>
                          <option>USA</option>
                          <option>UK</option>
                        </select>
                      </div>
                      <div className="bor8 mb-12">
                        <input
                          className="input"
                          type="text"
                          placeholder="State /  country"
                        />
                      </div>
                      <div className="bor8 mb-22">
                        <input
                          className="input"
                          type="text"
                          placeholder="Postcode / Zip"
                        />
                      </div>
                      <div>
                        <button className="update-totals">Update Totals</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pt-30 pb-30">
                  <div className="size-208">
                    <span className="mtext">Total:</span>
                  </div>
                  <div className="size-209 pt-1">
                    <span className="mtext">$79.65</span>
                  </div>
                </div>
                <button className="checkout">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </form>

        {/*  */}
      </div>
    </>
  );
};

export default ShopingCartPage;
