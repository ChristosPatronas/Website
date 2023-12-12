import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/pingpong.png";
import projImg2 from "../assets/img/Movie_Theater.png";
import projImg3 from "../assets/img/jokes.png";
import TrackVisibility from "react-on-screen";

import "animate.css";

export const Projects = () => {
  const projects = [
    {
      title: "Ping Pong Scorer",
      description:
        "With use of bulma framework and html/css, i created a scoreboard for ping pong matches.",
      imgUrl: projImg1,
      projectUrl: "https://christospatronas.github.io/ScoreKeeper/",
    },
    {
      title: "API for TV Shows",
      description:
        "I used axios and async functions in order to create a label that you can search tv shows using just the title or a portion of it.",
      imgUrl: projImg2,
      projectUrl: "https://christospatronas.github.io/API_TVShows/",
    },
    {
      title: "API for Dad Jokes",
      description: "Simple list of dad jokes with axios and async functioning.",
      imgUrl: projImg3,
      projectUrl: "https://christospatronas.github.io/API_DadJokes/",
    },
  ];

  const projects2 = [
    {
      title: "Christmas Card",
      description:
        "A Christmas card that demonstrates christmas songs from army's formations all over greece.",
      imgUrl: projImg1,
      projectUrl: "http://army.gr/el/kalanta-hristoygennon",
    },
    {
      title: "Prodiagrafes Army",
      description:
        "This is a website created in 4 days from me to the army with the use of wordpress in order to help control different types of transactions made by them from simple to advanced items.",
      imgUrl: projImg1,
      projectUrl: "https://prodiagrafes.army.gr/",
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounceInRight" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Below you can find my projects that some of them are live
                    and some are existing in github.
                    <br />
                    Also, i have created a christmas card with the use of HTML5
                    and CSS3 for military purposes in army.gr website which is
                    live (hidden where christmas not found) and
                    prodiagrafes.army.gr that is currently live and working for
                    the military.
                    <br />
                    Last but not least, there are also a few educational
                    projects in github just for training in some technologies.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Educational Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Live Tab</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">React Tab</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">TBD........SOON</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
