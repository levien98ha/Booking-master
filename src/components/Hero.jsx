import React from 'react'

export default function Hero(props) {
    const {hero, children} = props;
    return (    
            <slider className={hero}>
               <slide>{children} </slide>
               <slide>{children} </slide>
               <slide>{children} </slide>
               <slide>{children} </slide>
            </slider>  
    )
}
Hero.defaultProps = {
    hero: 'defaultHero',
}