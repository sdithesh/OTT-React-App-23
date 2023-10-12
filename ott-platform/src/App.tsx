import React from "react";
import Register from "./page/register-page/register-page";
// import { COLORS, FONT } from "./styles/constants";
import "./styles/constants.scss";
import "./index.scss";
import Login from "./page/login-page/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
