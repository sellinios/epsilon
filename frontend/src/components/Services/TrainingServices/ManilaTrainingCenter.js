import React from 'react';
import { Link } from 'react-router-dom';

function ManilaTrainingCenter() {
  return (
    <div>
      <h1>Manila - Veritas Maritime Training Center, The Philippines</h1>
      <p>Details about the training center in Manila...</p>
      <h2>Portfolio</h2>
      <p>Details about the portfolio...</p>
      <h2>Training Accreditations</h2>
      <ul>
        <li>BV ISO 9001:2015</li>
        <li>BV QMS Certificate of Compliance</li>
        <li>BV Compliance Certificate for ME-C engine type courses</li>
        <li>Marshall Islands Accreditation</li>
        <li>Liberia Accreditation</li>
        <li>MARINA Approval SSO</li>
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
      <Link to="/services/training-services/centers/manila/instructors">Meet Our Instructors</Link>
      <h2>Visit Us</h2>
      <p>VMTC ELECTRONIC ENGINE ME-C SITE:</p>
      <p>Ground Floor Atlantis Beacon Tower Corp.</p>
      <p>Zone 079, 2315 Leon Guinto St, Malate, Manila, 1004 Metro Manila</p>
      <p>Phone: (02) 553-4709</p>
      <p>VERITAS MARITIME TRAINING CENTER</p>
      <p>Atlantis Beacon Tower Corp.</p>
      <p>Zone 079, 2315 Leon Guinto St, Malate, Manila, 1004 Metro Manila</p>
      <p>Email: info@veritasmtc.com.ph</p>
      <p>Phone: +632 8 260 76 67</p>
    </div>
  );
}

export default ManilaTrainingCenter;
