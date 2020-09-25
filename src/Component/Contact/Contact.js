import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {

    const handleBooking = () => {
        
    }

    return (
        <div className='booking'>
            <div className="booking-form">
                <form onSubmit={handleBooking}>
                    <label for="origin">Origin</label>
                    <input type="text" name="origin" required/>
                    <label for="destination">Destination</label>
                    <input type="text" name="destination" required/>
                    <label for="form">Form</label>
                    <input type="date" name="date" required/>
                    <label for="to">To</label>
                    <input type="date" name="to" required/>
                    <Link to="/Login">
                        <input type="submit" value="Start Booking"/>
                    </Link>
                </form>
            </div>            
        </div>
    );
};

export default Contact;