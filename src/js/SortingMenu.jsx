import React, { Component } from "react";
import PropTypes from "prop-types";

class SortingMenu extends Component {
  constructor(props) {
    super(props);
    this.sortByPrice = this.sortByPrice.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.sortBySavings = this.sortBySavings.bind(this);
  }

  sortByPrice(e) {
    this.props.sortByPrice(e);
  }

  sortByRating(e) {
    this.props.sortByRating(e);
  }

  sortBySavings(e) {
    this.props.sortBySavings(e);
  }

  render() {
    if (this.props.sortedByPrice) {
      return (
        <div className="sorting-menu">
          <button className="sorting-btn selected" onClick={this.sortByPrice}>
            <div className="text">Price</div>
            <img src="images/arrow.png" alt="sorted by price"/>
          </button>
          <button className="sorting-btn" onClick={this.sortByRating}>
            <div className="text">Rating</div>
          </button>
          <button className="sorting-btn" onClick={this.sortBySavings}>
            <div className="text">Savings</div>
          </button>
        </div>
      );
    }
    if (this.props.sortedByRating) {
      return (
        <div className="sorting-menu">
          <button className="sorting-btn" onClick={this.sortByPrice}>
            <div className="text">Price</div>
          </button>
          <button className="sorting-btn selected" onClick={this.sortByRating}>
            <div className="text">Rating</div>
            <img src="images/arrow.png" alt="sorted by rating"/>
          </button>
          <button className="sorting-btn" onClick={this.sortBySavings}>
            <div className="text">Savings</div>
          </button>
        </div>
      );
    }
    if (this.props.sortedBySavings) {
      return (
        <div className="sorting-menu">
          <button className="sorting-btn" onClick={this.sortByPrice}>
            <div className="text">Price</div>
          </button>
          <button className="sorting-btn" onClick={this.sortByRating}>
            <div className="text">Rating</div>
          </button>
          <button className="sorting-btn selected" onClick={this.sortBySavings}>
            <div className="text">Savings</div>
            <img src="images/arrow.png" alt="sorted by savings"/>
          </button>
        </div>
      );
    }
    return (
      <div className="sorting-menu">
        <button className="sorting-btn" onClick={this.sortByPrice}>
          <div className="text">Price</div>
        </button>
        <button className="sorting-btn" onClick={this.sortByRating}>
          <div className="text">Rating</div>
        </button>
        <button className="sorting-btn" onClick={this.sortBySavings}>
          <div className="text">Savings</div>
        </button>
      </div>
    );
  }
}
SortingMenu.propTypes = {
  sortedByPrice: PropTypes.bool,
  sortedByRating: PropTypes.bool,
  sortedBySavings: PropTypes.bool,
  sortByPrice: PropTypes.func,
  sortByRating: PropTypes.func,
  sortBySavings: PropTypes.func
};

export default SortingMenu;
