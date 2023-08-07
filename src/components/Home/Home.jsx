import Extra from "../ExtraLayout/Extra";
import Card from "../ExtraLayout/card/card";
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
            <Extra></Extra>
            <Card></Card>
            <Test></Test>
           
        </div>
    );
};

export default Home;