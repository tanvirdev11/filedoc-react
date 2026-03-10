// import icon4 from '../assets/Icon (7).svg'
// import icon5 from '../assets/Icon (6).svg'
// function Transparent() {
//     return (
//         <div className='mt-20'>
//             <div className=''>
//                 <div className='w-160 h-40 ml-[650px] text-center mt-10'>
//                     <h1 className="text-5xl font-extrabold">
//                         <span class="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3] ">
//                             Simple, Transparent Pricing
//                         </span>
//                     </h1>
//                     <p className='text-white/40 text-center text-2xl mt-[16px]'>Choose the plan that fits your team's needs. All plans include a 14-day free trial.</p>
//                 </div>
//             </div>
//             <div className='flex gap-10 justify-center'>

//                 {/* Card 1 */}
//                 <div className='w-[312px] h-[510px] bg-linear-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl'>
//                     <div className='p-[24px]'>
//                         <h1 className='font-bold text-[30px] text-white'>Basic</h1>
//                         <p className='text-white/40 '>Perfect for small teams</p>
//                         <div className='flex mt-5'>
//                             <h1 className='font-bold text-4xl text-white'>$29</h1>
//                             <span className='text-white/40 mt-3 ml-1'>/month</span>
//                         </div>
//                         <div className=''>
//                             <div className=''>
//                                 <div
//                                     className="mt-5 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Up to 5 team members</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>100 GB storage</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Basic security features</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Email support</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Mobile apps</p>
//                                 </div>


//                             </div>

//                         </div>


//                     </div>
//                     <div className='ml-8 mt-22'>
//                         <button className='text-white hover:bg-black/20 duration-300 cursor-pointer px-[69px] py-[8px] rounded-xl border border-[#4B4B4B]'>Start Free Trial</button>
//                     </div>
//                 </div>

//                 {/* Card 2 */}
//                 <div className='w-[312px] h-[510px] bg-black border border-[#9061FF] rounded-2xl'>
//                     <div className='p-[24px]'>
//                         <div className='flex'>
//                             <h1 className='font-bold text-[30px] text-white'>Pro</h1>
//                             <button className='bg-white text-[13px] w-[90px] h-[28px] hover:bg-[#ddd] duration-200 cursor-pointer rounded-full ml-30 mt-1'>Most Popular</button>
//                         </div>
//                         <p className='text-white/40 '>For growing businesses</p>
//                         <div className='flex mt-5'>
//                             <h1 className='font-bold text-4xl text-[#9061FF]'>$79</h1>
//                             <span className='text-white/40 mt-3 ml-1'>/month</span>
//                         </div>
//                         <div className=''>
//                             <div
//                                 className="mt-5 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Up to 25 team members</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>1 TB storage</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Advanced security & encryption</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Priority support</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Custom branding</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>API access</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Advanced analytics </p>
//                             </div>


//                         </div>
//                         <div className='ml-2.5 mt-12'>
//                             <button className='text-white  px-[69px] py-[8px] rounded-xl bg-[#9061FF] cursor-pointer duration-500 hover:bg-[#714cc9]'>Start Free Trial</button>
//                         </div>


//                     </div>
//                 </div>
//                 {/* Card 3 */}
//                 <div className='w-[312px] h-[510px] bg-linear-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl'>
//                     <div className='p-[24px]'>
//                         <h1 className='font-bold text-[30px] text-white'>Custom</h1>
//                         <p className='text-white/40 '>Perfect for small teams</p>
//                         <div className='flex mt-5'>
//                             <h1 className='font-bold text-4xl text-white'>$29</h1>
//                             <span className='text-white/40 mt-3 ml-1'>/month</span>
//                         </div>
//                         <div className=''>
//                             <div className=''>
//                                 <div
//                                     className="mt-5 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Unlimited team members</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Unlimited storage</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Enterprise security suite</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>24/7 dedicated support</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>White-label solution</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Custom integrations</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>SLA guarantee</p>
//                                 </div>
//                                 <div
//                                     className="mt-2 flex"

//                                 ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Dedicated account manager</p>
//                                 </div>


//                             </div>
//                             <div className='ml-1 mt-5'>
//                                 <button className='text-white cursor-pointer hover:bg-black/20 duration-300 px-[69px] py-[8px] rounded-xl border border-[#4B4B4B]'>Contact Sales</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Transparent;

// import icon4 from '../assets/Icon (7).svg';
// import icon5 from '../assets/Icon (6).svg';

