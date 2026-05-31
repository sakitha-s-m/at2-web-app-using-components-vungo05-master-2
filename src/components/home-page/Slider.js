import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import slides from "../../data/slides";

//define function
function Slider() {
    // Track which slide is currently shown
    const [currentSlide, setCurrentSlide] = useState(0);

    // Navigate to the previous slide (wraps around to the last)
    const previousSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slides.length - 1 : currentSlide - 1
        );
    };

    // Navigate to the next slide (wraps around to the first)
    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slides.length - 1 ? 0 : currentSlide + 1
        );
    };

    // Auto-advance the slider every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        // Cleanup: clear the interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
        >
            <div className="carousel-inner" role="listbox">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`item ${index === currentSlide ? 'active' : ''}`}
                        id="slide1"
                        style={{
                            background: `url(${slide.background}) no-repeat left center`,
                            backgroundSize: "cover",
                        }}
                    >
                        {/* <!-- Ready for JS Injection --> */}
                        <div className="carousel-caption">
                            <div className="caption sfr slider-title">{slide.title}</div>
                            <div className="caption sfl slider-subtitle">{slide.subtitle}</div>
                            <Link to="/regions" className="caption sfb btn btn-default btn-lg">Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
            {/* <!-- Blue Filter --> */}
            <div id="home-search-section"></div>
            {/* <!-- Controls --> */}
            {/* Previous slide control */}
            <button
                className="left carousel-control"
                onClick={previousSlide}
                aria-label="Previous slide"
                style={{ background: "none", border: "none" }}
            >
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </button>

            {/* Next slide control */}
            <button
                className="right carousel-control"
                onClick={nextSlide}
                aria-label="Next slide"
                style={{ background: "none", border: "none" }}
            >
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
};
//export function
export default Slider;