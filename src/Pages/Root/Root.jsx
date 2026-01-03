import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import Loading from '../../Components/loading/Loading';

const Root = () => {
    const [pageLoading, setPageLoading] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setPageLoading(true);

        setTimeout(() => {
            setPageLoading(false);
        }, 200);

    }, [location.pathname]);

    return (
        <div>
            <ScrollToTop />
            <Navbar />

            <main className="min-h-screen">
                {pageLoading ? <Loading /> : <Outlet />}
            </main>

            <Footer />
        </div>
    );
};

export default Root;
