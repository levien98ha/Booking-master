import React from 'react'
import IMG1 from '../images/1.jpg';
import IMG2 from '../images/2.jpg';
import IMG3 from '../images/3.jpg';
import IMG4 from '../images/4.jpg';

export default function Hero(props) {
    const {hero, children} = props;
    return (    
            <slider className={hero}>
               <slide className="heroSlide">{children} </slide>
               <slide className="heroSlide">{children} </slide>
               <slide className="heroSlide">{children} </slide>
               <slide className="heroSlide">{children} </slide>
            </slider>  
    )
}
Hero.defaultProps = {
    hero: 'defaultHero',
}