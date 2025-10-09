import React from 'react';
import DownloadIcon from '../../assets/icon-downloads.png'
import StarIcon from "../../assets/icon-ratings.png"
import { Link } from 'react-router';


const PerApp = ({ singleApp }) => {
    console.log(singleApp);
    return (
        <Link to={`/appdetails/${singleApp.id}`}>
        <div className='col-span-1 shadow-lg'>
            <div className=" card bg-base-100 max-w-[396px] rounded">

                <img
                    className='rounded p-4 '
                    src={singleApp.image}
                    alt="Shoes" />

                <div className="card-body">
                    <h2 className="card-title text-[#001931] font-medium text-[15px]">{singleApp.title}</h2>
                    <div className="flex justify-between item-center">
                        <button className="btn text-[#00D390] font-medium text-base"><img className='h-[16px]' src={DownloadIcon} alt="" />
                            {singleApp.downloads}M</button>
                        <button className="btn text-[#FF8811] bg-[#FFF0E1] font-medium text-base"><img className='h-[16px]' src={StarIcon} alt="" />
                            {singleApp.ratingAvg}</button>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default PerApp;