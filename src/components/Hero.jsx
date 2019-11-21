import React from 'react'


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