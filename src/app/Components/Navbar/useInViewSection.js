'use client';
import { useEffect, useState } from "react";


const useInViewSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
                        currentSection = id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initially
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds]);

    return activeSection;
};


export default useInViewSection;
