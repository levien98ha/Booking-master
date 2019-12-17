import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const style = {
  height: '80vh', width: '80vh'
}

export class Contact extends Component {

    static defaultProps = {
        center: {
          lat: 16.074339,
          lng: 108.150832
        },
        zoom: 17
      };

    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="Contact Us" >
                        <Link to="/contact-us" className="btn-primary">
                            Contact Us
                        </Link>
                </Banner>
            </Hero>
            <div className="contactContainer">
        <div className="ggMap" style={style}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key:  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={16.074339}
            lng={108.150832}   
          />
        </GoogleMapReact> */}
        <Map google={this.props.google} initialCenter={{
            lat: 16.074339,
            lng: 108.150832
          }} style={style} zoom={17}>
        <Marker
    name={'Da Nang University of Technology'}
    position={{lat: 16.074339, lng: 108.150832}} />
</Map>
      </div>
      <div className="contactInfo">
            <div className="contactItem">
                <h2 className="contactTilte">Group 3: </h2>
                <div className="contactItemInfo Name">NGUYỄN LÊ VIỄN</div>
                <div className="contactItemInfo Name">HOÀNG TẤN TRƯỜNG AN</div>
                <div className="contactItemInfo Name">LÊ XUÂN TÂN</div>
            </div>  
            <div className="contactItem">
                <h2 className="contactTilte">Address</h2>
                <div className="contactItemInfo">Da Nang University of Technology</div>
            </div> 
            <div className="contactItem">
                <h2 className="contactTilte">Contact Number</h2>
                <div className="contactItemInfo">(+84) 0345.920.977</div>
            </div> 
            <div className="contactItem">
                <h2 className="contactTilte">Email Address</h2>
                <div className="contactItemInfo">neo-group@real-estate.com</div>
            </div> 
      </div>
      </div>
      <Footer />
            </>
        )
    }
}

// export default Contact;


export default GoogleApiWrapper({
  apiKey: ("")
})(Contact)