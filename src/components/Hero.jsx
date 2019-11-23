import React from 'react'
<<<<<<< HEAD

=======
// import IMG1 from '../images/1.jpg';
// import IMG2 from '../images/2.jpg';
// import IMG3 from '../images/3.jpg';
// import IMG4 from '../images/4.jpg';
>>>>>>> pull develop

export default function Hero(props) {
    const {hero, children} = props;
    return (    
            <lider className={hero}>
               <slide className="heroSlide">{children} </slide>
               <slide className="heroSlide">{children} </slide>
               <slide className="heroSlide">{children} </slide>
               <slide className="heroSlide">{children} </slide>
            </lider>  
    )
}
Hero.defaultProps = {
    hero: 'defaultHero',
}