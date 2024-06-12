import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/Context/AuthContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ArticleBlock from './components/Blog/ArticleBlock/ArticleBlock';
import ArticleDetail from './components/Blog/ArticleDetail/ArticleDetail';
import Services from './components/Services/Services';
import CrewManagement from './components/Services/CrewManagement/CrewManagement';
import CrewManagementServices from './components/Services/CrewManagement/CrewManagementServices';
import CrewManningServices from './components/Services/CrewManagement/CrewManningServices';
import TrainingServices from './components/Services/TrainingServices/TrainingServices';
import TrainingCenters from './components/Services/TrainingServices/TrainingCenters';
import ManilaTrainingCenter from './components/Services/TrainingServices/ManilaTrainingCenter';
import ConstantaTrainingCenter from './components/Services/TrainingServices/ConstantaTrainingCenter';
import OdessaTrainingCenter from './components/Services/TrainingServices/OdessaTrainingCenter';
import ManilaInstructors from './components/Services/TrainingServices/ManilaInstructors';
import ConstantaInstructors from './components/Services/TrainingServices/ConstantaInstructors';
import OdessaInstructors from './components/Services/TrainingServices/OdessaInstructors';
import TrainingCourses from './components/Services/TrainingServices/TrainingCourses';
import MediaLibrary from './components/Services/TrainingServices/MediaLibrary';
import ContactTrainingTeam from './components/Services/TrainingServices/ContactTrainingTeam';
import PreVettingInspection from './components/Services/PreVettingInspection';
import MedicalServices from './components/Services/MedicalServices';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />}>
              <Route path="crew-management" element={<CrewManagement />}>
                <Route path="management-services" element={<CrewManagementServices />} />
                <Route path="manning-services" element={<CrewManningServices />} />
              </Route>
              <Route path="training-services" element={<TrainingServices />}>
                <Route path="centers" element={<TrainingCenters />}>
                  <Route path="manila" element={<ManilaTrainingCenter />} />
                  <Route path="manila/instructors" element={<ManilaInstructors />} />
                  <Route path="constanta" element={<ConstantaTrainingCenter />} />
                  <Route path="constanta/instructors" element={<ConstantaInstructors />} />
                  <Route path="odessa" element={<OdessaTrainingCenter />} />
                  <Route path="odessa/instructors" element={<OdessaInstructors />} />
                </Route>
                <Route path="courses" element={<TrainingCourses />} />
                <Route path="media-library" element={<MediaLibrary />} />
                <Route path="contact-team" element={<ContactTrainingTeam />} />
              </Route>
              <Route path="pre-vetting-inspection" element={<PreVettingInspection />} />
              <Route path="medical-services" element={<MedicalServices />} />
            </Route>
            <Route path="/news-events" element={<ArticleBlock />} />
            <Route path="/articles/:slug" element={<ArticleDetail />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
