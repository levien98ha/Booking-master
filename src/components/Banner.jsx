import React, {Component} from 'react'


export default function Banner(props) {
    const {title, subtitle, children} = props;
    return (
        <div className="banner">
            <p className="welcome">Welcome to Beach Resort</p>
           <h1> { title} </h1>
           <p>{subtitle}</p>
           {children}
        </div>
    )
}