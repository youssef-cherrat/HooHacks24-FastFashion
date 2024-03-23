import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import "./BannerSearch.css";
import TrackVisibility from 'react-on-screen';

export const BannerSearch = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(20);
  const period = 1000;



  const toRotate = useMemo(() => ["Shopping Smarter", 
  "Reducing Fast Fashion", "Sustainability"], []);

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
        setDelta(20);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(100);
    }
  }, [loopNum, toRotate, isDeleting, text, setDelta, setIsDeleting, setLoopNum]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      <Container>
  <Row className="align-items-center justify-content-center"> {/* Ensure center alignment */}
    <Col xs={12} className="text-center"> {/* Center text and adjust column size as needed */}
      <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
            <h1>{`GreenThreads`}</h1> {/* This is your company name */}
            <h2 className="txt-rotate" data-period="1000" data-rotate='[ "Shopping Smarter", "Reducing Fast Fashion", "Sustainability" ]'>
              <span className="wrap">{text}</span>
            </h2>
          </div>
        }
      </TrackVisibility>
    </Col>
  </Row>
</Container>

    </section>
  );
};
