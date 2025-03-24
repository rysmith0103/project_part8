import { Outlet, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return(
        <>
            <Header />
            
            <Outlet />

            <Footer />
        </>
    )
};

export default Layout;