// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Header Section */}
//       <header className="bg-white shadow-md fixed w-full top-0 z-50">
//         <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           {/* Logo or Branding */}
//           <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
//             My<span className="text-blue-500">Portfolio</span>
//           </h1>

//           {/* Horizontal Navigation Links for Desktop */}
//           <ul className="hidden md:flex space-x-6">
//             <li><a href="#about" className="text-gray-600 hover:text-blue-500">About</a></li>
//             <li><a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a></li>
//             <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {/* Icon for mobile */}
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile Menu Dropdown */}
//         {isMenuOpen && (
//           <ul className="md:hidden bg-white shadow-md flex flex-col space-y-4 py-4 px-4">
//             <li><a href="#about" className="text-gray-600 hover:text-blue-500">About</a></li>
//             <li><a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a></li>
//             <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a></li>
//           </ul>
//         )}
//       </header>

//       {/* Hero Section */}
//       <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-green-400 text-white">
//         <div className="text-center px-6 md:px-12 lg:px-24">
//           <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
//             Hello, I'm <span className="text-yellow-300">[Your Name]</span>
//           </h2>
//           <p className="text-lg md:text-2xl mb-6">A Web Developer who loves building clean, modern websites.</p>
//           <a href="#projects" className="px-8 py-3 bg-yellow-300 text-gray-800 font-bold rounded-lg shadow-lg hover:bg-white transition">
//             View My Work
//           </a>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-white text-center">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
//           <p className="text-gray-600 text-lg">
//             I am a passionate web developer with expertise in building responsive and scalable web applications using React, Vite, and Tailwind CSS. I love creating smooth, efficient, and beautiful user experiences.
//           </p>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Projects</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {/* Example Project */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
//               <img
//                 src="https://via.placeholder.com/600x400"
//                 alt="Project 1"
//                 className="rounded-t-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">Project 1</h3>
//               <p className="text-gray-600 mb-4">A brief description of the project goes here. It's a web app built using React and Tailwind CSS.</p>
//               <a href="#" className="text-blue-500 hover:text-blue-700">Learn More →</a>
//             </div>

//             {/* Add more projects */}
//             <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
//               <img
//                 src="https://via.placeholder.com/600x400"
//                 alt="Project 2"
//                 className="rounded-t-lg mb-4"
//               />
//               <h3 className="text-xl font-semibold mb-2">Project 2</h3>
//               <p className="text-gray-600 mb-4">Another awesome project that I built with React and Tailwind CSS.</p>
//               <a href="#" className="text-blue-500 hover:text-blue-700">Learn More →</a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Me</h2>
//           <form className="max-w-lg mx-auto">
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-6">
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full px-4 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 bg-gray-800 text-white text-center">
//         <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
//       </footer>
//     </div>
//   )
// }

// export default App


import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Ensure Tailwind styles are imported

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;