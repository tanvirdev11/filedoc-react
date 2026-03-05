import React from 'react'
import icon6 from '../assets/Icon (3).svg'
import icon7 from '../assets/Icon (4).svg'
import icon8 from '../assets/Icon (5).svg'
import Frame from '../assets/Frame (10).svg'

const Footer = () => {
    return (
        <footer className='w-full mt-10 h-[500px] bg-gradient-to-t from-[#544180] to-[#17131F]'>
            <div className=''>
                <div className='flex'>
                    <img src={Frame} alt="" className='ml-[160px] mt-[82px] w-10' />
                    <h1 className='mt-[86px] ml-[10px] text-white font-bold text-2xl'>FileDock</h1>
                    <div className='relative flex'>
                        <div className='ml-[300px] mt-[70px] absolute'>
                            <h1 className='text-2xl text-white font-bold'>Product</h1>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Security</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Integrations</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Pricing</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Changelog</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Documentation</p>
                        </div>

                        <div className='ml-120 mt-[70px] absolute'>
                            <h1 className='text-2xl text-white font-bold'>Company</h1>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>About Us</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Careers</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Blog</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Partners</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Contact</p>
                        </div>

                        <div className='ml-165 mt-[70px] absolute'>
                            <h1 className='text-2xl text-white font-bold'>Support</h1>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Help Center</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Community</p>
                            <p className='text-[#99A1AF] text-[16px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Feedback</p>
                        </div>
                        <div className='ml-210 mt-[70px] absolute'>
                            <h1 className='text-2xl text-white font-bold'>Resources</h1>
                            <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Case Studies</p>
                            <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Whitepapers</p>
                            <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>Templates</p>
                            <p className='text-[#99A1AF] text-[15px] mt-2 cursor-pointer hover:text-white/40 duration-200'>FAQ</p>
                        </div>

                    </div>
                </div>
                <div className='w-90 ml-[160px] mt-[24px]'>
                    <p className='text-[#A2A1A5] '>The cutting-edge platform for secure management of digital assets and seamless team collaboration.</p>
                </div>
                <div className='flex gap-5 ml-[160px] mt-5'>
                    <div className='border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px]'>
                        <div className='cursor-pointer'><img src={icon6} alt="" /></div>
                    </div>
                    <div className='border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px]'>
                        <div className='cursor-pointer'><img src={icon7} alt="" /></div>
                    </div>
                    <div className=''>
                        <div className='border-t border-r border-[#FFFDFF] p-2 bg-gradient-to-r from-[#31254B] to-[#221B33] rounded-[10px] cursor-pointer hover:bg-white/10'><img src={icon8} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className='border-b border-white/40 w-[1550px] ml-[160px] mt-25'></div>
            <div className='flex'>
                <div className='text-[#A59AC0] mt-[32px] ml-[160px]'>© 2026 filedock.</div>
                <div className='text-[#A59AC0] mt-[32px] ml-325'>All rights reserved.</div>
            </div>
        </footer>
    )
}

export default Footer