import React from 'react';
import './AboutUs.css';
import Welcome from './Welcome';
import About from './About';
import MissionVision from './MissionVision';
import Team from './Team';
import LeadershipTeam from './LeadershipTeam';
import Credentials from './Credentials';
import LocalDirectors from './LocalDirectors';
import FactsFigures from './FactsFigures';
import Achievements from './Achievements';
import CertificationMembership from './CertificationMembership';
import CommunityCSR from './CommunityCSR';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Welcome />
      <About />
      <MissionVision />
      <Team />
      <LeadershipTeam />
      <Credentials />
      <LocalDirectors />
      <FactsFigures />
      <Achievements />
      <CertificationMembership />
      <CommunityCSR />
    </div>
  );
};

export default AboutUs;
