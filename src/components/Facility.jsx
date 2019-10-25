import React, { Component } from 'react';
import Resort from '../images/resort.png';
import Pool from '../images/pool.png';
import Sunbath from '../images/sunbath.png';

class Facility extends Component {
    render() {
        return (
            <div className="facilities">
                <div className="container">
                    <div className="row icon_box_row">
                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={Resort} alt=""></img></div>
                                <div className="icon_box_title"><h2>Beautiful Rooms</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={Pool} alt=""></img></div>
                                <div className="icon_box_title"><h2>Swimming Pool</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="icon_box text-center">
                                <div className="icon_box_icon"><img className="iconHome" src={Sunbath} alt=""></img></div>
                                <div className="icon_box_title"><h2>Luxury Resort</h2></div>
                                <div className="icon_box_text">
                                    <p className="picon">In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Facility;