import React, { Component } from "react";

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

export default DealPriceBox;
