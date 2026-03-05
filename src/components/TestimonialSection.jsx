import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image from '../assets/ImageWithFallback.png'
import image1 from '../assets/ImageWithFallback (1).png'
import image2 from '../assets/ImageWithFallback (2).png'
const testimonials = [
    {
        id: 1,
        text: "This platform has transformed the way our team collaborates. Seamless file sharing and real-time updates make project management a breeze!",
        name: "Sarah Johnson",
        role: "CEO, TechStart",
        image: image,
    },
    {
        id: 2,
        text: "This platform has transformed the way our team collaborates. Seamless file sharing and real-time updates make project management a breeze!",
        name: "Emily Thompson",
        role: "CEO, TechStart",
        image: image1,
    },
    {
        id: 3,
        text: "This tool has revolutionized our team's collaboration. Effortless file sharing and instant updates simplify project management significantly!",
        name: "Michael Chen",
        role: "Product Manager, DevHub",
        image: image2,
    },
];

export default function TestimonialSection() {
    const [current, setCurrent] = useState(1);

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className=" text-white py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Cards */}
                <div className="flex justify-center gap-6 transition-all duration-500">
                    {testimonials.map((item, index) => {
                        const isActive = index === current;

                        return (
                            <div
                                key={item.id}
                                className={`w-80 p-6 rounded-2xl transition-all duration-500
                ${isActive
                                        ? "bg-gradient-to-br from-purple-700/40 to-purple-900/40 scale-105 border border-purple-500"
                                        : "bg-gray-900 opacity-40 scale-95"
                                    }`}
                            >
                                <p className="text-sm text-gray-300 mb-6">{item.text}</p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p className="text-xs text-gray-400">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center mt-12">

                    {/* Indicators */}
                    <div className="flex gap-3">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 w-10 rounded-full transition-all duration-300 ${index === current
                                    ? "bg-purple-500"
                                    : "bg-gray-700"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Arrows Right Side */}
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="bg-gray-800 hover:bg-purple-600 p-3 rounded-full transition"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}