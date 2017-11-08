import React, { Component } from "react";
import Deal from "./Deal";

class Deals extends Component {
  render() {
    let hotelsRegularPrices = {};
    this.props.regularPrices.forEach(hotel => {
      hotelsRegularPrices[hotel.id] = hotel;
    });
    const filteredHotels = this.props.deals.map(hotel => {
      if (hotel.id in hotelsRegularPrices) {
        return (
          <Deal
            key={hotel.id.toString()}
            hotelInfo={hotelsRegularPrices[hotel.id]}
            dealPrice={hotel.price}
          />
        );
      } else {
        return null;
      }
    });
    return <div className="deals">{filteredHotels}</div>;
  }
}

export default Deals;
