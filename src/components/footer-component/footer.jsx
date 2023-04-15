import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-main-container mt-auto">
      <div
        className="container-fluid footer-component mt-5 pt-5"
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="footer-section-1">
          <img
            src="companylogo-nobg.png"
            alt="company logo"
            width="250"
            className="rounded float-start"
          />
          <div className="d-flex flex-column footer-buy-section">
            <h2 style={{ color: "white" }}>
              Buy And Sell Platform <br />
              Best Used Cars
            </h2>
            <button className="getStartedbtn mt-2">Get Started</button>
          </div>
        </div>
        <div className="d-flex divider-height">
          <div className="divider"></div>
          <div className="hr"></div>
        </div>
        <div className="footer-section-2">
          <h2>Contact Us</h2>
          <div className="hr-contact"></div>
          <p>
            Car Expertz ,<br />
            Near xyz building,
            <br />
            Thiruvananthapuram
            <br />
            Pincode :695005
          </p>
          <p className="contact-number-footer">
            Contact Number:<a href="tel:1234567890">1234567890</a>
            <br />
            Mail us at
            <a href="mailto:info@carexpertz.com">info@carexpertz.com</a>
          </p>
        </div>
      </div>
      <div className="copyright-section">
        <p>© 2023 Car Expertz. All Rights Reserved by Suffix E Solutions</p>
      </div>
    </div>
  );
}

export default Footer;
