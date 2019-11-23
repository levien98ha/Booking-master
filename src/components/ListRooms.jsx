import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
const categories = {
    marginTop: '4em'
}


class ListRooms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            image: this.props.image,
            price: this.props.price,
            categories: this.props.categories,
            path: 'rooms/'+this.props.id
        }
        console.log(this.props.id)
    }

    getID = (event) => {
        const dataSource = [...this.props.posts];
        let i = event.target.value;
        this.setState({ id: dataSource.filter(item => item.key === i) });
        console.log(this.state.id)
    }
    render() {
        return (
            <div className="booking_item" id={this.state.id}>
                <img className="background_image" src={this.state.image}></img>
                <div className="booking_overlay trans_200"></div>
                <div className="booking_price">{this.state.price}</div>
                <div className="booking_price" style={categories}>{this.state.categories}</div>
                <div className="booking_link"> <Link to={this.state.path} onClick={this.getID}><a>Book Now</a></Link></div>
            </div>
        )
    }
}
const mapStateToPros = (state) => {
    const {posts} = state;
    return {posts}
}
export default connect(mapStateToPros)(ListRooms);