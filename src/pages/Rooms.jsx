import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import ListRooms from '../components/ListRooms';
import Pagination from '../components/Pagination';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Route } from 'react-router-dom'
const booking_list = {
    textAlign: 'center',
    marginBottom: '2em'
}


class Rooms extends Component {
<<<<<<< HEAD

    render(){
        var listproduct =
           this.props.posts.map(item => (
                <ListRooms id = {item.id}
                           price = {item.price}
                           image = {item.image}
                           categories = {item.categories}
                           path = {item.id}
=======
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            categories: [],
            rooms: [],
            categoryId: ''
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/rooms',
        })
            .then(response => {
                this.setState({
                    listProducts: response.data
                })
                console.log(this.state.listProducts)
            })
            .catch(error => {
                console.log(error);
        })  
        axios({
            method: 'GET',
            url: 'http://localhost:3000/categories',
        })
            .then(response => {
                this.setState({
                    categories: response.data
                })
            })
            .catch(error => {
                console.log(error);
            })
          
    }

    handleFilter = (event) => {
        const categoryId = event.target.value
        console.log(event.target.value);
        this.setState({
            categoryId: categoryId
        })
        axios({
            method: 'GET',
            url: `http://localhost:3000/rooms?categoryId=${categoryId}`,
        })
            .then(response => {
                this.setState({
                    listProducts: response.data
                })
                console.log(this.state.listProducts)
                
            })
            .catch(error => {
                console.log(error);
            })

    }
   
    render() {
        const { categoryId, categories, listProducts,rooms } = this.state
        const showProduct =
        this.state.listProducts.map(item =>
            (
                <ListRooms 
                    id={item.id}
                    price={item.price}
                    image={Booking1}
                    categories={item.name}
                    path={item.id}
>>>>>>> pull develop
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
                <TextField
                    select
                    value={categoryId}
                    label="Filter"
                    onChange={this.handleFilter}
                    fullWidth={true}
                >
                    {categories.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </TextField>

                < div className="booking_list" style={booking_list} >
                    <div className="row">
                        <div className="col">
                            <div className="booking_slider_container">
                                <div className="owl-carousel owl-theme booking_slider">
                                    {showProduct} 
                                    {/* <Route exact path="/rooms/:id" render={({match}) => (
                                  <listproduct post={this.state.listProducts.find(p => p.id === match.params.id)} />
                                )} /> */}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </ div>
                <Pagination />
                <Footer />
            </>
        )
    }
}



export default Rooms;
