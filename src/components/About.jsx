import React from "react";
// import laptop from "../assets/laptop-photo.jpg";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 p-5 transition-transform duration-300 transform hover:scale-105">
                    <h2 className="text-4xl mb-4 font-semibold">About Me</h2>
                    <p className="text-gray-700 text-lg">
                        Hello! I'm a passionate web developer with experience in React and modern web technologies.
                    </p>
                </div>
                {/* <div className="md:w-1/2 p-5 transition-transform duration-300 transform hover:scale-105">
                    <img src={laptop} alt="Your Name" className="w-full h-auto rounded-lg shadow-lg" />
                </div> */}
            </div>
        </section>
    );
};

export default About;