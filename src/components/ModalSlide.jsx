import {useEffect} from "react";

const ModalSlide = ({children, props}) => {

    const inBlurTransition = "right 0.01s ease-in-out, opacity 0.3s ease-in-out";
    const outBlurTransition = "right 0.01s ease-in-out 0.3s, opacity 0.3s ease-in-out";

    useEffect(() => {
        if (props.showSlide) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [props.showSlide]);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Escape") {
                props.setShowSlide(false);
            }
        }

        const handleMouseClick = (event) => {
            if (event.target.classList.contains("cmp-slider")) {
                props.setShowSlide(false);
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        window.addEventListener("click", handleMouseClick);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
            window.removeEventListener("click", handleMouseClick);
        }
    }, []);

    return (
        <div style={{transition: `${props.showSlide ? inBlurTransition : outBlurTransition}`}}
             className={`cmp-slider ${props.showSlide ? "cmp-slider--visible" : "cmp-slider--hidden"}`}
        >
            <div className={`cmp-slider__content-wrap  ${props.showSlide ? "" : "cmp-slider__content-wrap--hidden"}`}>
                {children}
            </div>
        </div>
    )
}

export default ModalSlide;