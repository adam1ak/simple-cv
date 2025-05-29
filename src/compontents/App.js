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

  const [isHeaderShown, setisHeaderShown] = useState(false);

  const toggleHeaderVisibility = () => {
    setisHeaderShown(prevState => !prevState)
  };

  return (
    <div className="App flex flex-col min-h-screen text-gray-50 bg-neutral-100">
      <Header
        isShown={isHeaderShown}
        onToggleShow={toggleHeaderVisibility} />
      <button
        className={`
          sm:hidden
          bg-emerald-900
          fixed 
          right-5 bottom-5
          min-h-12 min-w-12 rounded-2xl
          ${isHeaderShown ? "hidden" : "flex"}
          flex items-center justify-center`}
        onClick={toggleHeaderVisibility}
        ><Menu className="size-8 sm:hidden"/></button>
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
