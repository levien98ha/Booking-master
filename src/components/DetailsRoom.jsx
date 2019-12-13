import React, { Component } from 'react';
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';
import {connect} from 'react-redux'


const blockDiv = {
    width: '2rem'
}
const style1 = {
    width: '20em'
}
const style2 = {
    width: '20em'
}
const style3 = {
    width: '20em'
}
const style4 = {
    width: '20em'
}
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product:[],
            id: this.props.id,
            startDate:'',
            endDate: ''
        }
        console.log(this.state.id);
    }
    // onChangeStartDays = (date) => {
    //     this.setState({
    //         startDate: date
    //     })
    //     console.log(this.state.startDate)
    // }
    // onChangeEndDays = (date) => {
    //     this.setState({
    //         endDate: date
    //     })
    //     console.log(this.state.endDate)
    // }
    componentDidMount() {
        const id = this.state.id
        axios({
            method: 'GET',
            url: `http://localhost:3000/rooms?id=${id}`,
        })
            .then(response => {
                this.setState({
                    product: response.data
                })
                console.log(this.state.product)
            })
            .catch(error => {
                console.log(error);
        })   
        console.log(this.props.id);
    }
   

    render() {
        const {product} = this.state
        var list = product.map(item => {
            return (
                <div className="details">
                <h2 className="title_details">{item.name}</h2>
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
                            <li className="info_details_list price">Price: <div className="infomation_details">{item.price}</div></li>
                            <li className="info_details_list decription">Decription: <div className="infomation_details">{item.description}</div></li>
                        </ul>

                    </div>
                </div>
            </div>
            );
        })
        return (
            <>
            { list }
            </>
        );
    }

    // onAddBooking = () => {
    //   console.log(this.state.startDate);
    //    }       
};
// const dataBooking = [];


// const mapStateToPros = (state) => {
//     const {posts} = state;
//     return {posts}
// }

export default Details;