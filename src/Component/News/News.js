import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
const News = () => {

    return (
        <div className="news">
            <div className="left-half">
                <h1>COX'S BAZAR</h1>
                <p>Cox's Bazar is a city,fishing port,tourism center and district headquarters in southeastern Bangladesh. It is famous mostly for its natural sandy beach, and it...</p>
                <Link to='/contact'>
                    <Button variant="contained" className='logBtn' color="primary" href="#contained-buttons">Booking<i className="fa fa-arrow-right"></i></Button>
                </Link>
            </div>
            <div className="right-half">
                <div className="card activeCard">
                    <div className="overlay">
                        <h3>COX'S BAZAR</h3>
                    </div>
                </div>
                <div className="card scnCard">
                    <div className="overlay">
                        <h3>SREEMONGOL</h3>
                    </div>
                </div>
                <div className="card trdCard">
                    <div className="overlay">
                        <h3>SUNDARBAN</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;