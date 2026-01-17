import { Outlet } from "react-router-dom";


import Header from "../components/Header/Header";
import Footer from "../Components/Footer/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl m-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;