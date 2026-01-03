import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { CiSearch } from "react-icons/ci";
import PerApp from '../../Components/App/PerApp';
import Loading from '../../Components/loading/Loading';

const AllAppPage = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        setIsSearching(true); 
        setTimeout(() => {
            setIsSearching(false);
        }, 200);
    };

    const filteredApps = data.filter((app) => {
        const appTitle = app.title.toLowerCase();
        const searchKeyword = search.toLowerCase();
        const isMatch = appTitle.includes(searchKeyword);
        return isMatch;
    });

    return (
        <div className='inter-n m-5 lg:m-20'>
            <div className='text-center mb-10'>
                <h4 className='text-[#001931] font-bold text-[32px] lg:text-[48px]'>
                    Our All Applications
                </h4>
                <p className='text-[#627382] font-normal text-[18px] lg:text-[20px]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center py-6 px-4 border-b border-gray-200 w-full mb-10 gap-4">

                <div className="text-[#001931] text-xl font-semibold">
                    ({filteredApps.length}) Apps Found
                </div>

                <div className="relative w-full max-w-xs">
                    <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                        type="text"
                        placeholder="Search Apps..."
                        value={search}
                       onChange={handleSearch}
                        className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg 
                                   focus:outline-none focus:ring-2 focus:ring-indigo-500 
                                   focus:border-indigo-500 text-gray-700"
                    />
                </div>
            </div>

            {isSearching ? (
                <div className="py-20">
                    <Loading /> 
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {filteredApps.length > 0 ? (
                        filteredApps.map((singleApp) => (
                            <PerApp key={singleApp.id} singleApp={singleApp} />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <h2 className="text-2xl text-gray-400">No Apps Found with "{search}"</h2>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default AllAppPage;