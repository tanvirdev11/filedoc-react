// import TestimonialSection from './TestimonialSection';
// function Satisfied() {
//     return (
//         <div className=''>
//             <div className='w-120 h-40 ml-[700px] text-center mt-10'>
//                 <h1 className="text-5xl font-extrabold">
//                     <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#764bd3] to-[#FFFFFF]">
//                         Hear From Our
//                     </span>
//                 </h1>
//                 <h1 className="text-5xl font-extrabold mt-2">
//                     <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#C7ACFF] to-[#FFFFFF]">
//                         Satisfied Clients
//                     </span>
//                 </h1>
//             </div>
//             <div className=''>
//                 <TestimonialSection />
//             </div>
//         </div>
//     );
// }
// export default Satisfied;

import TestimonialSection from './TestimonialSection';

function Satisfied() {
    return (
        <div className='px-4 sm:px-6 lg:px-20 mt-12'>

            {/* Header */}
            <div className='text-center max-w-4xl mx-auto'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#764bd3] to-[#FFFFFF]">
                        Hear From Our
                    </span>
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C7ACFF] to-[#FFFFFF]">
                        Satisfied Clients
                    </span>
                </h1>
            </div>

            {/* Testimonials */}
            <div className='mt-10'>
                <TestimonialSection />
            </div>
        </div>
    );
}

export default Satisfied;