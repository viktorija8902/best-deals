import React, { Component } from "react";
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

export default Deals;
