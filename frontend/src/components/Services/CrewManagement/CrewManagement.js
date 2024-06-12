import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function CrewManagement() {
  return (
    <div>
      <h1>Crew Management Services</h1>
      <ul>
        <li>
          <Link to="/services/crew-management/management-services">Crew Management Services</Link>
        </li>
        <li>
          <Link to="/services/crew-management/manning-services">Crew Manning Services</Link>
        </li>
        <li>
          <Link to="/services/crew-management/contact-crew-team">Contact Our Crew Team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default CrewManagement;
