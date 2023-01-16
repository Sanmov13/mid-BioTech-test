import React from "react";
import Auth from "./pages/Auth";
import Hero from "./pages/Hero";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<Auth />} />
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;
