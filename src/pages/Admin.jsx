import React from 'react';
import Tabs from '../components/Admin/Tabs';
import AdminRoom from '../components/Admin/AdminRoom';
import AdminUser from '../components/Admin/AdminUser'
import AdminCategory from '../components/Admin/AdminCategory'
function AdminTab() {
    return (
        <div className="adminTabPage">
        <h1>ADMIN MANAGERMENT</h1>
       <Tabs>
        <div label="User">
          <AdminUser />
        </div>
        <div label="Rooms">
          <AdminRoom/>
        </div>
        <div label="Categories">
         <AdminCategory/>
        </div>
      </Tabs>
      </div>
    );
  }
  
  const container = document.createElement('div');
  document.body.appendChild(container);
  
  export default AdminTab;