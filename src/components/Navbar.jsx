// import arrow from '../assets/arrow-up-left-01.svg'
// function Navbar() {
//     return (
//         <nav className="max-w-7xl mx-auto mt-8 flex">

//             {/* Logo */}
//             <div className="flex items-center gap-2">
//                 <div
//                     style={{ backgroundImage: "url('/Frame.svg')" }}
//                     className="w-10 h-10 bg-center bg-no-repeat"
//                 ></div>

//                 <h1 className="text-white text-2xl font-bold">FileDock</h1>
//             </div>

//             {/* Menu */}
//             <div className="flex items-center gap-8 ml-80 text-white">
//                 <a href="#" className="hover:text-purple-400 duration-300">Feature</a>
//                 <a href="#" className="hover:text-purple-400 duration-300">Update</a>
//                 <a href="#" className="hover:text-purple-400 duration-300">Reviews</a>
//                 <a href="#" className="hover:text-purple-400 duration-300">Pricing</a>
//             </div>
//             <div className="ml-[350px]">
//                 <button className="bg-[#9061FF] hover:bg-[#724ec5] duration-400 flex text-white pl-7 items-center py-1 rounded-full cursor-pointer w-[185px] h-[48px]">Start Free Trial <img src={arrow} className='bg-center bg-no-repeat w-9 h-9 p-2 ml-2 bg-white rounded-full' alt="" /></button>

//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import { useState } from "react";
import arrow from "../assets/arrow-up-left-01.svg";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-3 z-50">

            <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div
                        style={{ backgroundImage: "url('/Frame.svg')" }}
                        className="w-10 h-10 bg-center bg-no-repeat"
                    ></div>

                    <h1 className="text-white text-2xl font-bold">FileDock</h1>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center duration-300 gap-8 text-white">
                    <a href="#" className="hover:text-purple-400 duration-300">Feature</a>
                    <a href="#" className="hover:text-purple-400 duration-300">Update</a>
                    <a href="#" className="hover:text-purple-400 duration-300">Reviews</a>
                    <a href="#" className="hover:text-purple-400 duration-300">Pricing</a>
                </div>

                {/* Desktop Button */}
                <div className="hidden md:block">
                    <button className="bg-[#9061FF] duration-300 hover:bg-[#724ec5] flex items-center text-white pl-6 pr-2 py-1 rounded-full cursor-pointer h-[48px] transition">
                        Start Free Trial
                        <img
                            src={arrow}
                            className="w-9 h-9 p-2 ml-2 bg-white rounded-full"
                            alt=""
                        />
                    </button>
                </div>

                {/* Hamburger */}
                <div
                    className="md:hidden text-white text-3xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col duration-300 gap-6 px-6 pb-6 text-white bg-[#17131F]">

                    <a href="#" className="hover:text-purple-400 pt-5">Feature</a>
                    <a href="#" className="hover:text-purple-400">Update</a>
                    <a href="#" className="hover:text-purple-400">Reviews</a>
                    <a href="#" className="hover:text-purple-400">Pricing</a>

                    <button className="bg-[#9061FF] duration-300 hover:bg-[#724ec5] flex items-center justify-center text-white py-2 rounded-full">
                        Start Free Trial
                    </button>

                </div>
            </div>

        </nav>
    );
}

export default Navbar;