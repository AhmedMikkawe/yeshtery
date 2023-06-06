import { Component } from "react";

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.handleDecQuantity = this.handleDecQuantity.bind(this);
    this.handleIncQuantity = this.handleIncQuantity.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {
      currentPrice: 0,
      quantity: 1,
    };
  }
  componentDidMount() {
    this.setState({
      currentPrice:
        this.props.price - (this.props.price * this.props.discount) / 100,
    });
  }
  fillStars() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(this.props.rate)) {
        stars.push(<img key={i} src="/images/filledStar.svg" alt="" />);
      } else {
        stars.push(<img key={i} src="/images/emptyStar.svg" alt="" />);
      }
    }
    return stars;
  }
  handleDecQuantity() {
    this.setState((prevState) => {
      if (prevState.quantity >= 2) {
        return { quantity: prevState.quantity - 1 };
      }
    });
  }
  handleIncQuantity() {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }
  handleAddToCart() {
    this.props.addToCart({
      quantity: this.state.quantity,
      price: this.state.currentPrice * this.state.quantity,
      title: this.props.title,
      img: this.props.img,
    });
  }
  render() {
    return (
      <div className="product-details">
        <img src="/images/adidas.svg" alt="" width="60" />
        <h1>{this.props.title}</h1>
        <span className="category">Men</span>
        <div className="rates">
          <span className="stars">{this.fillStars()}</span>
          <span className="rate">{this.props.rate} of 5</span>
          <span className="rates__counter">{this.props.rates} Rates</span>
        </div>
        <div className="pricing">
          <span className="price">
            {this.state.currentPrice.toLocaleString("en-US")} LE
          </span>
          {this.props.discount > 0 && (
            <span className="old-price">
              {this.props.price.toLocaleString("en-US")}LE
            </span>
          )}
          {this.props.discount > 0 && (
            <span className="discount">{this.props.discount} % off</span>
          )}
        </div>
        <hr />
        <div>
          <h2>Size</h2>
          <div className="sizes">
            {this.props.sizes.map((size) => {
              return (
                <div key={size} className="size">
                  <label htmlFor={size}>
                    {size}
                    <input type="radio" name="size" id={size} />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div>
          <h2>Color</h2>
          <div className="colors">
            {this.props.colors.map((color) => {
              return (
                <div key={color} className="color">
                  <label htmlFor={color}>
                    <img src={color} alt="" />
                    <input type="radio" name="color" id={color} />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <hr />
        <div>
          <h2>Quantity</h2>
          <div className="quantity">
            <button onClick={this.handleDecQuantity}>-</button>
            <span>{this.state.quantity}</span>
            <button onClick={this.handleIncQuantity}>+</button>
          </div>
        </div>
        <div className="buttons">
          <button className="add-to-cart" onClick={this.handleAddToCart}>
            Add To Cart
          </button>
          <button className="pick">Pickup From Store</button>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
