import { Component } from "react";
import otherProduct from "../images/otherProduct.png";

class similarProducts extends Component {
  constructor(props) {
    super(props);
  }
  fillProducts = () => {
    let arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(
        <div key={Math.random() * 1000} className="product">
          <img src={otherProduct} alt="" />
          <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h5>
          <div className="price">
            <div className="price-number">9,999 LE</div>
            <img src="/images/adidas.svg" alt="" />
          </div>
          <div className="rate">
            <span>
              <img src="/images/filledStar.svg" alt="" />
              <img src="/images/filledStar.svg" alt="" />
              <img src="/images/filledStar.svg" alt="" />
              <img src="/images/filledStar.svg" alt="" />
              <img src="/images/emptyStar.svg" alt="" />
            </span>
            <span>4.2 of 5</span>
          </div>
          <p>
            Pickup From : <strong>Genena Mall</strong>
          </p>
        </div>
      );
    }
    return arr;
  };
  render() {
    return (
      <div className="container">
        <div className="similarProducts">
          <h3>Similar Products</h3>
          <p>You may like these products also</p>
          <div className="products">{this.fillProducts()}</div>
        </div>
      </div>
    );
  }
}
export default similarProducts;
