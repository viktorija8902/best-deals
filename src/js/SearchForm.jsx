import React, { Component } from "react";

import {getHotels} from "./services/HotelsApi";
import Deals from "./Deals";
import SortingMenu from "./SortingMenu";

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
            sortedBySavings: false,
            showSortingMenu: false,
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

    showSortingMenu() {
        this.setState({
            showSortingMenu: true
        })
    }

    handleSubmit(event) {
        this.getDeals();
        this.getRegularPrices();
        this.showSortingMenu();
    }

    findHotelsExistingInBothSystems() {
        let hotelsRegularPrices = {};
        this.state.regularPrices.forEach(hotel => {
            hotelsRegularPrices[hotel.id] = hotel;
        });

        let filteredHotels =[]
        this.state.deals.forEach(hotel => {
            if (hotel.id in hotelsRegularPrices) {
                hotel["regular_price"] = hotelsRegularPrices[hotel.id].price;
                hotel["savings"] = Math.round(hotel["regular_price"] - hotel["price"]);
                filteredHotels = filteredHotels.concat(hotel);
            }
        })
        return filteredHotels;
    }

    sortHotels(hotels) {
        if (this.state.sortedByPrice) {
            return hotels.sort(function (a, b) {
                return a.price - b.price;
            });
        }
        if (this.state.sortedByRating) {
            return hotels.sort(function (a, b) {
                return b.num_stars - a.num_stars;
            });
        }
        if (this.state.sortedBySavings) {
            return hotels.sort(function (a, b) {
                return b.savings - a.savings;
            });
        }
        return hotels;
    }

    render() {
        const commonHotels = this.findHotelsExistingInBothSystems();
        const results = this.sortHotels(commonHotels);
        return (
            <div>
                <div className="search-form">
                    <input placeholder="Search By City" type="text" value={this.state.city} onChange={this.handleCityChange} />
                    <input placeholder="Check-In" type="text" value={this.state.checkIn} onChange={this.handleCheckInChange} />
                    <input placeholder="Check-Out" type="text" value={this.state.checkOut} onChange={this.handleCheckOutChange} />
                    <button onClick={this.handleSubmit}><img src="images/search_btn.png" alt="Search"></img></button>
                </div>
                {this.state.showSortingMenu && results &&
                    <div className="search-results">
                        <SortingMenu
                            sortedByPrice={this.state.sortedByPrice}
                            sortByPrice={this.sortByPrice}

                            sortedByRating={this.state.sortedByRating}
                            sortByRating={this.sortByRating}
                            
                            sortedBySavings={this.state.sortedBySavings}
                            sortBySavings={this.sortBySavings}
                        />
                        <Deals results={results} />
                    </div>
                }
            </div>
        );
    }
}

export default SearchForm;
