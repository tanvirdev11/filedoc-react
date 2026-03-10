import React from 'react'
import icon1 from '../assets/Icon.svg'
import icon2 from '../assets/Icon (1).svg'
import icon3 from '../assets/Icon (2).svg'
import { useEffect } from "react";
import Nav from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
const Productivity = () => {
    // 1️⃣ Initialize AOS for hero & dashboard
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);

    // 2️⃣ Intersection Observer for feature cards
    useEffect(() => {
        const cards = document.querySelectorAll(".feature-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                    }
                });
            },
            { threshold: 0.2 }
        );

        cards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    return (

        <div className="w-full py-24 px-6">

            {/* Headings */}
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold" data-aos="fade-up" data-aos-delay="800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                        Smart Tools Limitless
                    </span>
                </h1>
                <h1 className="text-4xl sm:text-5xl font-extrabold mt-2" data-aos="fade-up" data-aos-delay="800">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                        Productivity
                    </span>
                </h1>
            </div>

            {/* Cards */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-7xl mx-auto">

                {/* Card 1 */}
                <div className="w-full sm:w-80 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="600">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center" data-aos="fade-up" data-aos-delay="800">
                        <img src={icon1} alt="Rocket icon" className="w-6 h-6" />
                    </div>
                    <div className="mt-5 flex flex-col gap-1">
                        <h3 className="text-white font-semibold text-xl" data-aos="fade-up" data-aos-delay="800">Smart Task Management</h3>
                        <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="800">
                            Create, assign, and prioritize tasks with drag-and-drop simplicity.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-80 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="700">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center" data-aos="fade-up" data-aos-delay="800">
                        <img src={icon2} alt="Collaboration icon" className="w-6 h-6" />
                    </div>
                    <div className="mt-5 flex flex-col gap-1">
                        <h3 className="text-white font-semibold text-xl" data-aos="fade-up" data-aos-delay="800">Real-Time Collaboration</h3>
                        <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="800">
                            Comment, share files, and update progress instantly with your team.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-80 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4" data-aos="fade-up" data-aos-delay="800">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                        <img src={icon3} alt="Automation icon" className="w-6 h-6" />
                    </div>
                    <div className="mt-5 flex flex-col gap-1">
                        <h3 className="text-white font-semibold text-xl" data-aos="fade-up" data-aos-delay="800">Workflow Automation</h3>
                        <p className="text-gray-400 text-sm" data-aos="fade-up" data-aos-delay="500">
                            Automate repetitive tasks and save valuable time.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productivity;