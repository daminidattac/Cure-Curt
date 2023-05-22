import React from "react";
import BloodBank from "./userpanel/BloodBank";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BloodBank />} />
       
        </Routes>
    </div>
  );
}

export default App;
