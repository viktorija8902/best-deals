import React, { Component } from 'react';
import HotelImage from "./HotelImage";

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
    let regularPriceBox;
    if (this.props.hotelInfo.savings > 0) {
      regularPriceBox = <div className="regular-price-box">
                          <div className="regular-price not-valid">
                            USD${this.props.hotelInfo.regular_price}
                          </div>
                          <img className="hotels-com-logo" src="images/hotels_com_logo.png" alt=""></img>
                        </div>
    } else {
      regularPriceBox = <div className="regular-price-box">
                          <div className="regular-price">
                            USD${this.props.hotelInfo.regular_price}
                          </div>
                          <img className="hotels-com-logo" src="images/hotels_com_logo.png" alt=""></img>
                        </div>
    }
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
          {regularPriceBox}
          <div className="deal-price-box">
            <div className="deal-price">
              USD${this.props.hotelInfo.price}
            </div>
            <div className="view-details-btn">
              <div className="text">View Details</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Deal;
