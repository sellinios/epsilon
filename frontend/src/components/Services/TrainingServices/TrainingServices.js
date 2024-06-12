import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function TrainingServices() {
  return (
    <div>
      <h1>Training Services</h1>
      <p>People matter – this is our fundamental belief. Thus, we consider their training as an integral part of our crewing business. It is of utmost importance for the safety and smooth sailing of our vessels and this attracts our unconditional attention.</p>
      <p>In that respect, we operate a dedicated In-House Training & Q.A. department and we make extensive use of Bridge & Engine Simulators and CB training in all our offices.</p>
      <p>Our training centers are equipped with state-of-the-Art equipment, modern facilities, and experienced instructors to provide high quality maritime training. We offer a wide range of courses designed to enhance the skills and knowledge of seafarers, according to the latest industry practices and technologies.</p>
      <p>Currently Epsilon Operates three main Training Centers. in Manila, Constanta and Odessa, along with on On-Line Training Courses, featuring:</p>
      <ul>
        <li>Full mission dual Bridge and Engine simulators which can work in integration</li>
        <li>2-stroke, 6-cylinder Electronic Engine Room System (ME-C)</li>
        <li>Representation of all major ECDIS Manufacturers, Transas, JRC, FURUNO, DANELEC and INTERMARINE</li>
        <li>A comprehensive list of courses taught by highly experienced instructors</li>
        <li>Additionally, the Veritas Maritime Training Center offers Planned Maintenance System (PMS) Training based on Microsoft NAVDynamics, Benefit, Kapa and Danaos.</li>
      </ul>
      <ul>
        <li>
          <Link to="centers">Our Training Centers</Link>
        </li>
        <li>
          <Link to="courses">Training Courses</Link>
        </li>
        <li>
          <Link to="media-library">Media Library</Link>
        </li>
        <li>
          <Link to="contact-team">Contact our Training Team</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default TrainingServices;
