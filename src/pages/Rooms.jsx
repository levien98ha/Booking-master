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
const booking_list = {
    textAlign: 'center',
    marginBottom: '2em'
}


class Rooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: [
                {
                    id: '1',
                    price: "$150",
                    image: Booking1,
                    categories: "Single Room"
                },
                {
                    id: '2',
                    price: "$150",
                    image: Booking2,
                    categories: "Single Room"
                },
                {
                    id: '3',
                    price: "$150",
                    image: Booking3,
                    categories: "Single Room"
                },  {
                    id: '4',
                    price: "$150",
                    image: Booking1,
                    categories: "Single Room"
                },
                {
                    id: '5',
                    price: "$150",
                    image: Booking2,
                    categories: "Single Room"
                },
                {
                    id: '6',
                    price: "$150",
                    image: Booking3,
                    categories: "Single Room"
                }
            ]
        }
    }
    
    render(){
        var listproduct =
           this.state.product.map(item => (
                <ListRooms id = {item.id}
                           price = {item.price}
                           image = {item.image}
                           categories = {item.categories}
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

export default Rooms;
