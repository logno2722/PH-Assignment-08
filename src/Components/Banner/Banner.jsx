import React from 'react';
import BannerImg from "../../assets/hero.png"
import PlayStoreIcon from "../../assets/playstore.png"
import AppStoreIcon from "../../assets/app-store.png"


const Banner = () => {
    return (
        <div className='mt-[80px] inter-n flex items-center justify-center flex-col '>
            <h4 className='max-w-[630px] text-[72px] text-[#001931] font-bold text-center '>We Build <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-black text-[72px] '>Productive</span> Apps</h4>
            <p className='text-center mt-4 max-w-[1440px] text-[#627382] font-normal text-[20px]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='m-10 flex items-center justify-center gap-4'>
                <a href="https://play.google.com/store/games?device=windows"
                    target="_blank" className='hover:bg-[#D2CDCD] text-[#001931] font-semibold text-[20px] py-3 px-[30px] rounded border-2 shadow-inner border-[#D2D2D2] flex items-center justify-center gap-[10px]'><img className='h-8' src={PlayStoreIcon} alt="" />Google Play</a>
                <a href="https://www.apple.com/app-store/"
                    target="_blank" className='hover:bg-[#D2CDCD] text-[#001931] font-semibold text-[20px] py-3 px-[30px] rounded border-2 shadow-inner border-[#D2D2D2] flex items-center justify-center gap-[10px]'><img className='h-8' src={AppStoreIcon} alt="" />App Store</a>
            </div>
            <img src={BannerImg} alt="" />

            <div className='text-center text-white  bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full'>
                <h4 className='mb-10 pt-[80px] px-[80px] text-[48px] font-bold'>Trusted by Millions, Built for You</h4>
                <div className='flex justify-center item-center gap-45 mb-20'>
                    <div>
                        <h6 className='text-base font-normal mb-4'>Total Downloads</h6>
                        <h6 className='font-extrabold text-[64px] mb-4'>29.6M</h6>
                        <p className='text-base font-normal'>21% more than last month</p>
                    </div>
                    <div>
                        <h6 className='text-base font-normal mb-4'>Total Reviews</h6>
                        <h6 className='font-extrabold text-[64px] mb-4'>906K</h6>
                        <p className='text-base font-normal'>46% more than last month</p>
                    </div>
                    <div>
                        <h6 className='text-base font-normal mb-4'>Active Apps</h6>
                        <h6 className='font-extrabold text-[64px] mb-4'>132+</h6>
                        <p className='text-base font-normal'>31 more will Launch</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;