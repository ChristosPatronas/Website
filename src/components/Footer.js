import { Col, Row, Container } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import logo from "../assets/img/LOGO.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/christos-georgios-patronas-61b8841b4"
                target="_blank"
              >
                <img src={navIcon1} />
              </a>
              <a href="https://www.facebook.com/CRISTARAS" target="_blank">
                <img src={navIcon2} />
              </a>
              <a
                href="https://www.instagram.com/chris_patronas/"
                target="_blank"
              >
                <img src={navIcon3} />
              </a>
              <a href="https://github.com/ChristosPatronas" target="_blank">
                <img src={navIcon4} />
              </a>
            </div>
            <p>
              Copyright 2023. All Rights Reserved by Christos-Georgis Patronas.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
