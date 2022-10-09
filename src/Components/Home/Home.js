import me from "../../Images/me.jpeg";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <main>
        {" "}
        <img src={me} className="me" />
        <h1>Hi, my name is Rana!</h1>
        <p>
          I'm a front-end engineer currently interning at Shopify on the Theme
          Design team.
        </p>
      </main>
      <nav>
        <div className="links">
          <Link to="/bio" className="homelink">
            Bio
          </Link>
          <Link to="/portfolio" className="homelink">
            Portfolio
          </Link>
        </div>
      </nav>
      <Footer />
    </div>
  );
}
