import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import ListRooms from '../components/ListRooms';
import Booking1 from '../images/booking_1.jpg';
import Booking2 from '../images/booking_2.jpg';
import Booking3 from '../images/booking_3.jpg';
import Pagination from '../components/Pagination';
import { connect } from 'react-redux';
import {Route} from 'react-router-dom'
const booking_list = {
    textAlign: 'center',
    marginBottom: '2em'
}


class Rooms extends Component {
    constructor(props){
    super(props);
    }
    
    render(){
        var listproduct =
           this.props.posts.map(item => (
                <ListRooms id = {item.id}
                           price = {item.price}
                           image = {item.image}
                           categories = {item.categories}
                           path = {item.id}
                />
                ));
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Luxstay Room Vip" >
                    <Link to="/rooms" className="btn-primary">
                        Our Rooms
                </Link>
                </Banner>
            </Hero>

            < div className="booking_list" style={booking_list} >
                <div className="row">
                    <div className="col">
                        <div className="booking_slider_container">
                            <div className="owl-carousel owl-theme booking_slider">
                              {listproduct} 
                              <Route exact path="/rooms/:id" render={({match}) => (
                                  <listproduct post={this.props.posts.find(p => p.id === match.params.id)} />
                                )} />
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
            <Pagination/>
            <Footer />
        </>
    )
}}

const mapStateToPros = (state) => {
    const {posts} = state;
    return {posts}
}

export default connect(mapStateToPros)(Rooms);
