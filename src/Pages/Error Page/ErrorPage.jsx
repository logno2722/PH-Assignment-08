import React from 'react';
import { Link } from 'react-router'; 
import ErrorImage from '/assets/error-404.png';

const ErrorPage = () => {
    return (
        <div className="min-h-[500px] flex flex-col items-center justify-center text-center px-5 inter-n">
            <div className="max-w-md mb-8">
                <img src={ErrorImage} alt="Error 404" className="w-full h-auto" />
            </div>
            <h2 className="text-[#001931] font-bold text-3xl lg:text-5xl mb-4">
                Oops, page not found!
            </h2>
            
            <p className="text-[#627382] text-lg lg:text-xl mb-8 max-w-lg">
                The page you are looking for is not available. 
                It might have been moved or deleted.
            </p>
            <Link 
                to="/" 
                className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-3 mb-4 rounded-lg font-semibold hover:opacity-70 border-none no-underline"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default ErrorPage;