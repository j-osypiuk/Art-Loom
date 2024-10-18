import React, {useRef, useState} from "react";
import {FaArrowDownLong} from "react-icons/fa6";
import {Colors, getRandomDarkColor} from "../utils/colors.js";

const DiscoverBanner = ({scrollSectionRef}) => {

    const btnRef = useRef(null);
    const [btnColor, setBtnColor] = useState(getRandomDarkColor());

    const handleBtnClick = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });

        // scrollSectionRef.current.scrollIntoView({behavior: "smooth"});
    }

    const changeBtnColor = (event) => {
        if (event.target === btnRef.current) {
            let newColor = getRandomDarkColor();
            while (true) {
                if (btnColor !== newColor) {
                    setBtnColor(newColor);
                    break;
                } else {
                    newColor = getRandomDarkColor();
                }
            }
        }
    }

    return (
        <div className="cmp-discover-banner">
            <img src="src/assets/discover-bg.jpg" className="cmp-discover-banner__bg-img" alt="Banner photo"/>
            <h1 className="cmp-discover-banner__heading">Each Piece Has a Tale to Tell.</h1>
            <button ref={btnRef}
                    type="submit"
                    style={{backgroundColor: `var(${btnColor})`}}
                    className="cmp-discover-banner__btn"
                    onMouseEnter={changeBtnColor}
                    onMouseLeave={changeBtnColor}
                    onClick={handleBtnClick}
            >
                <span>Discover</span>
                <FaArrowDownLong className="cmp-discover-banner__btn-arrow"/>
            </button>
            <div className="cmp-discover-banner__gradient-overlay"></div>
        </div>
    )
}

export default DiscoverBanner;