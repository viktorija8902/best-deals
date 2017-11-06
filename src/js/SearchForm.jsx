import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            checkIn: "",
            checkOut: ""
        
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

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Search By City" type="text" value={this.state.city} onChange={this.handleCityChange} />
                <input placeholder="Check-In" type="text" value={this.state.checkIn} onChange={this.handleCheckInChange} />
                <input placeholder="Check-Out" type="text" value={this.state.checkOut} onChange={this.handleCheckOutChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default SearchForm;
