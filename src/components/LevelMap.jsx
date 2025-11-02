import React from "react";
import "./LevelMap.css";
import { Link } from "react-router-dom";

function LevelMap() {
  return (
    <div className="level-map">
      <Link to="/level1">Level 1</Link>
      <Link to="/level2">Level 2</Link>
      <Link to="/level3">Level 3</Link>
    </div>
  );
}

export default LevelMap;
