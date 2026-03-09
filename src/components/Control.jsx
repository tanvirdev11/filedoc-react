// import arrow from "../assets/arrow-up-left-01 (1).svg";
// function Control() {
//     return (
//         <div className='w-[1200px] h-[422px] bg-[#221B33] ml-95 rounded-3xl'>
//             <div className='w-120 h-40 text-center mt-10 mx-[364px]'>
//                 <h1 className="text-5xl font-extrabold pt-[50px]">
//                     <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#A678FF]">
//                         Take control of your
//                     </span>
//                 </h1>
//                 <h1 className="text-5xl font-extrabold mt-2">
//                     <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#A678FF]">
//                         team’s success
//                     </span>
//                 </h1>
//             </div>
//             <div className='mt-[16px] mx-[438px]'>
//                 <p className='text-white/80 text-[16px] w-[300px] text-center'>Start organizing smarter and achieving more today.</p>
//             </div>
//             <div className="">
//                 <button className="bg-white hover:bg-[#ddd] duration-400 flex pl-7 items-center py-1 ml-125 mt-15 rounded-full cursor-pointer w-[195px] h-[48px]">Start Free Trial <img src={arrow} className='bg-center bg-no-repeat w-9 h-9 p-2 ml-5 bg-[#9061FF] rounded-full' alt="" /></button>

//             </div>
//         </div>
//     );
// }
// export default Control;

import arrow from "../assets/arrow-up-left-01 (1).svg";

function Control() {
    return (
        <div className='w-full mt-8 lg:mt-15 max-w-6xl mx-auto bg-[#221B33] rounded-3xl px-4 sm:px-6 lg:px-12 py-12 sm:py-16'>

            {/* Header */}
            <div className='text-center'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#A678FF]">
                        Take control of your
                    </span>
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#A678FF]">
                        team’s success
                    </span>
                </h1>
            </div>

            {/* Subtext */}
            <p className='text-white/80 text-base sm:text-lg md:text-xl mt-4 text-center max-w-md mx-auto'>
                Start organizing smarter and achieving more today.
            </p>

            {/* Button */}
            <div className="mt-8 flex justify-center">
                <button className="bg-white duration-300 hover:bg-[#ddd] flex items-center pl-6 pr-2 py-1 rounded-full cursor-pointer h-[48px] transition">
                    Start Free Trial
                    <img
                        src={arrow}
                        className="w-9 h-9 p-2 ml-2 bg-[#9C6DFF] rounded-full"
                        alt=""
                    />
                </button>
            </div>

        </div>
    );
}

export default Control;