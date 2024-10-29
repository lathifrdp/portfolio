import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        // <header className="bg-blue-600 p-5 shadow-lg transition-shadow duration-300">
        //     <div className="container mx-auto flex justify-between items-center">
        //         <h1 className="text-white text-3xl font-bold">Your Name</h1>
        //         <nav>
        //             <a href="#about" className="text-white mx-3 hover:underline hover:text-blue-200 transition duration-300">About</a>
        //             <a href="#projects" className="text-white mx-3 hover:underline hover:text-blue-200 transition duration-300">Projects</a>
        //             <a href="#contact" className="text-white mx-3 hover:underline hover:text-blue-200 transition duration-300">Contact</a>
        //         </nav>
        //     </div>
        // </header>

        <header className="bg-gray-800 text-white p-4 fixed w-full z-10">

            <nav className="flex justify-around">

                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">

                    About

                </Link>

                <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">

                    Projects

                </Link>

                <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-300">

                    Contact

                </Link>

            </nav>

        </header>
    );
};

export default Header;