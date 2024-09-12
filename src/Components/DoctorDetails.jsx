import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import DoctorData from './list.json';  
import './DoctorDetails.css';  

function DoctorDetails() {
    const { id } = useParams();
    const doctor = DoctorData.doctors[id];

    const navigate = useNavigate();
    


    const DetailsClick2 = (index) => {
        navigate(`/doctor/${index}`);
    };

    // Filter doctors from the same category, excluding the current doctor
    const sameCategoryDoctors = DoctorData.doctors.filter(doc => doc.category === doctor.category && doc !== doctor);

    return (
        <div className='details-page'>
            <div className="doctor-details">
                <img src={doctor.image} alt={doctor.name} className='doctor-image' />
                <h1 className='name'>{doctor.name}</h1>
                <h2 className='desig'>{doctor.designation}</h2>
                <h3>{doctor.category}</h3>
                <p>{doctor.address}</p>
                <p>{doctor.study_background}</p>
                <p>{doctor.details}</p>
                <p>Phone: {doctor.phone.join(', ')}</p>
                <button className='btn'>Book Now</button>
            </div>

            <h1 style={{color: 'green', textAlign:'center'}}>Doctors of {doctor.category} Specialist</h1>
            
            {sameCategoryDoctors.length > 0 ? (
                <div className='container'>
                    <div className='row'>
                        {sameCategoryDoctors.map((doctor, index) => (
                            <div key={index} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                <div className="card doctor-card">
                                    <img src={doctor.image} alt={doctor.name} className='card-img-top doctor-image' />
                                    <div className="card-body text-center">
                                        <h5 className='card-title name'>{doctor.name}</h5>
                                        <p className='card-text designation' style={{color:'green',fontWeight:'bold'}}>{doctor.designation}</p>
                                        <p className='card-text cat'>{doctor.category}</p>
                                        <button className='btn btn-primary' onClick={() => DetailsClick2(index)}>Details</button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p style={{textAlign: 'center'}}>No other doctors available in this category.</p>
            )}
        </div>
    );
}

export default DoctorDetails;
