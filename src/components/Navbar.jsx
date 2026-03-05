import arrow from '../assets/arrow-up-left-01.svg'
function Navbar() {
    return (
        <nav className="max-w-7xl mx-auto mt-8 flex">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <div
                    style={{ backgroundImage: "url('/Frame.svg')" }}
                    className="w-10 h-10 bg-center bg-no-repeat"
                ></div>

                <h1 className="text-white text-2xl font-bold">FileDock</h1>
            </div>

            {/* Menu */}
            <div className="flex items-center gap-8 ml-80 text-white">
                <a href="#" className="hover:text-purple-400 duration-300">Feature</a>
                <a href="#" className="hover:text-purple-400 duration-300">Update</a>
                <a href="#" className="hover:text-purple-400 duration-300">Reviews</a>
                <a href="#" className="hover:text-purple-400 duration-300">Pricing</a>
            </div>
            <div className="ml-[350px]">
                <button className="bg-[#9061FF] hover:bg-[#724ec5] duration-400 flex text-white pl-7 items-center py-1 rounded-full cursor-pointer w-[185px] h-[48px]">Start Free Trial <img src={arrow} className='bg-center bg-no-repeat w-9 h-9 p-2 ml-2 bg-white rounded-full' alt="" /></button>

            </div>
        </nav>
    );
}

export default Navbar;