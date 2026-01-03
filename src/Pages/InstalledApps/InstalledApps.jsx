import React, { useEffect, useState } from 'react';
import StarIcon from "../../assets/icon-ratings.png"
import DownloadIcon from '../../assets/icon-downloads.png'

const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    useEffect(() => {
        const dataFromStorage = localStorage.getItem('installed-apps');
        if (dataFromStorage) {
            setInstalledApps(JSON.parse(dataFromStorage));
        }
    }, []);

    const handleUninstall = (id, title) => {
        const remainingApps = installedApps.filter(app => app.id !== id);
        setInstalledApps(remainingApps);
        localStorage.setItem('installed-apps', JSON.stringify(remainingApps));
        setToastMsg(`${title} uninstalled successfully!`);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };

    const handleSort = (type) => {
        let sortedApps = [...installedApps];
        if (type === 'high-low') {
            sortedApps.sort((a, b) => b.downloads - a.downloads);
        } else if (type === 'low-high') {
            sortedApps.sort((a, b) => a.downloads - b.downloads);
        }
        setInstalledApps(sortedApps);
    };

    return (
        <div className="container mx-auto px-5 lg:px-20 py-10 min-h-[400px] inter-n relative">
            
            <div className="text-center mb-10">
                <h2 className="text-[#001931] font-bold text-4xl lg:text-5xl mb-3">Your Installed Apps</h2>
                <p className="text-[#627382] text-lg lg:text-xl">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h3 className="text-[#001931] font-bold text-2xl">{installedApps.length} Apps Found</h3>
                
                <select 
                    onChange={(e) => handleSort(e.target.value)}
                    className="select w-full max-w-xs bg-gray-100 font-normal"
                    defaultValue="default"
                >
                    <option value="default" disabled>Sort By Downloads</option>
                    <option value="high-low">High to Low</option>
                    <option value="low-high">Low to High</option>
                </select>
            </div>

            <div className="space-y-4">
                {installedApps.length > 0 ? (
                    installedApps.map(app => (
                        <div key={app.id} className="flex flex-col lg:flex-row items-center justify-between p-6 bg-white border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                                    <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="text-[#001931] font-bold text-xl">{app.title}</h4>
                                    <div className="flex flex-wrap gap-4 text-[#627382] mt-1">
                                        <span className="flex items-center gap-1">
                                            <img className="h-4 w-4" src={DownloadIcon} alt="" />
                                            {app.downloads}M
                                        </span>                                
                                        <span className="flex items-center gap-1">
                                            <img className="h-4 w-4" src={StarIcon} alt="" />
                                            {app.ratingAvg}
                                        </span>
                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id, app.title)}
                                className="mt-4 lg:mt-0 px-8 py-2 bg-[#00D390] text-white font-semibold rounded-lg lg:hover:bg-red-500"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-xl ">
                        <h4 className="text-xl font-semibold text-gray-500">No Apps Installed Yet!</h4>
                    </div>
                )}
            </div>
            {showToast && (
                <div className="fixed top-10 left-1/2 -translate-x-1/2 bg-gray-600 text-white px-8 py-3 rounded-xl shadow-2xl z-50 ">
                    <span className="font-semibold text-center">
                        {toastMsg}
                    </span>
                </div>
            )}
        </div>
    );
};

export default InstalledApps;