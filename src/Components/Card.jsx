import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoctorData from './list.json';
import './Card.css';

function Card() {
    const [filteredDoctors, setFilteredDoctors] = useState(DoctorData.doctors);
    const navigate = useNavigate();
    


    const DetailsClick = (index) => {
        navigate(`/doctor/${index}`);
    };

    const filterByCategory = (category) => {
        const filtered = DoctorData.doctors.filter(doctor => doctor.category === category);
        setFilteredDoctors(filtered);
    };

    return (
        <div className='bodyPart'>
                        <h1>Total Doctors in This Hospital: {DoctorData.doctors.length}</h1>
                        <h2>Doctors Displayed: {filteredDoctors.length}</h2>
            <div className='buttons text-center mb-4'>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => setFilteredDoctors(DoctorData.doctors)}>All</button>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => filterByCategory('Cardiologist')}>Cardiologist</button>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => filterByCategory('Heart Specialist')}>Heart Specialist</button>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => filterByCategory('Gynecologist')}>Gynecologist</button>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => filterByCategory('Dermatologist')}>Dermatologist</button>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => filterByCategory('Phychiatrist')}>Phychiatrist</button>
                <button className='btn btn-outline-success m-2 ctg' onClick={() => filterByCategory('Neurologist')}>Neurologists</button>

            </div>

            {/* Doctor Cards */}
            <div className='container'>
                <div className='row'>
                    {filteredDoctors.map((doctor, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                            <div className="card doctor-card">
                                <img src={doctor.image} alt={doctor.name} className='card-img-top doctor-image' />
                                <div className="card-body text-center">
                                    <h5 className='card-title name'>{doctor.name}</h5>
                                    <p className='card-text designation' style={{color:'green',fontWeight:'bold'}}>{doctor.designation}</p>
                                    <p className='card-text cat'>{doctor.category}</p>
                                    <button className='btn btn-primary' onClick={() => DetailsClick(index)}>Details</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
