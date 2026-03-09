import React from 'react'
import icon6 from '../assets/Icon (3).svg'
import icon7 from '../assets/Icon (4).svg'
import icon8 from '../assets/Icon (5).svg'
import Frame from '../assets/Frame (10).svg'

const Footer = () => {
    return (
        // <footer className='w-full mt-10 h-[500px] bg-gradient-to-t from-[#544180] to-[#17131F]'>
        //     <div className=''>
        //         <div className='flex'>
        //             <img src={Frame} alt="" className='ml-[160px] mt-[82px] w-10' />
        //             <h1 className='mt-[86px] ml-[10px] text-white font-bold text-2xl'>FileDock</h1>
        //             <div className='relative flex'>
        //                 <div className='ml-[300px] mt-[70px] absolute'>
        //                     <h1 className='text-2xl text-white font-bold'>Product</h1>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Security</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Integrations</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Pricing</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Changelog</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Documentation</p>
        //                 </div>

        //                 <div className='ml-120 mt-[70px] absolute'>
        //                     <h1 className='text-2xl text-white font-bold'>Company</h1>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>About Us</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Careers</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Blog</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Partners</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Contact</p>
        //                 </div>

        //                 <div className='ml-165 mt-[70px] absolute'>
        //                     <h1 className='text-2xl text-white font-bold'>Support</h1>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Help Center</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Community</p>
        //                     <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Feedback</p>
        //                 </div>
        //                 <div className='ml-210 mt-[70px] absolute'>
        //                     <h1 className='text-2xl text-white font-bold'>Resources</h1>
        //                     <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Case Studies</p>
        //                     <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Whitepapers</p>
        //                     <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Templates</p>
        //                     <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>FAQ</p>
        //                 </div>

        //             </div>
        //         </div>
        //         <div className='w-90 ml-[160px] mt-[24px]'>
        //             <p className='text-[#A2A1A5] '>The cutting-edge platform for secure management of digital assets and seamless team collaboration.</p>
        //         </div>
        //         <div className='flex gap-5 ml-[160px] mt-5'>
        //             <div className='border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px]'>
        //                 <div className='cursor-pointer'><img src={icon6} alt="" /></div>
        //             </div>
        //             <div className='border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px]'>
        //                 <div className='cursor-pointer'><img src={icon7} alt="" /></div>
        //             </div>
        //             <div className=''>
        //                 <div className='border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px] cursor-pointer hover:bg-white/10'><img src={icon8} alt="" /></div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className='border-b border-white/40 w-[1550px] ml-[160px] mt-25'></div>
        //     <div className='flex'>
        //         <div className='text-[#A59AC0] mt-[32px] ml-[160px]'>© 2026 filedock.</div>
        //         <div className='text-[#A59AC0] mt-[32px] ml-325'>All rights reserved.</div>
        //     </div>
        // </footer>

        <footer className="w-full mt-10 bg-gradient-to-t from-[#544180] to-[#17131F] text-white">
            <div className="max-w-[1440px] mx-auto px-6 py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

                    {/* Logo + Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2">
                            <img src={Frame} alt="" className="w-10" />
                            <h1 className="text-2xl font-bold">FileDock</h1>
                        </div>

                        <p className="text-[#A2A1A5] mt-4 max-w-sm">
                            The cutting-edge platform for secure management of digital assets and
                            seamless team collaboration.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <div className="border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px] cursor-pointer">
                                <img src={icon6} alt="" />
                            </div>
                            <div className="border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px] cursor-pointer">
                                <img src={icon7} alt="" />
                            </div>
                            <div className="border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px] cursor-pointer hover:bg-white/10">
                                <img src={icon8} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h1 className="text-xl font-bold mb-3">Product</h1>
                        <ul className="space-y-2 text-[#99A1AF]">
                            <li className="cursor-pointer hover:text-white/60">Security</li>
                            <li className="cursor-pointer hover:text-white/60">Integrations</li>
                            <li className="cursor-pointer hover:text-white/60">Pricing</li>
                            <li className="cursor-pointer hover:text-white/60">Changelog</li>
                            <li className="cursor-pointer hover:text-white/60">Documentation</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h1 className="text-xl font-bold mb-3">Company</h1>
                        <ul className="space-y-2 text-[#99A1AF]">
                            <li className="cursor-pointer hover:text-white/60">About Us</li>
                            <li className="cursor-pointer hover:text-white/60">Careers</li>
                            <li className="cursor-pointer hover:text-white/60">Blog</li>
                            <li className="cursor-pointer hover:text-white/60">Partners</li>
                            <li className="cursor-pointer hover:text-white/60">Contact</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h1 className="text-xl font-bold mb-3">Support</h1>
                        <ul className="space-y-2 text-[#99A1AF]">
                            <li className="cursor-pointer hover:text-white/60">Help Center</li>
                            <li className="cursor-pointer hover:text-white/60">Community</li>
                            <li className="cursor-pointer hover:text-white/60">Feedback</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h1 className="text-xl font-bold mb-3">Resources</h1>
                        <ul className="space-y-2 text-[#99A1AF]">
                            <li className="cursor-pointer hover:text-white/60">Case Studies</li>
                            <li className="cursor-pointer hover:text-white/60">Whitepapers</li>
                            <li className="cursor-pointer hover:text-white/60">Templates</li>
                            <li className="cursor-pointer hover:text-white/60">FAQ</li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-b border-white/40 my-10 mt-20"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row justify-between text-[#A59AC0] text-sm">
                    <p>© 2026 filedock.</p>
                    <p>All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer