import React, { Component } from "react";
import PropTypes from "prop-types";

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
RegularPriceBox.propTypes = {
  savings: PropTypes.number,
  regularPrice: PropTypes.number
};

export default RegularPriceBox;
