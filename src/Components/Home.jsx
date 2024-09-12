import React , { useState} from 'react';
import './Home.css';
import DoctorData from './list.json';

function Home() {

    return (
        <div className="home">
            <div className="jumbotron text-center">
                <h1>Welcome to eHospital</h1>
                <p>Your health, our priority</p>
                <h2 className='length'>Total Doctors in This Hospital: {DoctorData.doctors.length}</h2>
                <a href='/doctors'><button className='btn' >Explore Doctors.</button></a>

            </div>
        </div>
    );
}

export default Home;
