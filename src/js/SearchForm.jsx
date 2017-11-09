import React, { Component } from "react";

import {getHotels} from "./services/HotelsApi";
import Deals from "./Deals";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            checkIn: "",
            checkOut: "",
            deals: [],
            regularPrices: [],
            sortedByPrice: false,
            sortedByRating: false,
            sortedBySavings: false
        };

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCheckInChange = this.handleCheckInChange.bind(this);
        this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
        this.sortByRating = this.sortByRating.bind(this);
        this.sortBySavings = this.sortBySavings.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCityChange(event) {
        this.setState({city: event.target.value});
    }
    handleCheckInChange(event) {
        this.setState({checkIn: event.target.value});
    }
    handleCheckOutChange(event) {
        this.setState({checkOut: event.target.value});
    }

    getDeals() {
        getHotels(JSON.stringify({
                city: this.state.city,
                checkin: this.state.checkIn,
                checkout: this.state.checkOut,
                provider: "snaptravel" 
            })
        ).then(data => {
            this.setState({
                deals: data.hotels
            })
        })
    }

    getRegularPrices() {
        getHotels(JSON.stringify({
            city: this.state.city,
            checkin: this.state.checkIn,
            checkout: this.state.checkOut,
            provider: "retail" 
        })
        ).then(data => {
            this.setState({
                regularPrices: data.hotels
            })
        })
    }

    sortByPrice() {
        this.setState({
            sortedByPrice: true,
            sortByRating: false,
            sortedBySavings: false
        })
    }

    sortByRating() {
        this.setState({
            sortedByPrice: false,
            sortedByRating: true,
            sortedBySavings: false
        })
    }

    sortBySavings() {
        this.setState({
            sortedByPrice: false,
            sortedByRating: false,
            sortedBySavings: true
        })
    }

    handleSubmit(event) {
        this.getDeals();
        this.getRegularPrices();
        event.preventDefault();
    }

    render() {
        let hotelsRegularPrices = {};
        this.state.regularPrices.forEach(hotel => {
            hotelsRegularPrices[hotel.id] = hotel;
        });

        let filteredHotels =[]
        this.state.deals.forEach(hotel => {
            if (hotel.id in hotelsRegularPrices) {
                hotel["regular_price"] = hotelsRegularPrices[hotel.id].price;
                hotel["savings"] = hotel["regular_price"] - hotel["price"];
                filteredHotels = filteredHotels.concat(hotel);
            }
        })
                           
        let sortedResults;
        if (this.state.sortedByPrice) {
            sortedResults = filteredHotels.sort(function (a, b) {
                return a.price - b.price;
            });
        } else if (this.state.sortedByRating) {
            sortedResults = filteredHotels.sort(function (a, b) {
                return b.num_stars - a.num_stars;
            });
        } else if (this.state.sortedBySavings) {
            sortedResults = filteredHotels.sort(function (a, b) {
                return b.savings - a.savings;
            });
        } else {
            sortedResults = filteredHotels;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Search By City" type="text" value={this.state.city} onChange={this.handleCityChange} />
                    <input placeholder="Check-In" type="text" value={this.state.checkIn} onChange={this.handleCheckInChange} />
                    <input placeholder="Check-Out" type="text" value={this.state.checkOut} onChange={this.handleCheckOutChange} />
                    <input type="submit" value="Submit"/>
                </form>
                <button className="sorting-btn" onClick={this.sortByPrice}>Price</button>
                <button className="sorting-btn" onClick={this.sortByRating}>Rating</button>
                <button className="sorting-btn" onClick={this.sortBySavings}>Savings</button>
                <Deals results={sortedResults} />
            </div>
        );
    }
}

export default SearchForm;
