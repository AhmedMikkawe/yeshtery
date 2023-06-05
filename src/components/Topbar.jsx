import { Component } from "react";
class Topbar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="container">
          <div className="inner-top-bar">
            <button className="toggle-icon">
              <img src="/images/toggle-icon.svg" alt="" />
            </button>
            <img className="top-bar-logo" src="/images/logo.svg" alt="" />
            <div className="top-bar__right">
              <p>
                &lt; Valentine’s Day Offers! Buy Two Get One Free{" "}
                <strong>Shop Now</strong> &gt;
              </p>
              <a href="#">
                <img src="/images/phone.svg" alt="" />
                <span>contact us</span>
              </a>
              <a href="#">
                <img src="/images/cart.svg" alt="" />
                <span>track order</span>
              </a>
              <a href="#">
                <img src="/images/location.svg" alt="" />
                <span>Find a store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Topbar;
