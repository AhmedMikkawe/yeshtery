import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="top-footer">
              <div className="right">
                <img src="images/footer-logo.svg" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                </p>
                <p>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed dia
                </p>
                <p>
                  m nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit
                </p>
              </div>
              <div className="separator"></div>
              <div className="left">
                <p>Subscribe to our newsletter</p>
                <form className="newsletter">
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter Your Mail"
                  />
                  <button type="submit">
                    Subscribe
                    <img src="/images/send.svg" alt="" width="20" />
                  </button>
                </form>
                <div className="links">
                  <div className="internal">
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Track Order</a>
                      </li>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Sell With Us</a>
                      </li>
                      <li>
                        <a href="#">Shipping And Returns</a>
                      </li>
                    </ul>
                  </div>
                  <div className="separator"></div>
                  <div className="external">
                    <ul>
                      <li>
                        <img src="/images/face.svg" alt="" />
                        <span>/YESHTERY</span>
                      </li>
                      <li>
                        <img src="/images/linked.svg" alt="" />
                        <span>/YESHTERY</span>
                      </li>
                      <li>
                        <img src="/images/insta.svg" alt="" />
                        <span>/YESHTERY</span>
                      </li>
                      <li>
                        <img src="/images/twitter.svg" alt="" />
                        <span>/YESHTERY</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <div className="left">
                <p>© 2021 yeshtery, all rights reserved.</p>
              </div>
              <div className="right">
                <div className="cashes">
                  <img src="images/cash-logo.png" alt="" />
                  <img src="images/visa-logo.png" alt="" />
                  <img src="images/master-logo.png" alt="" />
                </div>
                <div className="nas-logo">
                  <span>Powered By</span>
                  <img src="images/nas-logo.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
