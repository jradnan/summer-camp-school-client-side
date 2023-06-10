import PopulerInstructors from "../PopularIntructors/PopulerInstructors";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopulerClasses></PopulerClasses>
            <PopulerInstructors></PopulerInstructors>
        </div>
    );
};

export default Home;