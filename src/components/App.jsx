import React from "react";
import "../css/homestyle.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuestionAndAnswersDisplay from "./QuestionAndAnswersDisplay";

const App = () => {
  

  return (
    <div className="container bg-yellow p-3 rounded">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/QuestionAndAnswersDisplay" exact element={<QuestionAndAnswersDisplay />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
