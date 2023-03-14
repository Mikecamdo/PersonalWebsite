import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contact } from './Contact';

export const App = () => {
    return <>
        <Home/>
        <br/>
        <About/>
        <br/>
        <Skills/>
        <br/>
        <Projects/>
        <br/>
        <Contact/>
    </>
}