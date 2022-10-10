import Home from "../Components/Home/Home";
import Bio from "../Components/Bio/Bio";
import Portfolio from "../Components/Portfolio/Portfolio";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bio" element={<Bio />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
