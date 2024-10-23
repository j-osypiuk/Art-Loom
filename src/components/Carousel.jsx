import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ sources }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? sources.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === sources.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="cmp-carousel">
            <div className="cmp-carousel__slide-wrap">
                <BsArrowLeftCircleFill onClick={prevSlide} className="cmp-carousel__arrow-left" />
                <BsArrowRightCircleFill onClick={nextSlide} className="cmp-carousel__arrow-right" />
                {sources.map((src, index) => {
                    return (
                            <img
                                src={src}
                                alt="Slide image"
                                key={index}
                                className={currentSlide === index ? "cmp-carousel__slide" : "cmp-carousel__slide--hidden"}
                            />
                    );
                })}
                <span className="cmp-carousel__indicator-wrap">
                    {sources.map((_, index) => {
                        return (
                            <button
                                key={index}
                                className={`cmp-carousel__indicator ${currentSlide !== index && "cmp-carousel__indicator--inactive"}`}
                                onClick={() => setCurrentSlide(index)}
                            ></button>
                        );
                    })}
                </span>
            </div>
        </div>
    );
};