import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <form className="search-form">
            <span>
              <img src="/images/search.svg" alt="" />
            </span>
            <input type="text" className="search-input" placeholder="Search" />
          </form>
          <img src="/images/adidas.svg" alt="" className="center-logo" />
          <div className="header__right">
            <button>
              <span className="icon cart-icon">
                <span className="counter">0</span>
                <img src="/images/cart-2.svg" alt="" />
              </span>
              <span>Cart</span>
            </button>
            <button>
              <span className="icon">
                <img src="/images/heart.svg" alt="" />
              </span>
              <span>Wishlist</span>
            </button>
            <button>
              <span className="icon">
                <img src="/images/user.svg" alt="" />
              </span>
              <span>Login</span>
            </button>
          </div>
        </header>
      </div>
    );
  }
}
export default Header;
