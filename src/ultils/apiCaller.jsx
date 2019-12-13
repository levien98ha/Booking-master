import axios from 'axios'
import * as Config from './../constants/Config';

export default function callApi(endpoint, method='GET',body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data:body
    })
        // .then(response => {
        //     this.setState({
        //         listProducts: response.data
        //     })
        //     console.log(this.state.listProducts)
        // })
        .catch(error => {
            console.log(error);
    })  
}

// export default function callApiCategory(endpoint, method='GET',body){
//     axios({
//         method: 'GET',
//         url: 'http://localhost:3000/categories',
//     })
//         .then(response => {
//             this.setState({
//                 categories: response.data
//             })
//         })
//         .catch(error => {
//             console.log(error);
//         })
// }