import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';


const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title="OUR ROOMS" >
                <Link to="/" className="btn-primary">
                    HOME
                </Link>

            </Banner>
        </Hero>
    )
}

export default Rooms
