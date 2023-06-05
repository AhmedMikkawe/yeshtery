import { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="container">
          <div className="inner-menu">
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Unisex</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="offers">
                  Offers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
