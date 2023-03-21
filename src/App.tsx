import React, {useEffect} from 'react';
import './App.scss';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {HireMe} from "./hire-me/HireMe";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <HireMe/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
