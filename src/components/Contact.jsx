import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }
        
        // Simple email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Reset error and success states
        setError("");
        setSuccess(true);

        // Simulate form submission (you can replace this with an actual API call)
        console.log("Form submitted:", { name, email, message });

        // Reset form fields
        setName("");
        setEmail("");
        setMessage("");

        // Optional: You can also set a timeout to reset the success message after a few seconds
        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <section id="contact" className="py-20 bg-white">
            <h2 className="text-4xl text-center mb-10 font-semibold">Contact Me</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {success && <div className="text-green-500 mb-4">Message sent successfully!</div>}
                
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border border-gray-300 p-3 w-full mb-4 rounded transition duration-300 focus:border-blue-500 focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-gray-300 p-3 w-full mb-4 rounded transition duration-300 focus:border-blue-500 focus:outline-none"
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="border border-gray-300 p-3 w-full mb-4 rounded transition duration-300 focus:border-blue-500 focus:outline-none"
                    rows="4"
                />
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;