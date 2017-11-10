import React, { Component } from "react";
import PropTypes from "prop-types";

import Deal from "./Deal";

class Deals extends Component {
  render() {
    const filteredHotels = this.props.results.map(hotel => {
      return (
        <Deal
          key={hotel.id.toString()}
          hotelInfo={hotel}
        />
      );
    });
    return <div className="deals">{filteredHotels}</div>;
  }
}
Deals.propTypes = {
  results: PropTypes.array
};

export default Deals;
