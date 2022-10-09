import Home from "../Components/Home/Home";
import Bio from "../Components/Bio/Bio";
import Portfolio from "../Components/Portfolio/Portfolio";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <header className="Rana Codes">
    //     <Routes>
    //       <Route exact path="/" element={<img src={me} className="me" />} />

    //       {/* <h1>Hi, my name is Rana!</h1>
    //       <p>
    //         I'm a front-end engineer currently interning at Shopify on the Theme
    //         Design team.
    //       </p> */}

    //       <Route path="nav" element={<Nav />} />
    //     </Routes>
    //   </header>
    // </div>

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
