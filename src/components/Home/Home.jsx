import Extra from "../ExtraLayout/Extra";
import TestimonialSlider from "../ExtraLayout/Testimonial/TestimonialSlider";
import AboutSection from "../ExtraLayout/about/AboutSection";
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
            <AboutSection></AboutSection>
            <TestimonialSlider></TestimonialSlider>
            <Test></Test>
           
        </div>
    );
};

export default Home;