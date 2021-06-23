import React from 'react';
import Sidebar from '../Sidebar/Sidebar'

const AdminPanel = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div>
                <h2>TO SEE ANYTHING CLICK ON LEFT SIDEBAR</h2>
            </div>
        </div>
    );
};

export default AdminPanel;