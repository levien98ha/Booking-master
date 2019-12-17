import React, { Component } from 'react';
import axios from 'axios';
import Carousel from "react-multi-carousel";
import { FaMapMarkedAlt } from "react-icons/fa";
  const style = {
      margin: "10em"
  }

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productRooms:[],
            id: this.props.id,
        }
        console.log(this.state.id);
    }
    componentDidMount() {
        const id = this.state.id
        axios({
            method: 'GET',
            url: `http://localhost:3000/rooms?id=${id}`,
        })
            .then(response => {
                this.setState({
                    productRooms: response.data                 
                })
                console.log(this.state.product)
            })
            .catch(error => {
                console.log(error);
        })   
        console.log(this.props.id);
    }

    render() {
        const a = [];
        var slideImgae = this.state.productRooms.map((item) => 
          {return a.push.apply(a,item.imagesURL)}
            )
        console.log(a.length)
        
        var list = a.map((idImg) => (
            <img className="detailsShowItem" src={idImg}></img>
        ))

        var infoHouse = this.state.productRooms.map((infoItem) => {
            return(
                <div className="infoItemHouse">
                    <h2 className="infoItemName">{infoItem.name}</h2>
                    <div className="infoItemAddress">
                        <FaMapMarkedAlt size="35px"></FaMapMarkedAlt>
                        <p className="infoItemShowAddress">{infoItem.address}</p>
                    </div>
                    <div className="infoItemDecription">
                        <div className="infoItemDecription1">
                            <span className="infoSpan">PRICE:</span> 
                            <p className="infoItemShowPrice">{infoItem.price}</p> 
                        </div>
                        <div className="infoItemDecription2">
                            <span className="infoSpan">INFORMATION:</span> 
                            <p className="infoItemShowDecription">{infoItem.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
        
        return (
            <>
            <div>
            <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
            centerMode={false}
            className="detailsShowHouse"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1
                }
            }}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                    {list}
        </Carousel>
        <button className="addToCart">Buy Now</button>
        {infoHouse}
        </div>
            </>
        );
    }      
};

export default Details;