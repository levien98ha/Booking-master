import React, { Component } from 'react';
import Gallery1 from '../images/gallery_1.jpg';
import Gallery2 from '../images/gallery_2.jpg';
import Gallery3 from '../images/gallery_3.jpg';
import Gallery4 from '../images/gallery_4.jpg';

class Galeries extends Component {
    render() {
        return (
            <div className="gallery">
                <div className="gellery_control">
                    <img className="background_gallery" src={Gallery1}></img>
                    <img className="background_gallery" src={Gallery2}></img>
                    <img className="background_gallery" src={Gallery3}></img>
                    <img className="background_gallery" src={Gallery4}></img>
                </div>
            </div>
        )
    }
}

export default Galeries;