import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/particles.css';
import '../css/fadeIn.css';

export const Home = () => {
    const [loadText1, setLoadText1] = useState(false);

    useEffect(() => {
        setLoadText1(true);
    }, []);  

    return <>
        <Container className='full-screen d-flex align-items-center'>
            <div id='particles-container'>
                <div class="particles1"></div>
                <div class="particles2"></div>
            </div>

            <Row className='align-items-center text-center mx-auto'>
                <Col>
                    <Row className='display-1'>
                        <Col className='header greeting'>
                            <div className={`${loadText1 ? 'notHidden' : 'hidden'}`}>Hello there!</div>
                            <div className={`delay-1 ${loadText1 ? 'notHidden' : 'hidden'}`}>I'm <span className='header gradient-text'>Michael Doherty.</span></div>
                        </Col>
                    </Row>
                    <Row className='text-center mt-3'>
                        <Col className={`fs-4 delay-2 ${loadText1 ? 'notHidden' : 'hidden'}`}>
                            I'm a senior studying computer science at Southern Methodist University in Dallas, Texas.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}