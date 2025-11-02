import React, { useState } from 'react';
import './progress.css';
import { useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const fmtCurrency = (n) =>
  `₹${(n ?? 0).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
const fmtKwh = (n) => `${(n ?? 0).toLocaleString()} kWh`;

export default function Progress() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState('rent'); // 'rent' or 'charts'

  // Static tenant and rent data
  const tenantName = 'John Smith';
  const apartmentUnit = 'Apt 204B';
  const apartmentRent = 1800;
  const billingDate = 'November 15, 2025';
  const dueDate = 'November 30, 2025';

  // Static appliances data
  const appliances = [
    { name: 'Smart Refrigerator', rent: 45 },
    { name: 'Washer & Dryer Set', rent: 60 },
    { name: 'Dishwasher', rent: 35 },
  ];

  const totalApplianceRent = appliances.reduce((sum, app) => sum + app.rent, 0);
  const totalBill = apartmentRent + totalApplianceRent;

  // Static bar chart data for savings (cost comparison) - more variations
  const savingsBarData = [
    { month: 'Jan', 'With Our Appliances': 1940, 'Without Our Appliances': 2280 },
    { month: 'Feb', 'With Our Appliances': 1925, 'Without Our Appliances': 2310 },
    { month: 'Mar', 'With Our Appliances': 1955, 'Without Our Appliances': 2345 },
    { month: 'Apr', 'With Our Appliances': 1930, 'Without Our Appliances': 2295 },
    { month: 'May', 'With Our Appliances': 1945, 'Without Our Appliances': 2380 },
    { month: 'Jun', 'With Our Appliances': 1960, 'Without Our Appliances': 2420 },
    { month: 'Jul', 'With Our Appliances': 1975, 'Without Our Appliances': 2465 },
    { month: 'Aug', 'With Our Appliances': 1950, 'Without Our Appliances': 2440 },
    { month: 'Sep', 'With Our Appliances': 1935, 'Without Our Appliances': 2395 },
    { month: 'Oct', 'With Our Appliances': 1940, 'Without Our Appliances': 2405 },
    { month: 'Nov', 'With Our Appliances': 1955, 'Without Our Appliances': 2450 },
    { month: 'Dec', 'With Our Appliances': 1965, 'Without Our Appliances': 2485 },
  ];

  // Static line chart data for energy consumption - both start same, diverge upwards
  const energyLineData = [
    { month: 'Jan', 'With Our Appliances': 160, 'Without Our Appliances': 160 },
    { month: 'Feb', 'With Our Appliances': 165, 'Without Our Appliances': 172 },
    { month: 'Mar', 'With Our Appliances': 170, 'Without Our Appliances': 185 },
    { month: 'Apr', 'With Our Appliances': 173, 'Without Our Appliances': 195 },
    { month: 'May', 'With Our Appliances': 178, 'Without Our Appliances': 210 },
    { month: 'Jun', 'With Our Appliances': 182, 'Without Our Appliances': 225 },
    { month: 'Jul', 'With Our Appliances': 188, 'Without Our Appliances': 245 },
    { month: 'Aug', 'With Our Appliances': 192, 'Without Our Appliances': 260 },
    { month: 'Sep', 'With Our Appliances': 195, 'Without Our Appliances': 275 },
    { month: 'Oct', 'With Our Appliances': 200, 'Without Our Appliances': 295 },
    { month: 'Nov', 'With Our Appliances': 205, 'Without Our Appliances': 315 },
    { month: 'Dec', 'With Our Appliances': 210, 'Without Our Appliances': 340 },
  ];

  const handlePayment = () => {
    alert(`Payment of ${fmtCurrency(totalBill)} initiated!`);
  };

  if (currentPage === 'rent') {
    return (
      <>
        <div className="progress-page">
          <div className="page-nav">
            <button className="nav-btn active">Rent Details</button>
            <button className="nav-btn" onClick={() => setCurrentPage('charts')}>
              View Charts
            </button>
          </div>

          <div className="bill-container">
            {/* Left Half - Bill Header */}
            <div className="bill-header">
              <h1 className="bill-title">Rental Bill</h1>
              <div className="bill-info">
                <div className="info-row">
                  <span className="info-label">Tenant Name:</span>
                  <span className="info-value">{tenantName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Apartment Unit:</span>
                  <span className="info-value">{apartmentUnit}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Billing Date:</span>
                  <span className="info-value">{billingDate}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Due Date:</span>
                  <span className="info-value">{dueDate}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Apartment Rent:</span>
                  <span className="info-value">{fmtCurrency(apartmentRent)}</span>
                </div>
              </div>
            </div>

            {/* Right Half - Appliances Details */}
            <div className="bill-details">
              <h2 className="section-title">Appliances Details</h2>
              
              <div className="appliances-list">
                <div className="appliance-header">
                  <span className="col-count">No.</span>
                  <span className="col-name">Appliance Name</span>
                  <span className="col-rent">Monthly Rent</span>
                </div>

                {appliances.map((app, idx) => (
                  <div key={idx} className="appliance-row">
                    <span className="col-count">{idx + 1}</span>
                    <span className="col-name">{app.name}</span>
                    <span className="col-rent">{fmtCurrency(app.rent)}</span>
                  </div>
                ))}
              </div>

              <div className="bill-summary">
                <div className="summary-row">
                  <span>Apartment Rent:</span>
                  <span>{fmtCurrency(apartmentRent)}</span>
                </div>
                <div className="summary-row">
                  <span>Total Appliances Rent:</span>
                  <span>{fmtCurrency(totalApplianceRent)}</span>
                </div>
                <div className="summary-row total">
                  <span>Total Bill:</span>
                  <span>{fmtCurrency(totalBill)}</span>
                </div>
              </div>

              <button className="btn-pay" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          </div>

          <div className="home-button">
            <button onClick={() => navigate('/')}>← Back to MVP</button>
          </div>
        </div>
      </>
    );
  }

  // Charts Page
  return (
    <>
      <div className="progress-page">
        <div className="page-nav">
          <button className="nav-btn" onClick={() => setCurrentPage('rent')}>
            Rent Details
          </button>
          <button className="nav-btn active">View Charts</button>
        </div>

        <header className="hero">
          <h1>Savings & Energy Analytics</h1>
          <p>Compare costs and energy consumption with and without our appliances</p>
        </header>

        <section className="section">
          <div className="chart-card">
            <h3>Monthly Cost Comparison</h3>
            <p className="chart-sub">Total monthly cost including rent and energy (Bar A: With Our Appliances, Bar B: Without Our Appliances)</p>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={savingsBarData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e7e7e7" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(v) => `₹${Math.round(v)}`} />
                  <Tooltip
                    formatter={(value, name) => [fmtCurrency(value), name]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Legend />
                  <Bar dataKey="With Our Appliances" fill="#2563eb" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="Without Our Appliances" fill="#d97706" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="chart-card">
            <h3>Energy Consumption Comparison</h3>
            <p className="chart-sub">Monthly energy usage (Line A: With Our Appliances, Line B: Without Our Appliances)</p>
            <div className="chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={energyLineData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e7e7e7" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(v) => `${Math.round(v)} kWh`} />
                  <Tooltip
                    formatter={(value, name) => [fmtKwh(value), name]}
                    labelFormatter={(label) => `Month: ${label}`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="With Our Appliances"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Without Our Appliances"
                    stroke="#d97706"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <div className="home-button">
          <button onClick={() => navigate('/')}>← Back to MVP</button>
        </div>
      </div>
    </>
  );
}