import { useEffect } from "react";
import Nav from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

import Frame18 from "../assets/Frame 18.png";
import Frame from "../assets/bg5.png";
import Frame1 from "../assets/Frame (1).svg";
import Frame2 from "../assets/arrow-up-left-01 (1).svg";
import Frame3 from "../assets/Frame 14.png";

export default function Background() {

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
        <>
            <div className="w-full bg-cover h-[1413px] bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${Frame18})` }}>

                {/* Navbar */}
                <Nav />

                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-6 mt-5 text-center pt-20">
                    <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-delay="500">
                        Control Beyond Cloud
                    </h1>
                    <h1 className="text-white font-bold mt-2 text-4xl sm:text-5xl lg:text-6xl" data-aos="fade-up" data-aos-delay="200">
                        Anytime
                    </h1>
                    <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
                        Manage and access projects from any device, ensuring your team stays connected and productive.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                        <button className="bg-white hover:bg-[#ddd] flex items-center justify-center px-6 h-[48px] rounded-full cursor-pointer transition" data-aos="fade-up" data-aos-delay="600">
                            Start Free Trial
                            <img src={Frame2} className="w-9 h-9 p-2 ml-4 bg-[#9061FF] rounded-full" alt="" />
                        </button>
                        <button className="bg-[#7A7585] border border-white hover:bg-[#494650] flex items-center justify-center px-6 h-[48px] rounded-full text-white transition" data-aos="fade-up" data-aos-delay="800">
                            Watch the Demo
                            <img src={Frame1} className="w-8 ml-2" alt="" />
                        </button>
                    </div>
                </div>


                <div className="">
                    <div className="max-w-7xl mt-50 mx-auto px-1 relative justify-center" data-aos="fade-up" data-aos-delay="800">

                        {/* Main Image Div */}
                        <div className="w-full h-[400px] lg:mt-5 sm:h-[500px] lg:h-[700px] bg-no-repeat bg-contain bg-center flex justify-center items-end p-6" style={{ backgroundImage: `url(${Frame})` }} >
                        </div>
                    </div>

                    {/* Blur Overlay */}
                    <div className="absolute w-full h-61 mt-[1167px] z-40 inset-0 bg-gradient-to-b from-transparent to-white/15 backdrop-blur-[3px] pointer-events-none">
                        <div className="text-center absolute ml-[870px] mt-2" data-aos="fade-up" data-aos-delay="400">
                            <div className="lg:w-32 lg:h-12 w-18 h-8 bg-no-repeat bg-contain mx-auto z-50" style={{ backgroundImage: `url(${Frame3})` }}></div>
                            <h1 className="text-white text-2xl lg:text-3xl font-bold lg:mt-2 z-50">50K+</h1>
                            <p className="text-white text-sm">Active Users worldwide</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
