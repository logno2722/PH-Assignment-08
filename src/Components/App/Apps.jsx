import React, { Suspense } from 'react';
import PerApp from './PerApp';
import { Link } from 'react-router';

const Apps = ({ data }) => {

    const firstEightCard = data.slice(0, 8);

    return (
        <div className="inter-n">
            <Suspense fallback={<span>....Loading</span>}>

                <div className="text-center px-4 md:px-20">

                    <h4 className="text-3xl md:text-5xl text-[#001931] font-bold mt-16 mb-4">
                        Trending Apps
                    </h4>

                    <p className="text-[#627382] text-base md:text-xl mb-10">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {
                            firstEightCard.map((singleApp) => (
                                <PerApp key={singleApp.id} singleApp={singleApp} />
                            ))
                        }
                    </div>

                    {/* Show All Button */}
                    <div className="flex justify-center mt-10 mb-20">
                        <Link
                            to="/apps"
                            className="btn font-semibold text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
                        >
                            Show All
                        </Link>
                    </div>

                </div>

            </Suspense>
        </div>
    );
};

export default Apps;
