import React from 'react';
import { Link } from 'react-router-dom';

function OdessaTrainingCenter() {
  return (
    <div>
      <h1>Odessa - Epsilon Maritime Training and Educational Center, Ukraine</h1>
      <p>Details about the training center in Odessa...</p>
      <h2>Portfolio</h2>
      <p>Details about the portfolio...</p>
      <h2>Training Accreditations</h2>
      <ul>
        <li>BV ISO 9001:2015</li>
        <li>BV QMS Certificate of Compliance</li>
        <li>State Certificate of Compliance</li>
        <li>Marshall Islands Accreditation</li>
        <li>Liberia Accreditation</li>
        <li>TRANSAS Simulators Approval Certificate</li>
      </ul>
      <h2>Syllabus</h2>
      <p>Details about the syllabus...</p>
      <h2>Gear - Equipment</h2>
      <p>Details about the gear and equipment...</p>
      <h2>Media Library</h2>
      <p>Details about the media library...</p>
      <h2>News</h2>
      <p>Latest news...</p>
      <h2>Our Instructors</h2>
      <Link to="/services/training-services/centers/odessa/instructors">Meet Our Instructors</Link>
      <h2>Visit Us</h2>
      <p>EPSILON MARITIME TRAINING AND EDUCATIONAL CENTER</p>
      <p>Frantsuz’ky Blvd, 54/23, Odesa, Odes’ka oblast, Ukraine, 65000</p>
      <p>Email: training@epsilonhellas.com.ua</p>
      <p>Phone: +380 48 728 00 62</p>
      <p>Fax: +380 48 728 00 54</p>
    </div>
  );
}

export default OdessaTrainingCenter;
