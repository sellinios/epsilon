import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Services.css';  // Import custom CSS
import crewImage from './images/crew-management.jpg';
import trainingImage from './images/training-services.jpg';
import inspectionImage from './images/pre-vetting-inspection.jpg';
import medicalImage from './images/medical-services.jpg';

function Services() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Our Services</h1>
      <div className="row">
        <div className="col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card service-card w-100">
            <img src={crewImage} className="card-img-top" alt="Crew Management & Manning Services" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Crew Management & Manning Services</h5>
              <Link to="/services/crew-management" className="btn btn-primary mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card service-card w-100">
            <img src={trainingImage} className="card-img-top" alt="Training Services" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Training Services</h5>
              <Link to="/services/training-services" className="btn btn-primary mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card service-card w-100">
            <img src={inspectionImage} className="card-img-top" alt="Pre-Vetting Inspection" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Pre-Vetting Inspection</h5>
              <Link to="/services/pre-vetting-inspection" className="btn btn-primary mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 mb-4 d-flex">
          <div className="card service-card w-100">
            <img src={medicalImage} className="card-img-top" alt="Medical Services" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Medical Services</h5>
              <Link to="/services/medical-services" className="btn btn-primary mt-auto">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;
