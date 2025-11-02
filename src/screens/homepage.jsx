import React from "react";
import LevelMap from "../components/LevelMap.jsx";
import "./homepage.css";
import Sidebar from "../components/Sidebar";
import StudyMatch from "../components/StudyMatch.jsx";
import '../screens/progress.jsx';
import { useNavigate } from "react-router-dom";
import img from '../images/real.jpeg';

function Homepage() {
  const navigate = useNavigate();
  const image = img;

  const appliances = [
    {
      name: "Refrigerator",
      lifetimePower: "1500 kWh",
      monthlyPower: "120 kWh",
      status: "good"
    },
    {
      name: "Washing Machine",
      lifetimePower: "800 kWh",
      monthlyPower: "80 kWh",
      status: "moderate"
    },
    {
      name: "Air Conditioner",
      lifetimePower: "2000 kWh",
      monthlyPower: "150 kWh",
      status: "change"
    },
    {
      name: "Microwave",
      lifetimePower: "300 kWh",
      monthlyPower: "25 kWh",
      status: "good"
    }
  ];

  return (
    <div className="homepage-container">
      <title>RentOS</title>
      <Sidebar />
      <div className='home-button'>
        <button onClick={() => navigate('/progress')}>← User Dashboard</button>
      </div>
      
      {/* Space for image - first screen */}
      <div className="image-placeholder">
        <div className="image-wrapper">
          <img src={image} alt="Home" className="home-image" />
          <div className="image-overlay"></div>
        </div>
      </div>
      
      {/* Dashboard data - second screen */}
      <div className="dashboard">
        <div className="dashboard-header">
          <h1 className="user-name">John Smith</h1>
          <p className="dashboard-subtitle">Energy Consumption Overview</p>
        </div>
        <div className="cards-container">
          {appliances.map((appliance, index) => (
            <div key={index} className={`card ${appliance.status}`}>
              <div className="card-header">
                <h3>{appliance.name}</h3>
                <div className={`status-indicator ${appliance.status}`}></div>
              </div>
              <div className="card-content">
                <div className="power-stat">
                  <span className="stat-label">Lifetime</span>
                  <span className="stat-value">{appliance.lifetimePower}</span>
                </div>
                <div className="power-stat">
                  <span className="stat-label">Monthly</span>
                  <span className="stat-value">{appliance.monthlyPower}</span>
                </div>
              </div>
              <div className={`status-badge ${appliance.status}`}>
                {appliance.status === 'good' && '✓ Optimal'}
                {appliance.status === 'moderate' && '⚠ Monitor'}
                {appliance.status === 'change' && '⚡ Action Needed'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;