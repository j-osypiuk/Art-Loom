import {useRef} from "react";
import {FaArrowDownLong} from "react-icons/fa6";

const DiscoverBanner = ({scrollSectionRef}) => {

    const btnRef = useRef(null);

    const handleBtnClick = () => {
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });

        // scrollSectionRef.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className="cmp-discover-banner">
            <img src="src/assets/discover-bg.jpg" className="cmp-discover-banner__bg-img" alt="Banner photo"/>
            <h1 className="cmp-discover-banner__heading">Each Piece Has a Tale to Tell.</h1>
            <button ref={btnRef} type="submit" className="cmp-discover-banner__btn" onClick={handleBtnClick}>
                <span>Discover</span>
                <FaArrowDownLong className="cmp-discover-banner__btn-arrow"/>
            </button>
            <div className="cmp-discover-banner__gradient-overlay"></div>
        </div>
    )
}

export default DiscoverBanner;