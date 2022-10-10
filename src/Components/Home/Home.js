import me from "../../Images/me.jpeg";
import Links from "../Links/Links";
import "./Home.css";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <div>
      <main>
        <nav>
          <Links />
        </nav>
        <div className="content">
          <img src={me} className="me" />
          <h1 className="name">
            Hi, my name is <span className="rana">Rana!</span>
          </h1>
          <p className="blurb">
            I'm a front-end engineer currently interning at{" "}
            <span clasName="hvr-float">Shopify</span> on the Theme Design team.
          </p>
          <div className="icons">
            <SocialIcon url="https://github.com/rjur11" />
            <SocialIcon url="https://www.linkedin.com/in/rana-jurjus/" />
          </div>
        </div>
      </main>
      {/* 
      <Footer /> */}
    </div>
  );
}
