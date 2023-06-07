import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export const About = () => {
    const imageRef = useRef(0);
    const textRef = useRef(0);

    const [loadImage, setLoadImage] = useState(false);
    const [loadText, setLoadText] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset + 0.75 * window.innerHeight;

        if (position >= imageRef.current.offsetTop) {
            setLoadImage(true);
        }
        if (position >= textRef.current.offsetTop) {
            setLoadText(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);  

    return <>
        <Container fluid className='noOverflow'>
            <Row className='text-center'>
                <Col ref={imageRef} xs={{ order: "last" }} lg={{ order: "first" }} className={`${loadImage ? "notHidden2" : "hidden2"}`}>
                    <Image fluid src='ProfessionalHeadshot.png'></Image>
                </Col>

                <Col ref={textRef} xs={12} lg={6} className={`my-auto ${loadText ? "notHidden3" : "hidden3"}`}>
                    <Row className='display-6 text-center mt-5'>
                        <Col>
                            <span className='header hr'>About Me</span>
                        </Col>
                    </Row>
                    <Row className='text-center fs-4'>
                        <Col>
                            Born and raised in the Jackson, Mississippi area, I've enjoyed working with technology my whole life.
                            Since coming to college, I've discovered a passion for creating innovative solutions to problems through software.
                            I'm currently interested in AI, Machine Learning, and Software Development, and I hope to utilize my skills to make a tangible impact on the problems that face our society today.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}