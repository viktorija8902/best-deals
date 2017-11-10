import React, { Component } from "react";

class RegularPriceBox extends Component {
  render() {
    if (this.props.savings > 0) {
      return (
        <div className="regular-price-box">
          <div className="regular-price not-valid">
            USD${this.props.regularPrice}
          </div>
          <img
            className="hotels-com-logo"
            src="images/hotels_com_logo.png"
            alt=""
          />
        </div>
      );
    }
    return (
      <div className="regular-price-box">
        <div className="regular-price">
          USD${this.props.regularPrice}
        </div>
        <img
          className="hotels-com-logo"
          src="images/hotels_com_logo.png"
          alt=""
        />
      </div>
    );
  }
}

export default RegularPriceBox;
