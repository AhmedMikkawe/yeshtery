import { Component, lazy } from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductImageSlider from "../components/ProductImageSlider";
import imageOne from "../images/product-1.jpg";
import imageTwo from "../images/product-2.jpg";
import imageThree from "../images/product-3.jpg";
import imageFour from "../images/product-4.jpg";
import ProductDetails from "../components/ProductDetails";
import SimilarProducts from "../components/SimilarProducts";
import CartModal from "../components/CartModal";
class Product extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleShowCart = this.handleShowCart.bind(this);
    this.state = {
      images: [imageOne, imageTwo, imageThree, imageFour],
      title:
        "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      price: 9999,
      sizes: ["Small", "Medium", "Large", "X Large", "XX Large"],
      rate: 4.9,
      rates: 22,
      discount: 30,
      colors: [imageOne, imageTwo],
      cartItems: [],
      cartCount: 0,
      showCart: false,
      total: 0,
    };
  }
  handleAddToCart(item) {
    let newItems = this.state.cartItems.map((element) => {
      if (element.title == item.title) {
        return {
          ...element,
          quantity: element.quantity + item.quantity,
          price: element.price + item.price,
        };
      }
      return item;
    });

    this.setState((prev) => {
      if (newItems.length == 0) {
        return { cartItems: [...prev.cartItems, item] };
      }
      return { cartItems: newItems };
    });
    this.setState((prev) => {
      let countArr = prev.cartItems.map((element) => {
        return element.quantity;
      });
      let count = countArr.reduce((prev, cur) => prev + cur);
      return { cartCount: count };
    });
    this.setState((prev) => {
      let total = prev.cartItems.reduce((ac, cu) => {
        return ac.price + cu.price;
      }).price;
      return { total };
    });
  }
  handleShowCart() {
    this.setState({ showCart: !this.state.showCart });
  }
  render() {
    return (
      <div>
        <Topbar />
        <Header counter={this.state.cartCount} showCart={this.handleShowCart} />
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
        <div className="container">
          <div className="product-overview">
            <ProductImageSlider images={this.state.images} />
            <ProductDetails
              title={this.state.title}
              price={this.state.price}
              sizes={this.state.sizes}
              rate={this.state.rate}
              rates={this.state.rates}
              discount={this.state.discount}
              colors={this.state.colors}
              addToCart={this.handleAddToCart}
              img={imageOne}
            />
          </div>
        </div>
        {this.state.showCart && (
          <CartModal
            showCart={this.handleShowCart}
            items={this.state.cartItems}
            total={this.state.total}
          />
        )}
        <SimilarProducts />
      </div>
    );
  }
}
export default Product;
