import React from 'react';
import Logo from '../../../src/assets/logo.png';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='inter-n bg-[#001931] px-[80px] py-[35px]'>
            <div>
                <div className='flex justify-between border-b-2 border-[#788990]/20'>
                    <div className='flex justify-center item-center  py-[19px]  '>
                        <img className='lg:h-10 lg:w-10 h-6' src={Logo} alt="" />
                        <span className="text-base pt-2 font-bold text-white px-0 pl-1">HERO.IO</span>
                    </div>

                    <div>
                        <h4 className='text-white mb-4 font-medium text-[20px]'>Social Links</h4>
                        <div className='flex gap-4' >
                            <div className='icon-circle '><FaXTwitter className='icon' /></div>
                            <div className='icon-circle '><FaLinkedinIn className='icon' /></div>
                            <div className='icon-circle '><FaFacebookF className='icon' /></div>

                        </div>
                    </div>
                </div>

                <div className="text-left md:text-center text-[#FAFAFA] text-base mt-8">
                    Copyright © 2025 - All right reserved
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;