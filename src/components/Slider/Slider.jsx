import './Slider.css';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
// import Title from "./components/Title";
// import Subtitle from "./components/Subtitle";

const bogliasco = "https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1554207609132-H6TFZP8IGL0LD0KIW0C6/P4050102_2000px-60.jpg?format=1500w";
const countyClare = "https://images.unsplash.com/photo-1620693778087-2bced33a4a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80";
const craterRock = "https://images.unsplash.com/photo-1604430456280-43f652c497aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const giauPass = "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80";

const Slider = () => {
    return (
        <div>

            <HeroSlider
                height={"100vh"}
                autoplay
                controller={{
                    initialSlide: 1,
                    slidingDuration: 500,
                    slidingDelay: 100,
                    onSliding: (nextSlide) =>
                        console.debug("onSliding(nextSlide): ", nextSlide),
                    onBeforeSliding: (previousSlide, nextSlide) =>
                        console.debug(
                            "onBeforeSliding(previousSlide, nextSlide): ",
                            previousSlide,
                            nextSlide
                        ),
                    onAfterSliding: (nextSlide) =>
                        console.debug("onAfterSliding(nextSlide): ", nextSlide)
                }}
            >
                <Overlay>

                    <div className="Container">

                        <h1>Basic Title</h1>

                        <h2>
                            Check out the documentation for more advanced examples.
                        </h2>
                    </div>

                </Overlay>

                <Slide
                    shouldRenderMask
                    label="Bogliasco - Italy"
                    background={{
                        backgroundImageSrc: bogliasco
                    }}
                />
                <Slide
                    shouldRenderMask
                    label="Giau Pass - Italy"
                    background={{
                        backgroundImageSrc: giauPass
                    }}
                />


                <Slide
                    shouldRenderMask
                    label="County Clare - Ireland"
                    background={{
                        backgroundImageSrc: countyClare
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="Crater Rock, OR - United States"
                    background={{
                        backgroundImageSrc: craterRock
                    }}
                />

                <MenuNav />
            </HeroSlider>
        </div>
    );
};

export default Slider;