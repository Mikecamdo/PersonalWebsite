import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

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