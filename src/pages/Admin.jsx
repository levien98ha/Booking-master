import React, {Component} from 'react'
import Footer from '../components/Footer'
import Tab from '../admin/Tab'

class AdminPage extends Component{
  render(){
    return(
      <div className='admin-page'>
      <Tab></Tab>
      <Footer></Footer>
      </div>
    )
  }
}
export default AdminPage;
