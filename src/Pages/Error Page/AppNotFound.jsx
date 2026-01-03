import { useNavigate } from 'react-router';
import ErrorImage from '/assets/App-Error.png'; 

const AppNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[500px] flex flex-col items-center justify-center text-center px-5 py-10">            
            <div className="w-full max-w-xs sm:max-w-md mb-6 sm:mb-8">
                <img src={ErrorImage} alt="App Not Found" className="w-full h-auto" />
            </div>
            <h2 className="text-[#001931] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
                OPPS!! APP NOT FOUND
            </h2>
            <p className="text-[#627382] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-sm sm:max-w-lg px-2">
                The App you are requesting is not found on our system. Please try another app.
            </p>
            <button 
                onClick={() => navigate(-1)}
                className="btn bg-[#9F62F2] hover:bg-[#834ee1] border-none text-white px-6 sm:px-10 py-2 sm:py-3 rounded-lg font-semibold"
            >
                Go Back!
            </button>
        </div>
    );
};

export default AppNotFound;
