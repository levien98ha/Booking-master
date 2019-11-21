import React from 'react';
import Tabs from '../components/Admin/Tabs';
import AdminRoom from '../components/Admin/AdminRoom';
function AdminTab() {
    return (
        <div className="adminTabPage">
        <h1>ADMIN MANAGERMENT</h1>
       <Tabs>
        <div label="User">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Rooms">
          <AdminRoom/>
        </div>
        <div label="Categories">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
      </div>
    );
  }
  
  const container = document.createElement('div');
  document.body.appendChild(container);
  
  export default AdminTab;