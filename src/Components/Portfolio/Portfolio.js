import Nav from "../Nav/Nav";
import portfolioData from "./portfolioData";
import styles from "../Portfolio/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <Nav />{" "}
      <h1>Some cool things that I've built, aside from this website...</h1>
      <div className="project-container">
        {portfolioData.map((project) => (
          <div className="miniContainer" id={project.id}>
            <img src={project.imgLink} />
            <h1 className="title">{project.title}</h1>
            <p className="type">{project.type}</p>
            <p>
              <b>Tech Used:</b> {project.tech}
            </p>
            <span>
              <a href={project.githubLink} className="code">
                code{" "}
              </a>
            </span>
            <span>
              {project.deployedLink ? (
                <a href={project.deployedLink} className="website">
                  deployed site{" "}
                </a>
              ) : null}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
