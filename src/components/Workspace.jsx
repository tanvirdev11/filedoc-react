import bg5 from '../assets/color.png'
import AOS from "aos";
import "aos/dist/aos.css";
function Workspace() {
    return (
        // <div className='flex'>
        //     <div className='w-[504px] ml-[300px] mt-[50px] h-[290px]'>
        //         <img src={bg5} alt="" className='' />
        //     </div>
        //     <div className=''>
        //         <div className='w-120 h-40 ml-[400px] mt-[120px]'>
        //             <h1 className="text-5xl font-extrabold">
        //                 <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#764bd3] to-[#FFFFFF]">
        //                     Your Workspace to
        //                 </span>
        //             </h1>
        //             <h1 className="text-5xl ml-[90px] font-extrabold mt-2">
        //                 <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#C7ACFF] to-[#FFFFFF]">
        //                     Your Workflow
        //                 </span>
        //             </h1>
        //             <div className='ml-27 mt-[50px]'>
        //                 <p className='text-white/50 text-[19px] ml-18'>Adjust themes, workflows, and </p>
        //                 <p className='text-white/50 text-[19px]'>dashboard layouts to match your team's</p>
        //                 <p className='text-white/50 text-[19px] ml-40'>process.</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>




        <div className="flex flex-col lg:ml-60 lg:flex-row items-center lg:items-start px-4 lg:px-0 lg:mt-5">
            {/* Left Image Section */}
            <div className="w-full sm:w-3/4 lg:w-[504px] mt-6 lg:mt-[50px] mx-auto lg:mx-0" data-aos="fade-up" data-aos-delay="700">
                <img src={bg5} alt="workspace" className="w-full h-auto" />
            </div>

            {/* Right Text Section */}
            <div className="w-full lg:w-1/2 lg:ml-90 mt-8 lg:mt-[120px] text-center lg:text-left px-4 lg:px-0">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold" data-aos="fade-up" data-aos-delay="600">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#764bd3] to-[#FFFFFF]" data-aos="fade-up" data-aos-delay="500">
                        Your Workspace to
                    </span>
                </h1>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2" data-aos="fade-up" data-aos-delay="500">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C7ACFF] to-[#FFFFFF]">
                        Your Workflow
                    </span>
                </h1>

                <div className="mt-6 sm:mt-8 text-white/50 text-base sm:text-[19px] space-y-1 lg:space-y-0" data-aos="fade-up" data-aos-delay="400">
                    <p>Adjust themes, workflows, and</p>
                    <p>dashboard layouts to match your team's</p>
                    <p>process.</p>
                </div>
            </div>
        </div>
    )
}
export default Workspace;