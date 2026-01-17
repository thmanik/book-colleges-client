import { Outlet } from "react-router-dom";


import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
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