// function Transparent() {
//     return (
//         <div className='mt-20 px-4 sm:px-6 lg:px-20'>
//             {/* Header */}
//             <div className='text-center max-w-4xl mx-auto'>
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
//                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
//                         Simple, Transparent Pricing
//                     </span>
//                 </h1>
//                 <p className='text-white/40 mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl'>
//                     Choose the plan that fits your team's needs. All plans include a 14-day free trial.
//                 </p>
//             </div>

//             {/* Cards */}
//             <div className='w-[312px] h-[510px] bg-linear-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl'>
//                 <div className='p-[24px]'>
//                     <h1 className='font-bold text-[30px] text-white'>Basic</h1>
//                     <p className='text-white/40 '>Perfect for small teams</p>
//                     <div className='flex mt-5'>
//                         <h1 className='font-bold text-4xl text-white'>$29</h1>
//                         <span className='text-white/40 mt-3 ml-1'>/month</span>
//                     </div>
//                     <div className=''>
//                         <div className=''>
//                             <div
//                                 className="mt-5 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Up to 5 team members</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>100 GB storage</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Basic security features</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Email support</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Mobile apps</p>
//                             </div>


//                         </div>

//                     </div>


//                 </div>
//                 <div className='ml-8 mt-22'>
//                     <button className='text-white hover:bg-black/20 duration-300 cursor-pointer px-[69px] py-[8px] rounded-xl border border-[#4B4B4B]'>Start Free Trial</button>
//                 </div>
//             </div>

//             {/* Card 2 - Pro */}
//             <div className='w-[312px] h-[510px] bg-black border border-[#9061FF] rounded-2xl'>
//                 <div className='p-[24px]'>
//                     <div className='flex'>
//                         <h1 className='font-bold text-[30px] text-white'>Pro</h1>
//                         <button className='bg-white text-[13px] w-[90px] h-[28px] hover:bg-[#ddd] duration-200 cursor-pointer rounded-full ml-30 mt-1'>Most Popular</button>
//                     </div>
//                     <p className='text-white/40 '>For growing businesses</p>
//                     <div className='flex mt-5'>
//                         <h1 className='font-bold text-4xl text-[#9061FF]'>$79</h1>
//                         <span className='text-white/40 mt-3 ml-1'>/month</span>
//                     </div>
//                     <div className=''>
//                         <div
//                             className="mt-5 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Up to 25 team members</p>
//                         </div>
//                         <div
//                             className="mt-2 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>1 TB storage</p>
//                         </div>
//                         <div
//                             className="mt-2 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Advanced security & encryption</p>
//                         </div>
//                         <div
//                             className="mt-2 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Priority support</p>
//                         </div>
//                         <div
//                             className="mt-2 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Custom branding</p>
//                         </div>
//                         <div
//                             className="mt-2 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>API access</p>
//                         </div>
//                         <div
//                             className="mt-2 flex"

//                         ><img src={icon5} alt="" /><p className='text-white/40 ml-1'>Advanced analytics </p>
//                         </div>


//                     </div>
//                     <div className='ml-2.5 mt-12'>
//                         <button className='text-white  px-[69px] py-[8px] rounded-xl bg-[#9061FF] cursor-pointer duration-500 hover:bg-[#714cc9]'>Start Free Trial</button>
//                     </div>


//                 </div>
//             </div>

//             {/* Card 3 - Custom */}
//             <div className='w-[312px] h-[510px] bg-linear-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl'>
//                 <div className='p-[24px]'>
//                     <h1 className='font-bold text-[30px] text-white'>Custom</h1>
//                     <p className='text-white/40 '>Perfect for small teams</p>
//                     <div className='flex mt-5'>
//                         <h1 className='font-bold text-4xl text-white'>$29</h1>
//                         <span className='text-white/40 mt-3 ml-1'>/month</span>
//                     </div>
//                     <div className=''>
//                         <div className=''>
//                             <div
//                                 className="mt-5 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Unlimited team members</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Unlimited storage</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Enterprise security suite</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>24/7 dedicated support</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>White-label solution</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Custom integrations</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>SLA guarantee</p>
//                             </div>
//                             <div
//                                 className="mt-2 flex"

//                             ><img src={icon4} alt="" /><p className='text-white/40 ml-1'>Dedicated account manager</p>
//                             </div>


//                         </div>
//                         <div className='ml-1 mt-5'>
//                             <button className='text-white cursor-pointer hover:bg-black/20 duration-300 px-[69px] py-[8px] rounded-xl border border-[#4B4B4B]'>Contact Sales</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Transparent;



