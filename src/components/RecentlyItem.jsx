import React, { Component } from 'react';
import Booking1 from '../images/booking_1.jpg';
import Booking2 from '../images/booking_2.jpg';
import Booking3 from '../images/booking_3.jpg';

class RecentlyItem extends Component {
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

                                    <div className="booking_item">
                                        <img className="background_image" src={Booking1}></img>
                                        <div className="booking_overlay trans_200"></div>
                                        <div className="booking_price">$120/Night</div>
                                        <div className="booking_link"><a href="">Family Room</a></div>
                                    </div>
                                    <div className="booking_item">
                                        <img className="background_image" src={Booking2}></img>
                                        <div className="booking_overlay trans_200"></div>
                                        <div className="booking_price">$120/Night</div>
                                        <div className="booking_link"><a href="">Deluxe Room</a></div>
                                    </div>
                                    <div className="booking_item">
                                        <img className="background_image" src={Booking3}></img>
                                        <div className="booking_overlay trans_200"></div>
                                        <div className="booking_price">$120/Night</div>
                                        <div className="booking_link"><a href="">Single Room</a></div>
                                    </div>

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