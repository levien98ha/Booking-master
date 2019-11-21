import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import Details from '../components/DetailsRoom';
import { connect } from 'react-redux';

class SingleRoom extends Component {
 
    render() {
        const post = this.props.post ? (<Details
            image={this.props.post.image}
            name={this.props.post.name}
            price={this.props.post.price}
            categories={this.props.post.categories}
            service={this.props.post.service}
            decription={this.props.post.decription}
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
                {post}
                <Footer />
            </>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id
    return {
        post: state.posts.find(post => post.id === id)
    }
}
export default connect(mapStateToProps)(SingleRoom);
