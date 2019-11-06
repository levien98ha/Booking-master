import React, { Component } from 'react';
import Booking1 from '../images/booking_1.jpg';
import Booking2 from '../images/booking_2.jpg';
import Booking3 from '../images/booking_3.jpg';
import ListRooms from './ListRooms'
class RecentlyItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            image: this.props.image,
            price: this.props.price,
            categories: this.props.categories
        }
    }
    render() {
        return (
            < div className="booking" >
                <div className="container-booking">
                    <div className="row">
                        <div className="col">
                            <div className="booking_title text-center"><h2>Book a room</h2></div>
                            <div className="booking_text text-center">
                                <p className="picon">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit.</p>
                            </div>
                            <div className="booking_slider_container">
                                <div className="owl-carousel owl-theme booking_slider">
                                    
                                <ListRooms
                                     id = "1"
                                     price = "$150"
                                     image = {Booking1}
                                     categories = "Single Room"
                                />
                                 <ListRooms
                                     id = "2"
                                     price = "$250"
                                     image = {Booking2}
                                     categories = "Family Room"
                                />
                                 <ListRooms
                                     id = "3"
                                     price = "$450"
                                     image = {Booking3}
                                     categories = "Deluxe Room"
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default RecentlyItem;