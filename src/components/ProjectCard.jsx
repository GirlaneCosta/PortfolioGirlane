import "../styles/components/projectcard.sass";

function ProjectCard({ title, description, image, link, linkgit }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver pojeto
      </a>
      <a href={linkgit} target="_blank" rel="noopener noreferrer">
        Ver Repositório
      </a>
    </div>
  );
}
export default ProjectCard;
