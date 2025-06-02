import React, { useState } from "react";
import '../styles/App.css';
import Header from './Header';
import Menu from "../assets/Menu.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import Services from "./Services.js";

function App() {

  return (
    <div className="App flex flex-col min-h-screen text-gray-50 bg-white">
      <Header/>
      <main className="flex-grow">
        <Home/>
        <About/>
        <Projects/>
        <Services/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
