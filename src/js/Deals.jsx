import React, { Component } from 'react';
import Deal from "./Deal";

class Deals extends Component {
    render() {
        let hotelsRegularPrices = {};
        this.props.regularPrices.forEach((hotel) => {
            hotelsRegularPrices[hotel.id] = hotel
        });
        const filteredHotels = this.props.deals.map((hotel) => {
            if (hotel.id in hotelsRegularPrices) {
                return <div key={hotel.id.toString()}>
                    <Deal hotelInfo = {hotelsRegularPrices[hotel.id]} dealPrice = {hotel.price}/>
                </div>
            } else {
                return null;
            }
        });
        return (
            <div>{filteredHotels}</div>
        );
    }
}

export default Deals;
