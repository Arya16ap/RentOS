// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./screens/homepage";
import Settings from "./screens/settings";
import { useEffect } from "react";
import StudyMatch from "./components/StudyMatch";
import Progress from './screens/progress';
import { Home } from "lucide-react";


export default function App() {
  

  return (
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/studymatch" element={<StudyMatch />} />
      <Route path="/progress" element={<Progress />} />

    </Routes>
  );
}
