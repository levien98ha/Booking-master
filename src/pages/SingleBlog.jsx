import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Search from '../components/SearchBox';
import DetailsBlog from '../components/DetailsBlog';
import axios from 'axios';


class SingleBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            blogItem: [],
            id: this.props.id
        }
    }

    render(){
        return(
            <>
                <Hero hero="roomsHero">
                    <Banner title="Luxstay Room Vip" >
                        <Link to="/blogs" className="btn-primary">
                            Blog Now
                </Link>
                    </Banner>
                </Hero>
                {/* {postDetails} */}
                <DetailsBlog id={this.state.id}/>
                <Footer />
            </>
        )
    }
}

export default SingleBlog;