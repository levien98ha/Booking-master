import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import ListRooms from '../components/ListRooms';
import Details from '../components/DetailsRoom';
import Booking3 from '../images/booking_3.jpg';

class SingleRoom extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     id: this.state.id,
        //     name: this.state.name,
        //     price: this.state.price,
        //     image: [],
        //     categories: this.state.categories,
        //     service: this.state.service,
        //     decription: this.state.decription,
        //     startDays: this.state.startDays
        // }
    }
    render() {
        return (
            <>
            <Hero hero="roomsHero">
            <Banner title="Luxstay Room Vip" >
                <Link to="/rooms" className="btn-primary">
                    Single Room
                </Link>
            </Banner>
        </Hero>
        <Details
           image = {Booking3}
           name = "Luxury Room is Beautiful"
           price = "$250"
           categories = "Deluxe Room"
           service = "- Wifi free "
           decription = "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Suspendisse sollicitudin velit sed leo."
        />
        <Footer />
        </>
        );
    }
}

export default SingleRoom;
