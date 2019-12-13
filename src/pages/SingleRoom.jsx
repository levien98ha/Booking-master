import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import Details from '../components/DetailsRoom';
import axios from 'axios';

class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: [],
            id: this.props.id
        }
    }
    
    componentDidMount() {
        const id = this.state.id
        axios({
            method: 'GET',
            url: `http://localhost:3000/rooms?id=${id}`,
        })
            .then(response => {
                this.setState({
                    post: response.data
                })
                console.log(this.state.product)
            })
            .catch(error => {
                console.log(error);
        })   
        console.log(this.props.id);
    }

    render() {
        // let id = ownProps.match.params.id
        const postDetails = this.state.post ? (<Details
            id={this.state.post.id}
            image={this.state.post.image}
            name={this.state.post.name}
            price={this.state.post.price}
            categories={this.state.post.categories}
            service={this.state.post.service}
            decription={this.state.post.decription}
        />) : (<div>Loading........</div>)
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
                <Details id={this.state.id}/>
                <Footer />
            </>
        );
    }
}
// const mapStateToProps = (state, ownProps) => {
//     let id = ownProps.match.params.id
//     const posts = this.state.post;
    

//     return {
//         post: state.posts.find(post => post.id === id)
//     }
// }
export default SingleRoom;
