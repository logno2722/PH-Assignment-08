import React from 'react';
import Logo from '../../../src/assets/logo.png';
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm inter-n py-0 px-5 lg:px-[80px]"  >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Apps</a></li>
                            <li><a>Installation</a></li>
                        </ul>
                    </div>
                    <div className='flex justify-center item-center  py-[19px]  '>
                        <a className="btn btn-ghost text-base font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent px-0"><img className='lg:h-10 lg:w-10 h-6' src={Logo} alt="" />HERO.IO</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center item-center gap-[32px] font-medium text-base">
                        <li><a>Home</a></li>
                        <li><a>Apps</a></li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end py-[17px]">
                    <a className="btn font-semibold text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub className='h-5 w-5  ' />Contribute</a>

                </div>
            </div>

        </div>
    );
};

export default Navbar;