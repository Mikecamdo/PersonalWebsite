import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const App = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setViewportWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <>
        <Navbar sticky='top' expand='xxl' variant='dark'>
            <Container className={`${viewportWidth <= 1399 && 'me-0'}`}>
                <Navbar.Toggle className='no-border ms-auto' />
                <Navbar.Collapse className='fs-3'>
                    <Nav className='flex-grow-1 justify-content-evenly'>
                        <Nav.Link className='mx-5'><span className='text-center'>Home</span></Nav.Link>
                        <Nav.Link className='mx-5'><span>About</span></Nav.Link>
                        <Nav.Link className='mx-5'><span>Experience</span></Nav.Link>
                        <Nav.Link className='mx-5'><span>Projects</span></Nav.Link>
                        <Nav.Link className='mx-5'><span>Contact</span></Nav.Link>
                        <Nav.Link className='mx-5'><span>Resume</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Home />
        <About />
        <br />
        <Experience />
        <br />
        <Projects />
        <br />
        <Contact />
    </>
}