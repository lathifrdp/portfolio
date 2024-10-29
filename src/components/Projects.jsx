import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            imageUrl: "path/to/image1.jpg",
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            imageUrl: "path/to/image2.jpg",
        },
        // Add more projects as needed
    ];

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <h2 className="text-4xl text-center mb-10 font-semibold">My Projects</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-105" />
                        <h3 className="text-xl mt-2 font-semibold">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;