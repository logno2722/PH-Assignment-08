import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DownloadIcon from '/assets/icon-downloads.png';
import StarIcon from '/assets/icon-ratings.png';
import RevIcon from '/assets/icon-review.png';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import AppNotFound from '../../Pages/Error Page/AppNotFound';

const AppDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [isInstalled, setIsInstalled] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const appId = parseInt(id);
    const singleApp = data.find(app => app.id === appId);

    useEffect(() => {
        if (singleApp) {
            const dataFromStorage = localStorage.getItem('installed-apps');
            if (dataFromStorage) {
                const storedApps = JSON.parse(dataFromStorage);
                const isAlreadyInstalled = storedApps.find(app => app.id === singleApp.id);
                if (isAlreadyInstalled) setIsInstalled(true);
            }
        }
    }, [singleApp]);

    if (!singleApp) return <AppNotFound />;

    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = singleApp;

    const handleInstall = () => {
        setIsInstalled(true);
        setShowToast(true);
        const dataFromStorage = localStorage.getItem('installed-apps');
        let storedApps = dataFromStorage ? JSON.parse(dataFromStorage) : [];
        if (!storedApps.find(item => item.id === singleApp.id)) {
            storedApps.push(singleApp);
            localStorage.setItem('installed-apps', JSON.stringify(storedApps));
        }
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <div className='inter-n px-5 md:px-20'>
            {/* App Header */}
            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 mt-10 lg:mt-16'>
                <img className='h-[250px] md:h-[350px] w-auto rounded-lg' src={image} alt={title} />

                <div className='w-full'>
                    <div className='border-b-2 border-gray-300 pb-4 md:pb-6'>
                        <h5 className='text-[#001931] text-center md:text-left font-bold text-2xl md:text-3xl'>{title}</h5>
                        <h6 className='mt-1 md:mt-2 text-[#627382] text-center md:text-left font-normal text-base md:text-lg'>
                            Developed by <span className='font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{companyName}</span>
                        </h6>
                    </div>

                    <div className='text-[#001931] py-4 md:py-7 flex flex-wrap gap-6 md:gap-10'>
                        {/*Downloads*/}
                        <div className='flex flex-col items-center'>
                            <img className='mb-1 md:mb-2 h-8 md:h-10' src={DownloadIcon} alt="Downloads" />
                            <h5 className='text-sm md:text-base font-normal mb-1'>Downloads</h5>
                            <h6 className='font-extrabold text-xl md:text-4xl'>{downloads}M</h6>
                        </div>

                        {/*Average Ratings*/}
                        <div className='flex flex-col items-center'>
                            <img className='mb-1 md:mb-2 h-8 md:h-10' src={StarIcon} alt="Average Ratings" />
                            <h5 className='text-sm md:text-base font-normal mb-1'>Average Ratings</h5>
                            <h6 className='font-extrabold text-xl md:text-4xl'>{ratingAvg}</h6>
                        </div>

                        {/*Total Reviews*/}
                        <div className='flex flex-col items-center'>
                            <img className='mb-1 md:mb-2 h-8 md:h-10' src={RevIcon} alt="Total Reviews" />
                            <h5 className='text-sm md:text-base font-normal mb-1'>Total Reviews</h5>
                            <h6 className='font-extrabold text-xl md:text-4xl'>{reviews}</h6>
                        </div>
                    </div>
                    
                    {/*Install Button*/}
                    <button
                        onClick={handleInstall}
                        disabled={isInstalled}
                        className={`w-full md:w-auto text-gray-500 border-2 font-semibold text-base px-6 py-2 md:px-10
                            ${isInstalled
                                ? " border-gray-400 cursor-not-allowed"
                                : "bg-[#00D390] border-[#00D390] hover:bg-[#00b87d] text-white"
                            }`}
                    >
                        {isInstalled ? "Installed" : `Install Now (${size} MB)`}
                    </button>

                    {/*Toast*/}
                    {showToast && (
                        <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-600 text-white px-6 py-3 rounded-xl shadow-xl z-50">
                            <span className="font-semibold">{title} Installed Successfully!</span>
                        </div>
                    )}
                </div>
            </div>

            {/*Recharts Statistics*/}
            <div className='mt-10'>
                <h3 className='mb-4 font-semibold text-lg md:text-2xl ml-2 md:ml-10'>Ratings</h3>
                <div className='h-[300px] md:h-[350px] w-full'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={ratings}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" stroke="#627382" />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF8C00" barSize={20} radius={[0, 10, 10, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/*Description*/}
            <div className='mb-20 mt-6'>
                <h4 className='font-semibold text-lg md:text-2xl'>Description</h4>
                <p className='text-[#627382] text-sm md:text-[18px] lg:text-[20px] mt-2'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;
