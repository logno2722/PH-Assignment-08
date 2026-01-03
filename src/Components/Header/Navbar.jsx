import React, { useState } from 'react';
import Logo from '../../../src/assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from 'react-router';
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const activeState = "border-b-2 border-[#632EE3] pb-1 text-[#632EE3] font-bold";
    const normalState = "pb-1 text-gray-700 hover:text-[#632EE3]";

    return (
        <div className="bg-base-100 shadow-sm inter-n px-5 lg:px-[80px]">
            <div className="navbar py-0">

                <div className="navbar-start">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-[20px] font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
                    >
                        <img className='h-6 lg:h-10' src={Logo} alt="logo" />
                        HERO.IO
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 font-medium text-base">
                        <li>
                            <Link to="/" className={location.pathname === "/" ? activeState : normalState}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/apps" className={location.pathname === "/apps" ? activeState : normalState}>
                                Apps
                            </Link>
                        </li>
                        <li>
                            <Link to="/installation" className={location.pathname === "/installation" ? activeState : normalState}>
                                Installation
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end flex items-center gap-3">
                    <a
                        href="https://github.com/logno2722"
                        target="_blank"
                        className="hidden lg:flex btn font-semibold text-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
                    >
                        <FaGithub className='h-5 w-5' />
                        Contribute
                    </a>

                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>
            
            {menuOpen && (
                <div className="lg:hidden bg-base-100 shadow-md rounded-lg mt-2 p-4">
                    <ul className="flex flex-col gap-4 font-medium">
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/" className={location.pathname === "/" ? activeState : normalState}>
                                Home
                            </Link>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/apps" className={location.pathname === "/apps" ? activeState : normalState}>
                                Apps
                            </Link>
                        </li>
                        <li onClick={() => setMenuOpen(false)}>
                            <Link to="/installation" className={location.pathname === "/installation" ? activeState : normalState}>
                                Installation
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://github.com/logno2722"
                                target="_blank"
                                className="btn w-full bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
                            >
                                <FaGithub />
                                Contribute
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
