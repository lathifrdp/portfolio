import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4 mt-10">
            <p>&copy; 2024 Your Name | 
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300"> GitHub</a> | 
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300"> LinkedIn</a>
            </p>
        </footer>
    );
};

export default Footer;