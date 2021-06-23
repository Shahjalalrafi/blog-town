import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <Link className='text-decoration-none' to='/'><h2 class="navbar-brand mt-1">BLOG TOWN</h2></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link className='text-decoration-none' to='/'><p class="nav-link pt-4 px-3">Home</p></Link>
                                </li>
                                <li class="nav-item">
                                    <Link className='text-decoration-none' to='/blog'><p class="nav-link pt-4 px-3">Blog</p></Link>
                                </li>
                                <li class="nav-item">
                                    <Link className='text-decoration-none' to='/feature'><p class="nav-link pt-4 px-3">feature</p></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;