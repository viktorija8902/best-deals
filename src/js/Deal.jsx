import React, { Component } from 'react';
import HotelImage from "./HotelImage";
import RegularPriceBox from "./RegularPriceBox";
import DealPriceBox from "./DealPriceBox";
import HotelDetails from "./HotelDetails";

class Deal extends Component {
  render() {
    return (
      <div className="deal">
        <div className="hotel-info">
          <HotelImage image = {this.props.hotelInfo.image_url} savingsInfo={this.props.hotelInfo.savings} />
          <HotelDetails
            name={this.props.hotelInfo.hotel_name}
            address={this.props.hotelInfo.address}
            stars={this.props.hotelInfo.num_stars}
            reviewsNumber={this.props.hotelInfo.num_reviews}
            amenities={this.props.hotelInfo.amenities}
          />
        </div>
        <div className="prices">
          <RegularPriceBox savings={this.props.hotelInfo.savings} regularPrice = {this.props.hotelInfo.regular_price}/>
          <DealPriceBox dealPrice = {this.props.hotelInfo.price}/>
        </div>
      </div>
    )
  }
}

export default Deal;
