import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { About } from './About';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const App = () => {
    return <>
        <Home/>
        <About/>
        <br/>
        <Experience/>
        <br/>
        <Projects/>
        <br/>
        <Contact/>
    </>
}