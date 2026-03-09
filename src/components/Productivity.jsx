import React from 'react'
import icon1 from '../assets/Icon.svg'
import icon2 from '../assets/Icon (1).svg'
import icon3 from '../assets/Icon (2).svg'
const Productivity = () => {
    return (
        // <div className='w-full'>
        //     <div className="mt-[116px] mx-[467px]">
        //         <h1 className="text-5xl  font-extrabold text-center">
        //             <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
        //                 Smart Tools Limitless
        //             </span>
        //         </h1>
        //         <h1 className="text-5xl font-extrabold text-center ">
        //             <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
        //                 Productivity
        //             </span>
        //         </h1>
        //     </div>
        //     <div className="flex gap-[24px] justify-center mt-10">
        //         <div className="w-[357px] h-[280px] h-40 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">

        //             <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">

        //                 <img src={icon1} alt="Rocket icon" className="w-6 h-6" />
        //             </div>


        //             <div className="mt-5 flex flex-col gap-1">
        //                 <h3 className="text-white font-semibold text-xl">Smart Task Management</h3>
        //                 <p className="text-gray-400 mt-2 text-md">
        //                     Create, assign, and prioritize tasks with drag-and-drop simplicity.
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="w-[357px] h-[280px] h-40 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">

        //             <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">

        //                 <img src={icon2} alt="Rocket icon" className="w-6 h-6" />
        //             </div>


        //             <div className="mt-5 flex flex-col gap-1">
        //                 <h3 className="text-white font-semibold text-xl">Real-Time Collaboration</h3>
        //                 <p className="text-gray-400 mt-2 text-md">
        //                     Comment, share files, and update progress instantly with your team.
        //                 </p>
        //             </div>
        //         </div>
        //         <div className="w-[357px] h-[280px] h-40 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">

        //             <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">

        //                 <img src={icon3} alt="Rocket icon" className="w-6 h-6" />
        //             </div>


        //             <div className="mt-5 flex flex-col gap-1">
        //                 <h3 className="text-white font-semibold text-xl">Workflow Automation</h3>
        //                 <p className="text-gray-400 mt-2 text-md">
        //                     Automate repetitive tasks and save valuable time.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="w-full py-24 px-6">

            {/* Headings */}
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                        Smart Tools Limitless
                    </span>
                </h1>
                <h1 className="text-4xl sm:text-5xl font-extrabold mt-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                        Productivity
                    </span>
                </h1>
            </div>

            {/* Cards */}
            <div className="mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-7xl mx-auto">

                {/* Card 1 */}
                <div className="w-full sm:w-80 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <img src={icon1} alt="Rocket icon" className="w-6 h-6" />
                    </div>
                    <div className="mt-5 flex flex-col gap-1">
                        <h3 className="text-white font-semibold text-xl">Smart Task Management</h3>
                        <p className="text-gray-400 text-sm">
                            Create, assign, and prioritize tasks with drag-and-drop simplicity.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-80 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <img src={icon2} alt="Collaboration icon" className="w-6 h-6" />
                    </div>
                    <div className="mt-5 flex flex-col gap-1">
                        <h3 className="text-white font-semibold text-xl">Real-Time Collaboration</h3>
                        <p className="text-gray-400 text-sm">
                            Comment, share files, and update progress instantly with your team.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-full sm:w-80 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">
                    <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                        <img src={icon3} alt="Automation icon" className="w-6 h-6" />
                    </div>
                    <div className="mt-5 flex flex-col gap-1">
                        <h3 className="text-white font-semibold text-xl">Workflow Automation</h3>
                        <p className="text-gray-400 text-sm">
                            Automate repetitive tasks and save valuable time.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productivity;