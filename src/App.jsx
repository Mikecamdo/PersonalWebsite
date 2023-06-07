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
import Resume from './resume.pdf';

export const App = () => {
    const navbarRef = useRef(0);
    const homeRef = useRef(0);
    const aboutRef = useRef(0);
    const experienceRef = useRef(0);
    const projectsRef = useRef(0);
    const contactRef = useRef(0);

    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const [makeTransparent, setMakeTransparent] = useState(true);
    const [navClicked, setNavClicked] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position === 0) {
            setMakeTransparent(true);
        } else {
            setMakeTransparent(false);
        }
    }

    const handleResize = () => {
        setViewportWidth(window.innerWidth);
        setNavHeight(navbarRef.current.offsetHeight);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize);

        setNavHeight(navbarRef.current.offsetHeight);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollTo = (location) => {
        if (location === 1) {
            window.scrollTo({top: 0, behavior: "smooth" });
        } else if (location === 2) {
            window.scrollTo({top: (aboutRef.current.offsetTop - navHeight), behavior: "smooth" });
        } else if (location === 3) {
            window.scrollTo({top: (experienceRef.current.offsetTop - navHeight), behavior: "smooth" });
        } else if (location === 4) {
            window.scrollTo({top: (projectsRef.current.offsetTop - navHeight), behavior: "smooth" });
        } else if (location === 5) {
            window.scrollTo({top: (contactRef.current.offsetTop - navHeight), behavior: "smooth" });
        }
    }

    return <>
        <Navbar ref={navbarRef} className={`noOverflow ${(makeTransparent && !navClicked) ? 'transparent' : 'notTransparent'}`} fixed='top' expand='lg' variant='dark' collapseOnSelect>
            <Container className={`transparent ${viewportWidth <= 991 && 'me-0'}`}>
                <Navbar.Toggle className='transparent no-border ms-auto fs-3' onClick={() => {setNavClicked(!navClicked)}}/>
                <Navbar.Collapse className='transparent fs-5'>
                    <Nav className='transparent flex-grow-1 justify-content-evenly'>
                        <Nav.Link eventKey='1' className='mx-0 transparent' onClick={() => {setNavClicked(!navClicked); scrollTo(1)}}><span>Home</span></Nav.Link>
                        <Nav.Link eventKey='2' className='mx-0 transparent' onClick={() => {setNavClicked(!navClicked); scrollTo(2)}}><span>About</span></Nav.Link>
                        <Nav.Link eventKey='3' className='mx-0 transparent' onClick={() => {setNavClicked(!navClicked); scrollTo(3)}}><span>Experience</span></Nav.Link>
                        <Nav.Link eventKey='4' className='mx-0 transparent' onClick={() => {setNavClicked(!navClicked); scrollTo(4)}}><span>Projects</span></Nav.Link>
                        <Nav.Link eventKey='5' className='mx-0 transparent' onClick={() => {setNavClicked(!navClicked); scrollTo(5)}}><span>Contact</span></Nav.Link>
                        <Nav.Link eventKey='6' className='mx-0 transparent' onClick={() => {setNavClicked(!navClicked); window.open(Resume)}}><span>Resume</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <span ref={homeRef}><Home /></span>
        <span ref={aboutRef}><About /></span>
        <br />
        <span ref={experienceRef}><Experience /></span>
        <br />
        <span ref={projectsRef}><Projects /></span>
        <br />
        <span ref={contactRef}><Contact /></span>
    </>
}