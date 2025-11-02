// example for Level1.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

function Level3() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px" }}>
        <h2>Level 3</h2>
      </div>
    </div>
  );
}

export default Level3;
