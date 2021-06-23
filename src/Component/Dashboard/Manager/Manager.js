import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'

const Manager = () => {
    const [blogs, setBLogs] = useState([])

    const blogFetch = () => {
        fetch('http://localhost:5000/allBlog')
        .then(res =>  res.json())
        .then(data => setBLogs(data))
    }
    
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteBlog/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                alert('blog delete succesfully')
                blogFetch()
            }
        })
    }
    
        useEffect(() => {
            blogFetch()
        }, [])
    
    return (
        <div className='row m-auto'>
        <div className="col-md-2">
            <Sidebar />
        </div>
        <div className="col-md-10">
            <h2 className='text-center bg-dark text-white p-4'>MANAGER DETAILS</h2>
            <div className='row m-auto p-5 ' style={{ background: 'rgb(218, 218, 218)' }}>
                <table className='col-md-12'>
                    <tr>
                        <th className='py-2'>product id</th>
                        <th className='py-2'>title</th>
                        <th className='py-2'>action</th>
                    </tr>
                    {
                        blogs.map(blog => <tr className="table-data">
                            <td className='py-2'>{blog._id}</td>
                            <td className='py-2'>{blog.title}</td>
                            <td><FontAwesomeIcon onClick={() => handleDelete(blog._id)} style={{ color: 'red', cursor: 'pointer' }} icon={faTrashAlt} /></td>
                        </tr>)
                    }
                </table>
            </div>
        </div>
    </div>
    );
};

export default Manager;