import {useEffect} from "react";

const ModalSlide = ({children, props}) => {

    const inBlurTransition = "right 0.01s ease-in-out, opacity 0.3s ease-in-out";
    const outBlurTransition = "right 0.01s ease-in-out 0.3s, opacity 0.3s ease-in-out";

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.code === "Escape") {
                props.setShowProfileForm(false);
            }
        }

        window.addEventListener("keydown", handleKeyPress);
        return () => {window.removeEventListener("keydown", handleKeyPress);}
    }, []);

    return (
        <div style={{transition: `${props.showProfileForm ? inBlurTransition : outBlurTransition}`}}
             className={`cmp-slider ${props.showProfileForm ? "" : "cmp-slider--hidden"}`}
        >
            <div className={`cmp-slider__content-wrap  ${props.showProfileForm ? "" : "cmp-slider__content-wrap--hidden"}`}>
                {children}
            </div>
        </div>
    )
}

export default ModalSlide;