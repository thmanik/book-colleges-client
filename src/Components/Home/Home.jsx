import AboutUs from "../AboutUs/AboutUs";
import BestFeature from "../BestFeature/BestFeature";
import Colleges from "../Colleges/Colleges";
import Galley from "../Gallery/Galley";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Colleges></Colleges>
            <AboutUs></AboutUs>
            <Galley></Galley>
            <BestFeature></BestFeature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;