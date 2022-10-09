import { SocialIcon } from "react-social-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p> Thanks for checking out my site!</p>

      <SocialIcon url="https://github.com/rjur11" />
      <SocialIcon url="https://www.linkedin.com/in/rana-jurjus/" />
    </div>
  );
}
