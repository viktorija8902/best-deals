import React, { Component } from 'react';
import HotelImage from "./HotelImage";
import RegularPriceBox from "./RegularPriceBox";
import DealPriceBox from "./DealPriceBox";

class Deal extends Component {
  getStars(starsNumber) {
    let number = 0;
    let starsArray = []
    while (number < starsNumber) {
      starsArray = starsArray.concat(number);
      number++;
    }
    const stars = starsArray.map((star) => {
      return <img  key={star.toString()} src="images/star.png" alt=""></img>
    })
    return stars;
  }

  render() {
    const stars = this.getStars(this.props.hotelInfo.num_stars);
    const amenities = this.props.hotelInfo.amenities.map((amenity) => {
      return <div key={amenity.toString()} className="amenity">{amenity}</div>
    })
    return (
      <div className="deal">
        <div className="hotel-info">
          <HotelImage image = {this.props.hotelInfo.image_url} savingsInfo={this.props.hotelInfo.savings} />
          <div className="details">
            <div className="name">{this.props.hotelInfo.hotel_name}</div>
            <div className="address">{this.props.hotelInfo.address}</div>
            <div className="columns">
              <div className="left-column">
                <div className="stars">{stars}</div>
                <div className="reviews">{this.props.hotelInfo.num_reviews} Reviews</div>
              </div>
              <div className="right-column">
                <div className="amenities">{amenities}</div>
              </div>
            </div>
          </div>
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
