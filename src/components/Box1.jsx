import Vector from '../assets/Vector (1).svg'
import arrow from "../assets/arrow-up-left-01 (1).svg";
import Clients from './Clients';
import Footer from './Footer';
import icon1 from '../assets/Icon.svg'
import icon2 from '../assets/Icon (1).svg'
import icon3 from '../assets/Icon (2).svg'
import Frame from '../assets/Frame (10).svg'
import Frame1 from '../assets/Frame (8).svg'
import Frame3 from '../assets/Frame (3).svg'
import Frame4 from '../assets/Frame (4).svg'
import Frame5 from '../assets/Frame (5).svg'
import Frame6 from '../assets/Frame (6).svg'
import Frame7 from '../assets/Frame (7).svg'
import bg5 from '../assets/color.png'
import icon4 from '../assets/Icon (7).svg'
import icon5 from '../assets/Icon (6).svg'

import TestimonialSection from './TestimonialSection';

function Box1() {
    return (
        <>
            <Clients />

            <div className="w-full h-screen">
                <div className="w-full h-[470px]">
                    <div className="mt-[116px] mx-[467px]">
                        <h1 className="text-5xl  font-extrabold text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                                Smart Tools Limitless
                            </span>
                        </h1>
                        <h1 className="text-5xl font-extrabold text-center ">
                            <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                                Productivity
                            </span>
                        </h1>
                    </div>

                    <div className="flex gap-[24px] justify-center mt-10">
                        <div className="w-[357px] h-[280px] h-40 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">

                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">

                                <img src={icon1} alt="Rocket icon" className="w-6 h-6" />
                            </div>


                            <div className="mt-5 flex flex-col gap-1">
                                <h3 className="text-white font-semibold text-xl">Smart Task Management</h3>
                                <p className="text-gray-400 mt-2 text-md">
                                    Create, assign, and prioritize tasks with drag-and-drop simplicity.
                                </p>
                            </div>
                        </div>
                        <div className="w-[357px] h-[280px] h-40 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">

                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">

                                <img src={icon2} alt="Rocket icon" className="w-6 h-6" />
                            </div>


                            <div className="mt-5 flex flex-col gap-1">
                                <h3 className="text-white font-semibold text-xl">Real-Time Collaboration</h3>
                                <p className="text-gray-400 mt-2 text-md">
                                    Comment, share files, and update progress instantly with your team.
                                </p>
                            </div>
                        </div>
                        <div className="w-[357px] h-[280px] h-40 bg-gradient-to-br from-[#1f1a3a] to-[#1a152b] rounded-xl p-6 pt-10 flex flex-col gap-4">

                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">

                                <img src={icon3} alt="Rocket icon" className="w-6 h-6" />
                            </div>


                            <div className="mt-5 flex flex-col gap-1">
                                <h3 className="text-white font-semibold text-xl">Workflow Automation</h3>
                                <p className="text-gray-400 mt-2 text-md">
                                    Automate repetitive tasks and save valuable time.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='border-b-1 border-[#342655] w-full mt-[80px]'></div>
                    <div className='flex'>
                        <div className='w-120 h-40 ml-[189px] mt-[120px]'>
                            <h1 className="text-5xl font-extrabold">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                                    Boost Team
                                </span>
                            </h1>
                            <h1 className="text-5xl font-extrabold mt-2">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                                    performance with
                                </span>
                            </h1>
                            <h1 className="text-5xl font-extrabold mt-3">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                                    One Platform
                                </span>
                            </h1>
                            <div className='mt-10'>
                                <p className='text-gray-400 text-[20px]'>Boost Team performance with
                                    Centralize your communication, task tracking, and performance analytics in one seamless system.</p>
                            </div>
                        </div>
                        <div className="w-[414px] ml-150 mt-[80px] h-[414px] rounded-full border border-[#291F3D] opacity-100 relative">

                            <div className="w-[274px] h-[274px] rounded-full border border-[#291F3D] opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="relative w-[500px] h-[500px]">

                                    {/* Frame 1 */}
                                    <div className="absolute left-42 w-10 h-10 bg-[#1F1F1F] border border-[#4C4C4C] rounded-full flex items-center justify-center p-2">
                                        <img src={Frame1} alt="" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Frame 2 */}
                                    <div className="absolute top-20 right-35 w-10 h-10 bg-[#1F1F1F] border border-[#4C4C4C] rounded-full flex items-center justify-center p-2">
                                        <img src={Frame3} alt="" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Frame 3 */}
                                    <div className="absolute bottom-55 left-70 w-10 h-10 bg-[#1F1F1F] border border-[#4C4C4C] rounded-full flex items-center justify-center p-2">
                                        <img src={Frame4} alt="" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Frame 4 */}
                                    <div className="absolute bottom-35 right-95 w-10 h-10 bg-[#1F1F1F] border border-[#4C4C4C] rounded-full flex items-center justify-center p-2">
                                        <img src={Frame5} alt="" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Frame 5 */}
                                    <div className="absolute top-40 right-[475px] w-10 h-10 bg-[#1F1F1F] border border-[#4C4C4C] rounded-full flex items-center justify-center p-2 -translate-y-1/2">
                                        <img src={Frame6} alt="" className="w-full h-full object-contain" />
                                    </div>

                                    {/* Frame 6 */}
                                    <div className="absolute top- right-[500px] w-10 h-10 bg-[#1F1F1F] border border-[#4C4C4C] rounded-full flex items-center justify-center p-2 -translate-y-1/2">
                                        <img src={Frame7} alt="" className="w-full h-full object-contain" />
                                    </div>

                                </div>
                                <div className="w-35 h-35 rounded-full border border-[#291F3D] opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className='ml- w-25 h-25 rounded-full border border-[#291F3D] opacity-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'><img src={Frame} alt="icon " className="w-15 h-15 ml-5 mt-4.5 rounded-full" style={{
                                        boxShadow: ` 0 0 50px #423260, 0 0 50px #423260, 0 0 60px #423260, 0 0 80px #423260, 0 0 100px #423260`
                                    }}>

                                    </img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-1 border-[#342655] w-full mt-[80px]'></div>
                    <div className='flex'>
                        <div className='w-[504px] ml-[300px] mt-[50px] h-[290px]'>
                            <img src={bg5} alt="" className='' />
                        </div>
                        <div className=''>
                            <div className='w-120 h-40 ml-[400px] mt-[120px]'>
                                <h1 className="text-5xl font-extrabold">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#764bd3] to-[#FFFFFF]">
                                        Your Workspace to
                                    </span>
                                </h1>
                                <h1 className="text-5xl ml-[90px] font-extrabold mt-2">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#C7ACFF] to-[#FFFFFF]">
                                        Your Workflow
                                    </span>
                                </h1>
                                <div className='ml-27 mt-[50px]'>
                                    <p className='text-white/50 text-[19px] ml-18'>Adjust themes, workflows, and </p>
                                    <p className='text-white/50 text-[19px]'>dashboard layouts to match your team's</p>
                                    <p className='text-white/50 text-[19px] ml-40'>process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-b-1 border-[#342655] w-full mt-[90px]'></div>
                    <div className=''>
                        <div className='w-120 h-40 ml-[700px] text-center mt-10'>
                            <h1 className="text-5xl font-extrabold">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#764bd3] to-[#FFFFFF]">
                                    Hear From Our
                                </span>
                            </h1>
                            <h1 className="text-5xl font-extrabold mt-2">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#C7ACFF] to-[#FFFFFF]">
                                    Satisfied Clients
                                </span>
                            </h1>
                        </div>
                        <div className=''>
                            <TestimonialSection />
                        </div>
                    </div>
                    <div className='mt-20'>
                        <div className=''>
                            <div className='w-160 h-40 ml-[650px] text-center mt-10'>
                                <h1 className="text-5xl font-extrabold">
                                    <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3] ">
                                        Simple, Transparent Pricing
                                    </span>
                                </h1>
                                <p className='text-white/40 text-center text-2xl mt-[16px]'>Choose the plan that fits your team's needs. All plans include a 14-day free trial.</p>
                            </div>
                        </div>
                        <div className='flex gap-10 justify-center'>

                            {/* Card 1 */}
                            <div className='w-[312px] h-[510px] bg-linear-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl'>
                                <div className='p-[24px]'>
                                    <h1 className='font-bold text-[30px] text-white'>Basic</h1>
                                    <p className='text-white/40 '>Perfect for small teams</p>
                                    <div className='flex mt-5'>
                                        <h1 className='font-bold text-4xl text-white'>$29</h1>
                                        <span className='text-white/40 mt-3 ml-1'>/month</span>
                                    </div>
                                    <div className=''>
                                        <div className=''>
                                            <div
                                                className="mt-5 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Up to 5 team members</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>100 GB storage</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Basic security features</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Email support</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Mobile apps</p>
                                            </div>


                                        </div>

                                    </div>


                                </div>
                                <div className='ml-8 mt-22'>
                                    <button className='text-white hover:bg-black/20 duration-300 cursor-pointer px-[69px] py-[8px] rounded-xl border border-[#4B4B4B]'>Start Free Trial</button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className='w-[312px] h-[510px] bg-black border border-[#9061FF] rounded-2xl'>
                                <div className='p-[24px]'>
                                    <div className='flex'>
                                        <h1 className='font-bold text-[30px] text-white'>Pro</h1>
                                        <button className='bg-white text-[13px] w-[90px] h-[28px] hover:bg-[#ddd] duration-200 cursor-pointer rounded-full ml-30 mt-1'>Most Popular</button>
                                    </div>
                                    <p className='text-white/40 '>For growing businesses</p>
                                    <div className='flex mt-5'>
                                        <h1 className='font-bold text-4xl text-[#9061FF]'>$79</h1>
                                        <span className='text-white/40 mt-3 ml-1'>/month</span>
                                    </div>
                                    <div className=''>
                                        <div
                                            className="mt-5 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Up to 25 team members</p>
                                        </div>
                                        <div
                                            className="mt-2 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>1 TB storage</p>
                                        </div>
                                        <div
                                            className="mt-2 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Advanced security & encryption</p>
                                        </div>
                                        <div
                                            className="mt-2 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Priority support</p>
                                        </div>
                                        <div
                                            className="mt-2 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Custom branding</p>
                                        </div>
                                        <div
                                            className="mt-2 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>API access</p>
                                        </div>
                                        <div
                                            className="mt-2 flex"

                                        ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Advanced analytics </p>
                                        </div>


                                    </div>
                                    <div className='ml-2.5 mt-12'>
                                        <button className='text-white  px-[69px] py-[8px] rounded-xl bg-[#9061FF] cursor-pointer duration-500 hover:bg-[#714cc9]'>Start Free Trial</button>
                                    </div>


                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className='w-[312px] h-[510px] bg-linear-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl'>
                                <div className='p-[24px]'>
                                    <h1 className='font-bold text-[30px] text-white'>Custom</h1>
                                    <p className='text-white/40 '>Perfect for small teams</p>
                                    <div className='flex mt-5'>
                                        <h1 className='font-bold text-4xl text-white'>$29</h1>
                                        <span className='text-white/40 mt-3 ml-1'>/month</span>
                                    </div>
                                    <div className=''>
                                        <div className=''>
                                            <div
                                                className="mt-5 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Unlimited team members</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Unlimited storage</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Enterprise security suite</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>24/7 dedicated support</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>White-label solution</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Custom integrations</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>SLA guarantee</p>
                                            </div>
                                            <div
                                                className="mt-2 flex"

                                            ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Dedicated account manager</p>
                                            </div>


                                        </div>
                                        <div className='ml-1 mt-5'>
                                            <button className='text-white cursor-pointer hover:bg-black/20 duration-300 px-[69px] py-[8px] rounded-xl border border-[#4B4B4B]'>Contact Sales</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[1200px] h-[422px] bg-[#221B33] ml-95 rounded-3xl'>
                        <div className='w-120 h-40 text-center mt-10 mx-[364px]'>
                            <h1 className="text-5xl font-extrabold pt-[50px]">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#A678FF]">
                                    Take control of your
                                </span>
                            </h1>
                            <h1 className="text-5xl font-extrabold mt-2">
                                <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#A678FF]">
                                    team’s success
                                </span>
                            </h1>
                        </div>
                        <div className='mt-[16px] mx-[438px]'>
                            <p className='text-white/80 text-[16px] w-[300px] text-center'>Start organizing smarter and achieving more today.</p>
                        </div>
                        <div className="">
                            <button className="bg-white hover:bg-[#ddd] duration-400 flex pl-7 items-center py-1 ml-125 mt-15 rounded-full cursor-pointer w-[195px] h-[48px]">Start Free Trial <img src={arrow} className='bg-center bg-no-repeat w-9 h-9 p-2 ml-5 bg-[#9061FF] rounded-full' alt="" /></button>

                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Box1;