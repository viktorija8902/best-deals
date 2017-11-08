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
            regularPrices: []
        };

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleCheckInChange = this.handleCheckInChange.bind(this);
        this.handleCheckOutChange = this.handleCheckOutChange.bind(this);
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

    handleSubmit(event) {
        this.getDeals();
        this.getRegularPrices();
        event.preventDefault();
    }

    render() {
        let searchResults = <Deals regularPrices={this.state.regularPrices}
                                   deals={this.state.deals}
                            />;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Search By City" type="text" value={this.state.city} onChange={this.handleCityChange} />
                    <input placeholder="Check-In" type="text" value={this.state.checkIn} onChange={this.handleCheckInChange} />
                    <input placeholder="Check-Out" type="text" value={this.state.checkOut} onChange={this.handleCheckOutChange} />
                    <input type="submit" value="Submit" />
                </form>
                {searchResults}
            </div>
        );
    }
}

export default SearchForm;
