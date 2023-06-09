import './Slider.css';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import { Fade} from "react-awesome-reveal";

const NightShoot = "https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1554207609132-H6TFZP8IGL0LD0KIW0C6/P4050102_2000px-60.jpg?format=1500w";
const WildLife = "https://images.unsplash.com/photo-1620693778087-2bced33a4a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80";
const LandScape = "https://images.unsplash.com/photo-1586783509992-bcfa7fe443b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
const Wedding = "https://images.unsplash.com/photo-1533091090875-1ff4acc497dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80";

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

                        <Fade delay={1e3} cascade damping={1e-1} className='title'>Summer Camp</Fade>

                        <Fade delay={1e3} cascade damping={1e-1} className='subtitle'>
                            School Of Photography
                        </Fade>
                    </div>

                </Overlay>

                <Slide
                    shouldRenderMask
                    label="Night shoot - Photography"
                    background={{
                        backgroundImageSrc: NightShoot
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="LandScape - Photography"
                    background={{
                        backgroundImageSrc: LandScape
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="Wedding - Photography"
                    background={{
                        backgroundImageSrc: Wedding
                    }}
                />

                <Slide
                    shouldRenderMask
                    label="WildLife - Photography"
                    background={{
                        backgroundImageSrc: WildLife
                    }}
                />

                <MenuNav />
            </HeroSlider>
        </div>
    );
};

export default Slider;