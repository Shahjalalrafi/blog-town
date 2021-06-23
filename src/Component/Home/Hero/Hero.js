import React from 'react';
import Img from '../../../Assets/Images/azamat-e-FP_N_InBPdg-unsplash.jpg'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className="container">
                <h6 className="text-white">Welcome to our <br /><h2 className={styles.heading}>BLOW TOWN</h2></h6>
                <div className="d-flex justify-content-around">
                    <div className="col-md-4 text-left">
                        <img style={{ height: "400px" }} className="img-fluid rounded shadow" src={Img} alt="img" />
                    </div>
                    <div className="col-md-4 text-right">
                        <img style={{ height: "400px" }} className="img-fluid rounded shadow" src={Img} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;