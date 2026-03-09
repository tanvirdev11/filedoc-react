import Vector from '../assets/Vector (1).svg'
import Clients from './Clients';
import Footer from './Footer';
import Frame from '../assets/Frame (10).svg'
import Frame1 from '../assets/Frame (8).svg'
import Frame3 from '../assets/Frame (3).svg'
import Frame4 from '../assets/Frame (4).svg'
import Frame5 from '../assets/Frame (5).svg'
import Frame6 from '../assets/Frame (6).svg'
import Frame7 from '../assets/Frame (7).svg'

import Productivity from './Productivity';
import Boostteam from './Boostteam';
import Workspace from './Workspace';
import Satisfied from './Satisfied';
import Transparent from './Transparent';
import Control from './Control';
function Box1() {
    return (
        <>
            <Clients />

            <div className="w-full h-screen">
                <div className="w-full h-[470px]">
                    <Productivity />

                    <div className='border-b-1 border-[#342655] w-full mt-[80px]'></div>
                    <Boostteam />
                    <div className='border-b-1 border-[#342655] w-full mt-[80px]'></div>
                    <Workspace />
                    <div className='border-b-1 border-[#342655] w-full mt-[90px]'></div>
                    <Satisfied />
                    <Transparent />
                    <Control />

                    <Footer />
                </div>
            </div>
        </>
    );
}
export default Box1;