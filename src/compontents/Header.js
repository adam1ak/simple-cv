import React from "react";
import "../styles/Header.css";
import Xmark from "../assets/Xmark.js";

function Header({isShown, onToggleShow}) {

    const handleClose = () => {
        onToggleShow();
    }

    return (
        <div className={`
                        header font-medium 
                      bg-emerald-950 text-gray-50
                        max-w-32 h-full 
                        w-full
                        sm:h-fit sm:max-w-full 
                        sm:justify-center
                        ${isShown ? "flex" : "hidden"}
                        sm:flex
                        fixed sm:sticky sm:top-0 sm:z-50
                        `}>
            <nav className="navbar mt-4 ml-4 sm:my-4  w-full">
                <Xmark
                    handleClose={handleClose}
                    className="absolute right-4 size-6 sm:hidden" />
                <ul className="nav-list flex flex-col gap-4 sm:flex-row sm:gap-12">
                    <li className="nav-itemr">
                        <a href="#home" className="nav-link" onClick={handleClose}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={handleClose}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={handleClose}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link" onClick={handleClose}>Services</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={handleClose}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
