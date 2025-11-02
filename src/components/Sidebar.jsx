import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { getUsername } from './userStore.js';


function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavigate = (path) => {
    setIsOpen(false); // close sidebar when navigating
    navigate(path);
  };

  const username = getUsername() || "Guest";

  return (
    <>
      {/* Title Bar */}
      <header className="topbar">
        <div style={{ padding: "40px" }}>
            <h1 className="user-greet">Welcome to the Homepage, Arya!</h1>
            <p>This is your main page after login.</p>
            
          </div>
        <div className="topbar-content">
          

          </div>
          <h1 className="title">RentOS</h1>
        
      </header>



      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
      
    </>
  );
}

export default Sidebar;
