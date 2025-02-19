// Navbar.jsx
'use client';  // Add this line
import { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        // Select all the sections (in this case, div elements with specific IDs)
        const sections = document.querySelectorAll("div[id]");

        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Check if the section is more than 50% in view (threshold: 0.5)
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold to 50% visibility
        );

        // Observe each section
        sections.forEach((section) => observer.observe(section));

        // Cleanup the observer when the component is unmounted
        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="nav">
            <div className="navbar">
                <a href="#home" className={activeSection === "home" ? "active" : ""}>
                    Home
                </a>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                    About
                </a>
                <a href="#services" className={activeSection === "services" ? "active" : ""}>
                    Services
                </a>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Navbar;
