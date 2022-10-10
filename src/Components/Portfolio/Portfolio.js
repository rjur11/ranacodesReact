import Links from "../Links/Links";
import portfolioData from "./portfolioData";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <Links />{" "}
      <div className="project-container">
        {portfolioData.map((project) => (
          <div className="miniContainer" id={project.id}>
            <img src={project.imgLink} />
            <h1 className="title">{project.title}</h1>
            <p className="type">{project.type}</p>
            <p className="tech">
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
