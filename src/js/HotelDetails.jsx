import React, { Component } from "react";

class HotelDetails extends Component {
  getStars(starsNumber) {
    let number = 0;
    let starsArray = [];
    while (number < starsNumber) {
      starsArray = starsArray.concat(number);
      number++;
    }
    return starsArray.map(star => {
      return <img key={star.toString()} src="images/star.png" alt="" />;
    });
  }

  getAmenities(amenities) {
    return amenities.map(amenity => {
      return (
        <div key={amenity.toString()} className="amenity">
          {amenity}
        </div>
      );
    });
  }

  render() {
    const stars = this.getStars(this.props.stars);
    const amenities = this.getAmenities(this.props.amenities);
    return (
      <div className="details">
        <div className="name">{this.props.name}</div>
        <div className="address">{this.props.address}</div>
        <div className="columns">
          <div className="left-column">
            <div className="stars">{stars}</div>
            <div className="reviews">{this.props.reviewsNumber} Reviews</div>
          </div>
          <div className="right-column">
            <div className="amenities">{amenities}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotelDetails;
