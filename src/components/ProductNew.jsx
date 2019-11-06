import React, {Component} from 'react';

const brayy = [1,2,3,4,5,6];
const ArrayA = brayy.map(item =>{
    return <li>{item}</li>
})
class ProductNew extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        return(
            <div>
                {ArrayA}
            </div>

        )
    }
}
export default ProductNew;