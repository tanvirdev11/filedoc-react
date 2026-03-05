import Frame18 from '../assets/Frame 18.png';
import Nav from './Navbar';
import Frame from '../assets/bg5.png';
import Frame1 from '../assets/Frame (1).svg'
import Frame2 from '../assets/arrow-up-left-01 (1).svg'
import Frame3 from '../assets/Frame 14.png';
function Background() {
    return (
        <>
            <div className='w-full bg-cover h-300 bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${Frame18})` }}>
                <Nav />

                <div className=''>
                    <div className='text-center'>
                        <div className='mx-160 mt-20'>
                            <h1 className='text-6xl text-white font-bold'>Control Beyond Cloud</h1>
                        </div>
                        <div className='mx-160 mt-5'>
                            <h1 className='text-6xl text-white font-bold'>Anytime</h1>
                        </div>
                    </div>
                    <div className='text-white mx-180 mt-10 text-[18px] w-120 text-center'>
                        <p className=''>Manage and access projects from any device, ensuring your team stays connected and productive.</p>
                    </div>
                </div>
                <div className=''>
                    <div className='flex mx-190 mt-10 gap-5'>
                        <div className="">
                            <button className="bg-white hover:bg-[#ddd] duration-400 flex pl-7 items-center py-1 rounded-full cursor-pointer w-[195px] h-[48px]">Start Free Trial <img src={Frame2} className='bg-center bg-no-repeat w-9 h-9 p-2 ml-5 bg-[#9061FF] rounded-full' alt="" /></button>

                        </div>
                        <div className="">
                            <button className="bg-[#7A7585] border border-[#FFFFFF] hover:bg-[#494650] duration-400 flex pl-7 items-center py-1 rounded-full cursor-pointer w-[195px] h-[48px] text-white">Watch the Demo<img src={Frame1} className='bg-no-repeat w-9 h-9 p-2 ml-2' alt="" /></button>
                        </div>
                    </div>
                </div>

                <div className='w-full h-screen mx-90 mt-10 bg-no-repeat flex flex-col' style={{ backgroundImage: `url(${Frame})` }}>
                    <div className='w-50 h-20 text-center ml-120 mt-100 z-50'>
                        <div className='w-40 h-15 ml-5 bg-no-repeat' style={{ backgroundImage: `url(${Frame3})` }}></div>
                        <h1 className='text-white text-3xl font-bold'>50K+</h1>
                        <p className='text-white'>Active Users worldwide</p>
                    </div>
                    <div className="mt-117 absolute ml-2 rounded-2xl bg-gradient-to-b from-transparent via-white/2 to-white/15 backdrop-blur-sm w-292 h-40">
                    </div>
                </div>

            </div>
        </>
    );
}
export default Background;