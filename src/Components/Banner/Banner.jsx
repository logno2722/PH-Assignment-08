import React from 'react';
import BannerImg from "../../assets/hero.png";
import PlayStoreIcon from "../../assets/playstore.png";
import AppStoreIcon from "../../assets/app-store.png";

const Banner = () => {
    return (
        <div className="mt-16 inter-n flex flex-col items-center text-center">

            <h4 className="max-w-xl text-4xl md:text-6xl font-bold text-[#001931]">
                We Build{" "}
                <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Productive
                </span>{" "}
                Apps
            </h4>
            <p className="mt-4 px-4 max-w-4xl text-[#627382] text-base md:text-lg">
                At HERO.IO, we craft innovative apps designed to make everyday life
                simpler, smarter and more exciting.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                    href="https://play.google.com/store/games?device=windows"
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 border-2 rounded shadow-inner hover:bg-gray-200"
                >
                    <img src={PlayStoreIcon} className="h-7" />
                    Google Play
                </a>

                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 border-2 rounded shadow-inner hover:bg-gray-200"
                >
                    <img src={AppStoreIcon} className="h-7" />
                    App Store
                </a>
            </div>

            <img
                src={BannerImg}
                className="mt-10 w-[90%] md:w-[70%]"
                alt="Banner"
            />

            <div className="mt-16 w-full text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
                <h4 className="pt-12 text-3xl md:text-5xl font-bold">
                    Trusted by Millions, Built for You
                </h4>

                <div className="mt-10 pb-12 flex flex-col md:flex-row justify-center gap-10">
                    <div>
                        <p>Total Downloads</p>
                        <h3 className="text-4xl md:text-6xl font-bold">29.6M</h3>
                        <p>21% more than last month</p>
                    </div>

                    <div>
                        <p>Total Reviews</p>
                        <h3 className="text-4xl md:text-6xl font-bold">906K</h3>
                        <p>46% more than last month</p>
                    </div>

                    <div>
                        <p>Active Apps</p>
                        <h3 className="text-4xl md:text-6xl font-bold">132+</h3>
                        <p>31 more will launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