import icon4 from '../assets/Icon (7).svg';
import icon5 from '../assets/Icon (6).svg';
import AOS from "aos";
import "aos/dist/aos.css";

function Transparent() {
    return (
        <div className='mt-20 px-4 sm:px-6 lg:px-90'>
            {/* Header */}
            <div className='text-center max-w-4xl mx-auto' data-aos="fade-up" data-aos-delay="600">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#764bd3]">
                        Simple, Transparent Pricing
                    </span>
                </h1>
                <p className='text-white/40 mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl' data-aos="fade-up" data-aos-delay="700">
                    Choose the plan that fits your team's needs. All plans include a 14-day free trial.
                </p>
            </div>

            {/* Cards Container */}
            <div className='mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>

                {/* Card 1 - Basic */}
                <div className='w-full max-w-sm bg-gradient-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl flex flex-col justify-between' data-aos="fade-up" data-aos-delay="700">
                    <div className='p-6'>
                        <h1 className='font-bold text-2xl sm:text-3xl text-white'>Basic</h1>
                        <p className='text-white/40 mt-1'>Perfect for small teams</p>
                        <div className='flex mt-5 items-baseline'>
                            <h1 className='font-bold text-3xl sm:text-4xl text-white'>$29</h1>
                            <span className='text-white/40 ml-1'>/month</span>
                        </div>

                        {/* Features */}
                        <div className='mt-5 space-y-2'>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Up to 5 team members</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>100 GB storage</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Basic security features</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Email support</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Mobile apps</p></div>
                        </div>
                    </div>
                    <div className='p-6' data-aos="fade-up" data-aos-delay="500">
                        <button className='w-full text-white hover:bg-black/20 duration-300 px-6 py-2 rounded-xl border border-[#4B4B4B]'>Start Free Trial</button>
                    </div>
                </div>

                {/* Card 2 - Pro */}
                <div className='w-full max-w-sm bg-black border border-[#9061FF] rounded-2xl flex flex-col justify-between' data-aos="fade-up" data-aos-delay="600">
                    <div className='p-6'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-2xl sm:text-3xl text-white'>Pro</h1>
                            <span className='bg-white text-[13px] px-3 py-1 rounded-full text-center text-black'>Most Popular</span>
                        </div>
                        <p className='text-white/40 mt-1'>For growing businesses</p>
                        <div className='flex mt-5 items-baseline'>
                            <h1 className='font-bold text-3xl sm:text-4xl text-[#9061FF]'>$79</h1>
                            <span className='text-white/40 ml-1'>/month</span>
                        </div>

                        {/* Features */}
                        <div className='mt-5 space-y-2'>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>Up to 25 team members</p></div>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>1 TB storage</p></div>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>Advanced security & encryption</p></div>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>Priority support</p></div>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>Custom branding</p></div>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>API access</p></div>
                            <div className='flex items-center'><img src={icon5} alt="" /><p className='text-white/40 ml-2'>Advanced analytics</p></div>
                        </div>
                    </div>
                    <div className='p-6' data-aos="fade-up" data-aos-delay="700">
                        <button className='w-full text-white bg-[#9061FF] hover:bg-[#714cc9] duration-300 px-6 py-2 rounded-xl'>Start Free Trial</button>
                    </div>
                </div>

                {/* Card 3 - Custom */}
                <div className='w-full max-w-sm bg-gradient-to-r from-[#232323] to-[#1D1D1D] border border-[#494949] rounded-2xl flex flex-col justify-between' data-aos="fade-up" data-aos-delay="600">
                    <div className='p-6'>
                        <h1 className='font-bold text-2xl sm:text-3xl text-white'>Custom</h1>
                        <p className='text-white/40 mt-1'>Perfect for small teams</p>
                        <div className='flex mt-5 items-baseline'>
                            <h1 className='font-bold text-3xl sm:text-4xl text-white'>$29</h1>
                            <span className='text-white/40 ml-1'>/month</span>
                        </div>

                        {/* Features */}
                        <div className='mt-5 space-y-2'>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Unlimited team members</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Unlimited storage</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Enterprise security suite</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>24/7 dedicated support</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>White-label solution</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Custom integrations</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>SLA guarantee</p></div>
                            <div className='flex items-center'><img src={icon4} alt="" /><p className='text-white/40 ml-2'>Dedicated account manager</p></div>
                        </div>
                    </div>
                    <div className='p-6' data-aos="fade-up" data-aos-delay="700">
                        <button className='w-full text-white hover:bg-black/20 duration-300 px-6 py-2 rounded-xl border border-[#4B4B4B]'>Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Transparent;