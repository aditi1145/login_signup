import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignupPage from "./components/SignupPage";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const toggleRegister = () => {
    setIsRegistered(!isRegistered);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isRegistered ? (
              <Login
                toggleRegister={toggleRegister}
                isRegistered={isRegistered}
              />
            ) : (
              <SignupPage
                toggleRegister={toggleRegister}
                isRegistered={isRegistered}
              />
            )
          }
        />
        <Route path="/dashboard" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
