// import React from 'react'
// import Vector1 from '../assets/Vector (2).svg'
// import group from '../assets/Mask group.svg'
// import Vector2 from '../assets/Frame (3).svg'
// import Vector from '../assets/Vector (1).svg'

// const Clients = () => {
//     return (
//         <div className="border-y-2 w-full items-center mt-2 gap-25 justify-center border-white/5 flex h-15">
//             <div className='flex mt-1 gap-2'>
//                 <img src={Vector1} alt="icon" className="w-8 h-8 ml-5" />
//                 <h1 className='text-white/40 font-bold text-[25px]'>Dropluxe</h1>
//             </div>
//             <div className='flex mt-1'>
//                 <img src={Vector} alt="icon" className="w-8 h-8 ml-5" />
//                 <h1 className='text-white/40 ml-2 font-bold text-[25px]'>DashMark</h1>
//             </div>
//             <div className='flex mt-1'>
//                 <img src={group} alt="icon" className="w-8 h-8 ml-5" />
//                 <h1 className='text-white/40 ml-2 font-bold text-[25px]'>Mindwandr</h1>
//             </div>
//             <div className='flex mt-1'>

//                 <h1 className='text-white/40 ml-2 font-bold text-[25px]'>Corelink</h1>

//             </div>
//             <div className='flex mt-1'>
//                 <img src={Vector2} alt="icon" className="w-8 h-8 ml-5" />
//                 <h1 className='text-white/40 ml-2 font-bold text-[25px]'>Quadric</h1>
//             </div>
//         </div>
//     )
// }

// export default Clients;

import React from 'react'
import Vector1 from '../assets/Vector (2).svg'
import group from '../assets/Mask group.svg'
import Vector2 from '../assets/Frame (3).svg'
import Vector from '../assets/Vector (1).svg'
import AOS from "aos";
import "aos/dist/aos.css";

const Clients = () => {
    return (
        <div className="border-y-2 w-full justify-center border-white/5 flex overflow-x-auto no-scrollbar py-2 gap-6">
            <div className='flex items-center gap-2 ml-5 flex-shrink-0' data-aos="fade-up" data-aos-delay="500">
                <img src={Vector1} alt="icon" className="w-8 h-8" />
                <h1 className='text-white/40 font-bold text-[25px]'>Dropluxe</h1>
            </div>
            <div className='flex items-center gap-2 ml-5 flex-shrink-0' data-aos="fade-up" data-aos-delay="500">
                <img src={Vector} alt="icon" className="w-8 h-8" />
                <h1 className='text-white/40 font-bold text-[25px]'>DashMark</h1>
            </div>
            <div className='flex items-center gap-2 ml-5 flex-shrink-0' data-aos="fade-up" data-aos-delay="600">
                <img src={group} alt="icon" className="w-8 h-8" />
                <h1 className='text-white/40 font-bold text-[25px]'>Mindwandr</h1>
            </div>
            <div className='flex items-center gap-2 ml-5 flex-shrink-0' data-aos="fade-up" data-aos-delay="700">
                <h1 className='text-white/40 font-bold text-[25px]'>Corelink</h1>
            </div>
            <div className='flex items-center gap-2 ml-5 flex-shrink-0' data-aos="fade-up" data-aos-delay="800">
                <img src={Vector2} alt="icon" className="w-8 h-8" />
                <h1 className='text-white/40 font-bold text-[25px]'>Quadric</h1>
            </div>
        </div>
    )
}

export default Clients;