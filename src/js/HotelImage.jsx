import React, { Component } from "react";
import PropTypes from "prop-types";

class HotelImage extends Component {
  render() {
    if (this.props.savingsInfo > 0) {
      return <div className="hotel-image">
                <img src={this.props.image} alt={`you will save USD$${this.props.savingsInfo}`}></img>
                <div className="savings-box">
                <div className="text">${this.props.savingsInfo}</div>
                <div className="small-text">OFF</div>
                </div>
                <img className="savings-box-corner" src="./images/red_triangle.png" alt=""></img>
            </div>
    }
    return <img src={this.props.image} alt=""></img>
  }
}
HotelImage.propTypes = {
  image: PropTypes.string,
  savingsInfo: PropTypes.number
};

export default HotelImage;
