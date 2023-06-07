import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/particles.css';
import '../css/fadeIn.css';

export const Home = () => {
    const textRef = useRef(0);

    const [loadText1, setLoadText1] = useState(false);
    const [loadText2, setLoadText2] = useState(false);
    const [loadText3, setLoadText3] = useState(false);

    const handleScroll = () => {
        const position = textRef.current.offsetTop;
        console.log('HEREEEEE')
        console.log(position)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        setLoadText1(true);
        setLoadText2(true);
        setLoadText3(true);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);  

    return <>
        <Container className='full-screen d-flex align-items-center'>
            <div id='particles-container'>
                <div class="particles1"></div>
                <div class="particles2"></div>
            </div>

            <Row ref={textRef} className='align-items-center text-center mx-auto'>
                <Col>
                    <Row className='display-1'>
                        <Col className='header greeting'>
                            <div className={`${loadText1 ? 'notHidden' : 'hidden'}`}>Hello there!</div>
                            <div className={`${loadText1 ? 'notHidden delay-1' : 'hidden delay-1'}`}>I'm <span className='header gradient-text'>Michael Doherty.</span></div>
                        </Col>
                    </Row>
                    <Row className='text-center mt-3'>
                        <Col className={`fs-4 ${loadText1 ? 'notHidden delay-2' : 'hidden delay-2'}`}>
                            I'm a senior studying computer science at Southern Methodist University in Dallas, Texas.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
}