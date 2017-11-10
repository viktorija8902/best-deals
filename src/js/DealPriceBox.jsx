import React, { Component } from "react";
import PropTypes from "prop-types";

class DealPriceBox extends Component {
  render() {
    return (
      <div className="deal-price-box">
        <div className="deal-price">USD${this.props.dealPrice}</div>
        <div className="view-details-btn">
          <div className="text">View Details</div>
        </div>
      </div>
    );
  }
}
DealPriceBox.propTypes = {
  dealPrice: PropTypes.number
};

export default DealPriceBox;
