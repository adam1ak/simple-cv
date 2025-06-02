import React from "react";
import "../styles/Header.css";


function Header() {
    return (
        <nav className="
            bg-gradient-to-r from-neutral-800 to-stone-900
            max-w-fit self-center
            fixed bottom-8 rounded-xl
            z-50
            ">
            <ul className="p-4 flex gap-8">
                <li>
                    <a href="#home">home</a>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#projects">projects</a>
                </li>
                <li>
                    <a href="#services">services</a>
                </li>
                <li>
                    <a href="#contact">contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;