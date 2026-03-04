import { Route, Routes } from "react-router";
import Coursework from "./Pages/Coursework";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Employment from "./Pages/Employment";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#93A8AC]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/coursework" element={<Coursework />} />
        <Route path="/employment" element={<Employment />} />
      </Routes>
    </div>
  );
}

export default App;
