import React, { Component } from 'react';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DateTimePicker = () => {
    const [startDate, setStartDate] = useState(null);

    return (
        <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
            minDate={new Date()}
            inline
        />
    );
};

const blockDiv = {
    width: '2rem'
}

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            image: this.props.image,
            price: this.props.price,
            categories: this.props.categories,
            decription: this.props.decription,
            busyDate: {}
        }
    }

    render() {
        return (
            <div className="details">
                <h2 className="title_details">{this.state.name}</h2>
                <div className="dateOfRoom">
                    <img className="imgDetails" src={this.state.image}></img>
                    <div className="informations">
                        <ul className="info_details">
                            <li className="info_details_list price">Price: <div className="infomation_details">{this.state.price}</div></li>
                            <li className="info_details_list category">Category: <div className="infomation_details">{this.state.categories}</div></li>
                            <li className="info_details_list decription">Decription: <div className="infomation_details">{this.state.decription}</div></li>
                        </ul>

                    </div>
                </div>
                <div className="choose_date">
                    <p className="choose_date_title">Choose date</p>
                    <div className="check_date">
                        <div className="check_in">
                            <p className="startDateBook">Check-in Date</p>
                            <DateTimePicker className="DateTimePicker" />
                        </div>
                        <div style={blockDiv}></div>
                        <div className="check-out">
                            <p className="endDateBook">Check-out Date</p>
                            <DateTimePicker className="DateTimePicker" />
                        </div>
                        <div style={blockDiv}></div>
                        <div class="form-group green-border-focus">
                            <label className="label_required" for="exampleFormControlTextarea5">Your Requiredment:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                            <input type="button" value="SUBMIT" className="book_submit"></input>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

export default Details;