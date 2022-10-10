import { Link, useLocation } from "react-router-dom";
import "./Links.css";

export default function Links() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="links">
      {location.pathname === "/" ? null : (
        <Link to="/" className="homelink">
          Home
        </Link>
      )}
      {location.pathname === "/bio" ? null : (
        <Link to="/bio" className="homelink">
          About
        </Link>
      )}
      {location.pathname === "/portfolio" ? null : (
        <Link to="/portfolio" className="homelink">
          Projects
        </Link>
      )}
    </div>
  );
}
