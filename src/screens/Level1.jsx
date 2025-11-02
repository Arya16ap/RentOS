// example for Level1.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

function Level1() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "220px" }}>
        <h2>Level 1</h2>
      </div>
    </div>
  );
}

export default Level1;
