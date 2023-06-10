import LoaderImage from "../LoaderImage/LoaderImage";
import Test from "../LoaderImage/Test";
import PopulerInstructors from "../PopularIntructors/PopulerInstructors";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopulerClasses></PopulerClasses>
            <PopulerInstructors></PopulerInstructors>
            <Test></Test>
           
        </div>
    );
};

export default Home;