import React from 'react';
import CreateOrder from './CreateOrder';



const AdminPanel = ({ userId }) => {



    // Add CRUD operations here

    return (
        console.log("Admin Panel"),
        <div>
            <h1>Admin Panel</h1>
            <CreateOrder/>
            

        </div>
    );
};

        

export default AdminPanel;