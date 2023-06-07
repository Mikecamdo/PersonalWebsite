import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export const Experience = () => {
    const titleRef = useRef(0);
    const jobRef1 = useRef(0);
    const jobRef2 = useRef(0);

    const [loadTitle, setLoadTitle] = useState(false);
    const [loadJob1, setLoadJob1] = useState(false);
    const [loadJob2, setLoadJob2] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset + 0.75 * window.innerHeight;

        if (position >= titleRef.current.offsetTop) {
            setLoadTitle(true);
        }
        if (position >= jobRef1.current.offsetTop) {
            setLoadJob1(true);
        }
        if (position >= jobRef2.current.offsetTop) {
            setLoadJob2(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <>
        <Container fluid>
            <Row ref={titleRef} className={`${loadTitle ? 'notHidden' : 'hidden'} display-6 text-center mt-5`}>
                <Col>
                    <span className='header hr2'>Experience</span>
                </Col>
            </Row>
            <Row>
                <Col ref={jobRef1} xs={12} xl={6} className={`${loadJob1 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-1'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Img src='./Ethos Group.png' className='card-image'/>
                        <Card.Header className='fs-2 pb-0 header'>
                            Software Engineering Internship
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>Ethos Group</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                June 2023 - August 2023 | Remote
                                <ul>
                                    <li>In Progress</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col ref={jobRef2} xs={12} xl={6} className={`${loadJob2 ? 'notHidden' : 'hidden'} mt-5 ${(window.innerWidth >= 1200) && 'delay-2'}`}>
                    <Card className='card-dimension h-100' border='light'>
                        <Card.Img src='./SMU.png' className='card-image'/>
                        <Card.Header className='fs-2 pb-0 header'>
                            Grader
                        </Card.Header>
                        <Card.Body className='pt-0 fs-4'>
                            <Card.Title>
                                <i className='fs-4'>Southern Methodist University</i>
                            </Card.Title>
                            <Card.Text className='align-items-center'>
                                January 2022 - December 2022 | Dallas, TX
                                <ul>
                                    <li>Graded homeworks and tests for CS 2353 Discrete Computational Structures</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}