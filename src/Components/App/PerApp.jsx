import React from 'react';
import DownloadIcon from '/assets/icon-downloads.png';
import StarIcon from "/assets/icon-ratings.png";
import { Link } from 'react-router';

const PerApp = ({ singleApp }) => {
    return (
        <Link to={`/appdetails/${singleApp.id}`}>

            <div className="shadow-lg rounded bg-white ">                
                <img
                    className="w-full h-full object-cover rounded-t p-3"
                    src={singleApp.image}
                    alt={singleApp.title}
                />

                {/* Card Body */}
                <div className="p-4">
                    <h2 className="text-[#001931] font-semibold text-md mb-3">
                        {singleApp.title}
                    </h2>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 text-[#00D390] text-sm font-medium">
                            <img src={DownloadIcon} className="h-4" />
                            {singleApp.downloads}M
                        </div>

                        <div className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] px-2 py-1 rounded text-sm font-medium">
                            <img src={StarIcon} className="h-4" />
                            {singleApp.ratingAvg}
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default PerApp;
