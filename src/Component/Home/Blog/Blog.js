import React, { useEffect, useState } from 'react';
import BlogDetails from './BlogDetails';

const Blog = () => {
    const [blogs, setBLogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allBlog')
        .then(res =>  res.json())
        .then(data => setBLogs(data))
    }, [])


    return (
        <div className="container">
            <h2>OUR LATEST BLOG</h2>
            <h6>YOU CAN LEARN A BUNCH OF THING FROM OUR BLOG TOWN...... </h6>
            <p>to support us please share our blog town to your friends , relative or your know person..</p>
            <div className="row">
            {
                blogs.map(blog => {
                   return <BlogDetails key={blog._id} blog={blog} />
                })
            }
            </div>
        </div>
    );
};

export default Blog;