import React from 'react';
import { faBookOpen, faConciergeBell, faGripHorizontal, faList, faPlusCircle, faSearch, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <section className='sidenav'>
            <ul className="list-unstyled">

                <Link to='/' className='text-decoration-none'>
                    <FontAwesomeIcon icon={faBookOpen} />BLOG TOWN 
                </Link>

                <div>
                    <Link to='/addBlog'>
                        <li><FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: '10px' }} />ADD BLOG</li>
                    </Link>

                    <Link to='/make-admin'>
                        <li><FontAwesomeIcon icon={faUserShield} style={{ marginRight: '10px' }} />Make Admin</li>
                    </Link>

                    <Link to='/manager'>
                        <li><FontAwesomeIcon icon={faConciergeBell} style={{ marginRight: '10px' }} />MANAGE BLOGS</li>
                    </Link>
                </div>
            </ul>
        </section>
    );
};

export default Sidebar;