import { Outlet } from "react-router-dom";


import Header from "../components/Header/Header";

import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Footer from "../Components/Footer/Footer";
const Main = () => {
    return (
        <div className="max-w-7xl m-auto min-h-screen">
            <ScrollToTop />
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;