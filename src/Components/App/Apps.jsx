import React, { Suspense } from 'react';
import PerApp from './PerApp';



const Apps = ({ data }) => {

    const firstEightCard = data.slice(0, 8);
    return (
        <div className='inter-n'>
            <Suspense fallback={<span>....Loading</span>}>

                <div className='text-center px-20 '>
                    <h4 className=' text-[48px] text-[#001931] font-bold mt-20 mb-4'>Trending Apps</h4>
                    <p className='text-[#627382] font-normal text-[20px] mb-10'>Explore All Trending Apps on the Market developed by us</p>

                    <div className='grid grid-cols-4 gap-10'>

                        {
                            firstEightCard.map((singleApp) => (
                                <PerApp key={singleApp.id} singleApp={singleApp} />
                            ))
                        }

                    </div>
                    <div className="flex justify-center items-center mt-10 mb-20 ">
                        <button className=' btn font-semibold text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button>
                    </div>
                </div>





            </Suspense>

        </div>
    );
};

export default Apps;