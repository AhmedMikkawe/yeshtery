import { Component } from "react";

class ProductImageSlider extends Component {
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.state = {
      currentIndex: 0,
    };
  }
  handleNextClick() {
    if (this.state.currentIndex < this.props.images.length - 1) {
      this.setState((state) => ({
        currentIndex: state.currentIndex + 1,
      }));
    } else {
      this.setState({
        currentIndex: 0,
      });
    }
  }
  handlePrevClick() {
    if (this.state.currentIndex > 0) {
      this.setState((state) => ({
        currentIndex: state.currentIndex - 1,
      }));
    } else {
      this.setState({
        currentIndex: this.props.images.length - 1,
      });
    }
  }

  render() {
    return (
      <div className="product-slider">
        <img
          className="product-image"
          src={this.props.images[this.state.currentIndex]}
          alt=""
        />
        <div className="product-slider__controllers">
          <button onClick={this.handlePrevClick}>
            <img src="images/left-arr.svg" alt="" />
          </button>
          {this.props.images.map((image) => {
            return <img key={image} src={image} alt="" className="img-thumb" />;
          })}
          <button onClick={this.handleNextClick}>
            <img src="images/right-arr.svg" alt="" />
          </button>
        </div>
      </div>
    );
  }
}
export default ProductImageSlider;
