  import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import ListRooms from '../components/ListRooms'
import Pagination from '../components/Pagination';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import { Route } from 'react-router-dom'

// import firebase from "firebase";
// import FileUploader from "react-firebase-file-uploader";

const booking_list = {
    textAlign: 'center',
    marginBottom: '2em'
}


class Rooms extends Component {
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
                console.log(this.state.categories)
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
    handleReset = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/rooms',
        })
            .then(response => {
                this.setState({
                    listProducts: response.data,
                    categoryId: ''
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
                    images={item.imagesURL}
                    categories={item.name}
                    path={item.id}      
                />
            ));
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="Buy your Home" >
                            <Link to="/rooms" className="btn-primary">
                                Buy Now
                            </Link>
                    </Banner>
                </Hero>
                <div className="search">
                <TextField
                    select
                    value={categoryId}
                    label="Filter Categories"
                    className="fillterSeleted"
                    onChange={this.handleFilter}
                >
                    {categories.map(item => (
                        <MenuItem key={item.id} value={item.id}>
                            {item.name}
                        </MenuItem>
                    ))}
                </TextField>
                <div style={{width:'1.5em'}}></div>
                <Button className="btnReset"  variant="contained" color="secondary" onClick={this.handleReset}>Reset</Button>
                </div>
                < div className="booking_list" style={booking_list} >
                    <div className="row">
                        <div className="col">
                            <div className="booking_slider_container">
                                <div className="owl-carousel owl-theme booking_slider">
                                    {showProduct} 
                                    <Route exact path="/rooms/:id" render={({match}) => (
                                  <listproduct post={this.state.listProducts.find(p => p.id === match.params.id)} />
                                )} />
                                    
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
