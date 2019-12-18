import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import Details from '../components/DetailsRoom';
import axios from 'axios';
import RecommendRoom from '../components/RecommendRoom'

class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            category: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: `http://localhost:3000/rooms?id=${this.state.id}`,
        })
            .then(response => {
                this.setState({
                    category: response.data
                })
                console.log(this.state.category)
            })
            .catch(error => {
                console.log(error);
        })}

    render() {
        var getCategory = this.state.category.map(item => {
            return(
                <RecommendRoom id={item.id} IdCategory={item.categoryId} />
            )
        })
        return (
            <>
                <Hero hero="roomsHero">
                    <Banner title="Luxstay Room Vip" >
                        <Link to="/rooms" className="btn-primary">
                            Single Room
                </Link>
                    </Banner>
                </Hero>
                {/* {postDetails} */}
                <div className="singleHouse">
                    <Details id={this.state.id}/>
                    <div className="listRecommendHouse">
                        <h2>Recommend House</h2>
                        {getCategory}
                    </div>
                </div>
                <Footer />
            </>
        );
    }
}
export default SingleRoom;
