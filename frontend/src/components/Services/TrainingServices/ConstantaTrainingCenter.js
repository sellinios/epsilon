import React from 'react';
import { Link } from 'react-router-dom';

function ConstantaTrainingCenter() {
  return (
    <div>
      <h1>Constanta - Veritas Maritime Training Center, Romania</h1>
      <p>Details about the training center in Constanta...</p>
      <h2>Portfolio</h2>
      <p>Details about the portfolio...</p>
      <h2>Training Accreditations</h2>
      <ul>
        <li>BV ISO 9001:2015</li>
        <li>BV QMS Certificate of Compliance</li>
        <li>BV Compliance Certificate for ME-C engine type courses</li>
        <li>Marshall Islands Accreditation</li>
        <li>Liberia Accreditation</li>
        <li>DNV GL Class A Certified Simulators</li>
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
      <Link to="/services/training-services/centers/constanta/instructors">Meet Our Instructors</Link>
      <h2>Visit Us</h2>
      <p>VERITAS MARITIME TRAINING CENTER</p>
      <p>111 Ion Lahovari Street, 900588, Constanta, Romania</p>
      <p>Email: info@vmtc.ro</p>
      <p>Phone: +40736367688</p>
    </div>
  );
}

export default ConstantaTrainingCenter;
