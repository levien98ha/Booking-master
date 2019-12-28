import React, {Component} from 'react'
import axios from 'axios'
import { FaUserCheck } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

class ItemCount extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            category: '',
            house: '',
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/rooms',
        })
        .then(response => {
            this.setState({
                house: response.data.length
            })
        })
        axios({
            method: 'GET',
            url: 'http://localhost:3000/categories',
        })
        .then(response => {
            this.setState({
                category: response.data.length
            })
        })
        axios({
            method: 'GET',
            url: 'http://localhost:3000/users',
        })
        .then(response => {
            this.setState({
                user: response.data.length
            })
        })
        
    }
    render(){
        return(
            <>
              <div className='item-count'>
                  <div className='user-count'>
                      <div className='icon-count-red'>
                          <FaUserCheck size='2.5em'></FaUserCheck>
                      </div>
                      <div className='count-info'>
                      <div className='count-title'>User</div>
                     <div className='count-number'>{this.state.user}</div>
                     </div>
                  </div>
                  <div className='category-count'>
                        <div className='icon-count-yellow'>
                          <GiFamilyHouse size='2.5em'></GiFamilyHouse>
                      </div>
                      <div className='count-info'>
                      <div className='count-title'>Category</div>
                     <div className='count-number'>{this.state.category}</div>
                     </div>
                  </div>
                  <div className='house-count'>
                        <div className='icon-count-green'>
                          <FaBars size='2.5em'></FaBars>
                      </div>
                      <div className='count-info'>
                      <div className='count-title'>House</div>
                     <div className='count-number'>{this.state.house}</div>
                     </div>
                  </div>
              </div>
            </>
        )
    }
}
export default ItemCount;