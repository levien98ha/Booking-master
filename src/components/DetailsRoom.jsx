import React, { Component } from 'react';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Details1 from '../images/details-1.jpeg';
import Details2 from '../images/details-2.jpeg';
import Details3 from '../images/details-3.jpeg';
import Details4 from '../images/details-4.jpeg';
import { connect } from 'react-redux';
import DateTimePicker from './DatePicker'
// var [startDay1, endDay1] = [];
const DateTimePicker1 = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            selected={startDate}
            onChange={date => {setStartDate(date); console.log(startDate)}}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            minDate={new Date()}
            inline
        />
    );
   // console.log(startDate);
};
const DateTimePicker2 = () => {
    const [endDate, setEndDate] = useState(new Date());
    return (
        <DatePicker
            selected={endDate}
            onChange={date => {setEndDate(date); console.log(endDate)}}
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            minDate={new Date()}
            inline
        />
    );
};
const blockDiv = {
    width: '2rem'
}
const style1 = {
    backgroundImage: `url(${Details1})`,
    width: '20em'
}
const style2 = {
    backgroundImage: `url(${Details2})`,
    width: '20em'
}
const style3 = {
    backgroundImage: `url(${Details3})`,
    width: '20em'
}
const style4 = {
    backgroundImage: `url(${Details4})`,
    width: '20em'
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
            startDays: this.props.startDays,
            endDays: this.props.endDays,
            startDate: new Date(),
            endDate: new Date()
            
        }
        console.log(this.state.name);
       console.log(this.state.price);
       console.log(this.state.id)
    }
    // componentDidMount
    onChangeStartDays = (date) => {
        this.setState({
            startDate: date
        })
        console.log(this.state.startDate)
    }
    onChangeEndDays = (date) => {
        this.setState({
            endDate: date
        })
        console.log(this.state.endDate)
    }
    handleSelect = (date) => {
     //   console.log(this.state.startDate)
    }
    // receiveStartDateSurvey = (startdate) => {
    //     this.setState({
    //         startdate: startdate,
    //     })
    //     console.log(this.state.startDate)
    // }

    render() {
        return (
            <div className="details" id={this.state.id}>
                <h2 className="title_details">{this.state.name}</h2>
                <div className="dateOfRoom">
                    {/* <img className="imgDetails" src={this.state.image}></img> */}
                    <slider className='imgDetails'>
                        <slide className= 'slideDetails' style={style1}> </slide>
                        <slide className= 'slideDetails' style={style2}> </slide>
                        <slide className= 'slideDetails' style={style3}> </slide>
                        <slide className= 'slideDetails' style={style4}> </slide>
                    </slider>
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
                            {/* <DateTimePicker
										sendDate={this.receiveStartDateSurvey}
										placeholder='Start Time Survey'
										value={this.state.startdate}										
									/> */}
                            {/* <DateTimePicker1 className="DateTimePicker"/> */}
                            <DatePicker
            selected={this.state.startDate}
            onChange={this.onChangeStartDays}
            //value={this.state.date1}
            onSelect={this.handleSelect} 
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            minDate={new Date()}
            inline
        />
                        </div>
                        <div style={blockDiv}></div>
                        <div className="check-out">
                            <p className="endDateBook">Check-out Date</p>
                            {/* <DateTimePicker2 className="DateTimePicker" /> */}
                            <DatePicker
            selected={this.state.endDate}
            onChange={this.onChangeEndDays}
            //value={this.state.date1}
            onSelect={this.handleSelect} 
            timeInputLabel="Time:"
            dateFormat="dd/MM/yyyy h:mm aa"
            showTimeInput
            minDate={new Date()}
            inline
        />
                        </div>
                        <div style={blockDiv}></div>
                        <div class="form-group green-border-focus">
                            <label className="label_required" for="exampleFormControlTextarea5">Your Requiredment:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea5" rows="3"></textarea>
                            <input type="button" value="SUBMIT" className="book_submit" onClick={this.onAddBooking}></input>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    onAddBooking = () => {
       //console.log(startDay1);
    //    console.log(this.state.name);
    //    console.log(this.state.price);
    //    console.log(this.state.id)
       }       
};
const dataBooking = [];


const mapStateToPros = (state) => {
    const {posts} = state;
    return {posts}
}

export default connect()(Details);