import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]; //rotate words
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100); //to set each letter tick
  const period = 2000; //period of rotation
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline"> Welcome to my Portfolio</span>
                  <h1>
                    {`Hi My Name is Christos a `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am a 25 years old extrovert man who's able to work with a
                    group of people capable of teaching and cooperate with me in
                    a daily friendly basis. My interests are in CMSystems like
                    WordPress and Drupal and Frontend Applications using
                    JavaScript, Node.JS, React, Bootstrap, Bulma and more.
                    Moreover, I am always energetic and eager to learn new
                    skills, improve and advance in big projects. Also, I am a
                    person who has great time management and experience working
                    as part of a team and individually. Last but not least, I
                    have successfully met deadlines on every project I’ve worked
                    on.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
