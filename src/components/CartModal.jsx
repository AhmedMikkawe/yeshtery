import { Component } from "react";

class CartModal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }
  handleShowCart = () => {
    this.props.showCart();
  };

  render() {
    return (
      <div className="cart-wrapper" onClick={this.handleShowCart}>
        <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
          <div className="cart-header">
            <button className="close" onClick={this.handleShowCart}>
              <img src="/images/close.svg" alt="" />
            </button>
            <h3>My Cart</h3>
          </div>
          <div className="cart-body">
            <h4>Cart Summary</h4>
            {this.props.items.length == 0 && (
              <p className="emptycart">Cart is Empty</p>
            )}
            <div className="cart-elements">
              {this.props.items.map((item) => {
                return (
                  <div key={item.title} className="cart-item">
                    <img src={item.img} width="50" />
                    <div className="cart-item__details">
                      <h5>{item.title}</h5>
                      <span className="qty">Qunatitiy : {item.quantity}</span>
                      <div>
                        <span className="price">
                          {item.price.toLocaleString("en-US")} LE
                        </span>
                        <button>remove</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {this.props.items.length !== 0 && (
              <p className="allprice">
                Total : {this.props.total.toLocaleString("en-US")}
                LE
              </p>
            )}
            <div className="btns">
              <button className="review">Review Cart</button>
              <button className="checkout">Complete Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CartModal;
