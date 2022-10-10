import kbeautybuddy from "../../Images/Kbeautybuddy.png";
import kbeautyAPI from "../../Images/kbeautyAPI.png";
import rum from "../../Images/rum.png";
import ks from "../../Images/keyboardsmash.png";
import forest from "../../Images/forest.png";

const portfolioData = [
  {
    id: "kbeautybuddyFE",
    imgLink: kbeautybuddy,
    title: "Kbeautybuddy - Front End",
    type: "Solo",
    tech: "React, React-Router, React Modal, kbeautyAPI, Cypress",
    githubLink: "https://github.com/rjur11/kbeautybuddy",
    deployedLink: "https://kbeautybuddy.vercel.app/",
  },
  {
    id: "kbeautybuddyBE",
    imgLink: kbeautyAPI,
    title: "Kbeautybuddy - Back End",
    type: "Solo",
    tech: "Express, Node.js, AWS S3 Bucket",
    githubLink: "https://github.com/rjur11/kbeautyAPI",
  },
  {
    id: "rum",
    imgLink: rum,
    title: "Rüm - Front End",
    type: "Group",
    tech: "React, React Router, GraphQL, Cypress",
    githubLink: "https://github.com/Rum-Project/ruum-fe",
    deployedLink: "https://ruumproject.herokuapp.com/",
  },
  {
    id: "keyboardSmasher",
    imgLink: ks,
    title: "Keyboard Smasher",
    type: "Solo",
    tech: "Python, Pygame, Aubio, Pyaudio",
    githubLink: "https://github.com/rjur11/Keyboard-Smasher",
  },
  {
    id: "forestEscape",
    imgLink: forest,
    title: "Forest Escape",
    type: "Solo",
    tech: "Unity Game Engine",
    githubLink: "https://github.com/rjur11/Forest-Escape",
  },
];

export default portfolioData;
