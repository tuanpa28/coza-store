import HeaderTop from "../../components/Header/HeaderTop/HeaderTop";
import "../../assets/css/css.css"

const ContactPage = () => {
  return (
    <>
      <HeaderTop />
      <div>
        <div className="banner">
          <h2>Contact</h2>
        </div>
        {/* <!-- end banner --> */}
        <div id="alll" className="sub-contact">
          <div className="contact">
            <div className="contact-form">
              <h2>Send Us A Message</h2>

              <form action="">
                <div className="mb-20 bor-8 contact-form-input">
                  {" "}
                  <img src="./src/img/email.webp" alt="" />
                  <input type="text" placeholder="Your Email Address" />
                </div>
                <div className="mb-20 bor-8 p-tex">
                  <textarea placeholder="How Can We Help?"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            {/* <!--  --> */}
            <div className="contact-information">
              <div className="flex pb-10">
                <span className="mr-6">
                  <i className="fa-solid fa-location-pin"></i>
                </span>
                <div>
                  <h3>Address</h3>
                  <p>
                    Coza Store Center 8th floor, 379 Hudson St, New York, NY
                    10018 US
                  </p>
                </div>
              </div>
              {/* <!--  --> */}
              <div className="flex pb-10">
                <span className="mr-6">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div>
                  <h3>Lets Talk</h3>
                  <p className="text-blue">+1 800 1236879</p>
                </div>
              </div>
              <div className="flex">
                <span className="mr-6">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <div>
                  <h3>Sale Support</h3>
                  <p className="text-blue">contact@example.com</p>
                </div>
              </div>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
        {/* <!--  --> */}
        <div className="gg-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3723.864106206915!2d105.74713042015193!3d21.038122779164073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1662016226169!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          
          ></iframe>
        </div>
        {/* <!-- end gg map --> */}
      </div>
    </>
  );
};

export default ContactPage;
