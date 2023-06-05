import { Component } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Menu from "../components/Menu";
class Product extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <Header />
        <Menu />
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Clothing</a>
              </li>
              <li>
                <a href="#">Tops</a>
              </li>
              <li>
                <a href="#">Adidas</a>
              </li>
              <li>Adidas Black T-shirt</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
