import React from 'react';
import AddBlog from '../AddBlog/AddBlog';
import AdminPanel from '../AdminPanel/AdminPanel';
import Manager from '../Manager/Manager';
import Sidebar from '../Sidebar/Sidebar'

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div>
                <Manager />
            </div>
        </div>
    );
};

export default Dashboard;