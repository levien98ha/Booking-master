import React, {Component} from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
import axios from 'axios'

const cols = {
  sold: { alias: 'Số Lượng' },
  genre: { alias: 'Loại' }
};


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            category: '',
            house: '',
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/rooms',
        })
        .then(response => {
            this.setState({
                house: response.data.length
            })
        })
        axios({
            method: 'GET',
            url: 'http://localhost:3000/categories',
        })
        .then(response => {
            this.setState({
                category: response.data.length
            })
        })
        axios({
            method: 'GET',
            url: 'http://localhost:3000/users',
        })
        .then(response => {
            this.setState({
                user: response.data.length
            })
        })
        
    }
    render(){
        const data= [ { genre: 'Users', sold: this.state.user, income: 2300 },
                      { genre: 'Categories', sold: this.state.category, income: 2300 },
                      { genre: 'Houses', sold: this.state.house, income: 2300 },]
                      console.log(data)
        return(
            <div className='dashboard'>
            <div>Bảng thống kê</div>
            <Chart width={600} height={400} data={data} scale={cols}>
                <Axis name="genre" title />
                <Axis name="sold" title />
                <Legend position="top" dy={-1} />
                <Tooltip />
                <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
            </div>
        )
    }
}

export default Dashboard;
