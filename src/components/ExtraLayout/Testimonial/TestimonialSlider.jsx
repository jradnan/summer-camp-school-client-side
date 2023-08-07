import React, { useState } from 'react';

const testimonialData = [
    {
        id: 1,
        message: '“My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!”',
        name: 'Marta Knowly',
        image: 'https://i.ibb.co/DQhCpT0/Untitled-design-15.png',
    },
    {
        id: 2,
        message: '“My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!”',
        name: 'Martina',
        image: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/testimonial1.jpg',
    },
    {
        id: 3,
        message: '“My style is a combination between photojournalism and fine-art photography with a touch of fashion and creative lighting. My photos are inspired by light, color, techniques from black & white processing, vintage photos, creative perspective, and of course, most importantly, the personalities of the people I photograph!”',
        name: 'Jane Smith',
        image: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-1024x1024.jpg',
    },
    // Add more testimonial data as needed
];

const TestimonialSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialData.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div>
            <h1 className='text-4xl text-center mt-10'>Testimonial</h1>
            <div className="w-full mx-auto relative p-8 md:p-16 lg:p-24 bg-[#1abc9c] mt-6">
                {testimonialData.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`testimonial-slide ${index === currentSlide ? 'active' : 'hidden'}`}
                        style={{ animation: index === currentSlide ? 'slide-in 1s ease-in-out' : 'slide-out 1s ease-in-out' }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:space-x-8 transform transition-transform">
                            {/* Image */}
                            <div className="w-full md:w-1/2 p-4">
                                <img src={testimonial.image} alt={testimonial.name} className="rounded-lg mx-auto md:mx-0" />
                            </div>
                            {/* Testimonial Text */}
                            <div className="w-full md:w-1/2 p-4 ">
                                <p className="text-[#5f462]">{testimonial.message}</p>
                                <h2 className="text-[30px] text-white font-bold mt-10">{testimonial.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="arrow-controls absolute bottom-30 right-10 lg:mr-40">
                    <button className="prev-btn text-2xl text-white" onClick={prevSlide}>
                        &#10094;
                    </button>
                    <button className="next-btn text-2xl text-white ml-4" onClick={nextSlide}>
                        &#10095;
                    </button>
                </div>
                <style>
                    {`
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slide-out {
            from {
              opacity: 1;
              transform: translateX(0);
            }
            to {
              opacity: 0;
              transform: translateX(-100%);
            }
          }

          .slide-in {
            animation: slide-in 1s ease-in-out;
          }

          .slide-out {
            animation: slide-out 1s ease-in-out;
          }

          .active {
            animation: slide-in 1s ease-in-out;
          }

          .hidden {
            animation: slide-out 1s ease-in-out;
            display: none;
          }
        `}
                </style>
            </div>
        </div>
    );
};

export default TestimonialSlider;
