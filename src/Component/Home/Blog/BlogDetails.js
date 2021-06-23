import React from 'react';
import {Link} from 'react-router-dom'

const BlogDetails = ({blog}) => {

    const {title, content, image, _id} = blog

    return (
        <div className="col-md-4">
            <div className="card">
                <img className='img-fluid card-img-top' src={image} alt={title} />
                <div className="card-body">
                    <Link to={`/blog/:${_id}`}><h4 className="card-title">{title}</h4></Link>
                    <p className="card-text text-start">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;