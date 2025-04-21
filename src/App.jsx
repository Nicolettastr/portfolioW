import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
