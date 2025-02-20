// Navbar.jsx
'use client';  // Add this line
import { useEffect, useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

        useEffect(() => {
            const sections = document.querySelectorAll("div[id]");
        
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            if (entry.target.id === "about") {
                                entry.target.classList.add("aboutanimate");
                            } else if (entry.target.id === "services") {
                                addEventListener("scroll", () => {
                                if(entry.target.id==="process1"){
                                    console.log("process1")
                                }
                                else if(entry.target.id==="process2"){
                                    console.log("process2")
                                }
                                else if(entry.target.id==="process3"){
                                    console.log("process3")
                                }
                            });
                                entry.target.classList.add("servicesanimate");
                            }
                            console.log("Active Section:", entry.target.id); // Debug log
                            setActiveSection(entry.target.id);
                        } 
                        else if (entry.intersectionRatio > 0) {
                            entry.target.classList.remove("aboutanimate"); // Remove if previously added
                            entry.target.classList.remove("servicesanimate"); // Optional: remove when out of view
                        }
                    });
                },
                { 
                    threshold: 0.1,  // **🔹 Changed from 0.3 to 0.1 for better small screen detection**
                    rootMargin: "0px 0px -100px 0px" // **🔹 Helps detect the section earlier**
                }
            );
        
            sections.forEach((section) => observer.observe(section));
        
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
                <a href="#about" className={activeSection === "about" ? "active aboutanimate" : ""}>
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
