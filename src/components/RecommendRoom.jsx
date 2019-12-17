import React, {Component} from 'react'
import axios from 'axios'

const stlyeLink = {
    color: 'black'
}

class RecommendRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            IdCategory: this.props.IdCategory,
            listRecommend: []
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: `http://localhost:3000/rooms?categoryId=${this.state.IdCategory}`,
        })
            .then(response => {
                this.setState({
                    listRecommend: response.data
                })
                console.log(this.state.listRecommend)
            })
            .catch(error => {
                console.log(error);
        })
    }

    render(){
        const arrayList = this.state.listRecommend.filter(item => item.id != this.state.id)
        const listRecommendShow =         
        arrayList.slice(0,3).map( (house) => (
            // <Link to= {`/blogs/${blog.id}`}>

             <a href= {`/rooms/${house.id}`}  style={stlyeLink} id={house.id}  > 
            <div className="recommendBlogHouse" id={house.id} value={house.id}>
                <img className="recommendImgHouse" src={house.imagesURL[0]}></img>
                <div className="recommendInfo">
                    <div className="recommendTitle">{house.name}</div>
                    <div className="recommendDate">{house.address}</div>
                </div>
            </div>         
            </a>
          //  {/* </a> */}
        ))
        return(
        <>
        {listRecommendShow}
        </>
        )
    }
}

export default RecommendRoom;