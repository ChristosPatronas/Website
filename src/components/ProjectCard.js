import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(projectUrl);
  };

  return (
    <Col sm={6} md={4} onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clickUrl"
          >
            Click Here!
          </a>
        </div>
      </div>
    </Col>
  );
};
