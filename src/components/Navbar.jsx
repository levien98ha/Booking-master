import React, { Component } from 'react'
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
        }
    }
    handleChange = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
           <nav className="navbar">
               <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <p className="nav-title"> NEO Group. </p>
                    </Link>
                    <button 
                    className="nav-btn" 
                    onClick={this.handleChange}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>    
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/rooms">Buy</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link to="/about-us">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign-Up</Link>
                    </li>
                </ul>
               </div>

           </nav>
        )
    }
}
