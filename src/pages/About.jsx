import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Customer from '../components/Customer'
import CountUpFooter from '../components/CountUpFooter'

export class About extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="About Us" >
                        <Link to="/about-us" className="btn-primary">
                            About Us
                        </Link>
                </Banner>
            </Hero>
            <h1 className="aboutTilte">Welcome to NEO Group Real Estate Agency</h1>
            <div className="infoAbout">
                <ReactPlayer url='https://www.youtube.com/watch?v=npSK67U4ImA?t=5' playing={false} controls className="playVideo"/>
                <div className="aboutDecription">
                    On her way she met a copy. The copy warned the Little Blind Text, that 
                    where it came from it would have been rewritten a thousand times and 
                    everything that was left from its origin would be the word "and" and 
                    the Little Blind Text should turn around and return to its own, safe 
                    country. But nothing the copy said could convince her and so it didn’t 
                    take long until a few insidious Copy Writers ambushed her, made her drunk 
                    with Longe and Parole and dragged her into their agency, where they abused 
                    her for their.When she reached the first hills of the Italic Mountains, she 
                    had a last view back on the skyline of her hometown Bookmarksgrove, the 
                    headline of Alphabet Village and the subline of her own road, the Line Lane. 
                    Pityful a rethoric question ran over her cheek, then she continued her way.
                    When she reached the first hills of the Italic Mountains, she had a last view 
                    back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet
                    Village and the subline of her own road.
                </div>
            </div>
            <div className="aboutText">
            <div className="aboutItem">
                <h2 className="aboutTilte1">MISSION</h2>
                <div className="aboutSay">A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            </div>  
            <div className="aboutItem">
                <h2 className="aboutTilte1">VISSION</h2>
                <div className="aboutSay">A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            </div> 
            <div className="aboutItem">
                <h2 className="aboutTilte1">NEO GROUP</h2>
                <div className="aboutSay">A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</div>
            </div> 
            </div>
            <Customer />
			<CountUpFooter />
            <Footer />
            </>
        )
    }
}

export default About
