import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__bounceInLeft" : ""
                    }
                  >
                    <h2>Skills</h2>
                    <p>
                      Firstly, i have excellent experience with languages such
                      as HTML5, CSS3, JavaScript, Bootstrap and SQL Database.
                      <br />
                      Secondly, i have created educational projects in github
                      with the use of Next.js, Node.js, Axios and Bulma.
                      <br />
                      Thirdly, i worked and learned a bunch of things and
                      mechanics of WordPress and Drupal CMS's during my military
                      days.
                      <br />
                      Last but not least, this site is a work with React.js
                      which i am proud of doing it, even with some help.
                      <br />
                      Honorable mentions: Elementor, JAVA, Postman, Hoppscotch,
                      Android Studio and Docker are technologies that i had a
                      generous time hands-on.
                      <br />
                      Now you will find me working in react.js environments.
                    </p>
                  </div>
                )}
              </TrackVisibility>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>APIs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>HTML5 & CSS3</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Coding</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Node & Next</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>WordPress & Drupal</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
