import DiscoverSection from "../components/DiscoverSection.jsx";
import DiscoverBanner from "../components/DiscoverBanner.jsx";
import React, {useEffect, useRef, useState} from "react";
import {FaArrowUpLong} from "react-icons/fa6";
import {getRandomLightColor} from "../utils/colors.js";

const DiscoverPage = () => {

    const discoverSectionRef = useRef(null);
    const [showTopScrollBtn, setShowTopScrollBtn] = useState(false);
    const [topScrollBtnColor, setTopScrollBtnColor] = useState(getRandomLightColor());


    useEffect(() => {
        const handlePageScroll = () => {
            if(discoverSectionRef.current.getBoundingClientRect().top <= 0) {
                setShowTopScrollBtn(true);
            } else {
                setShowTopScrollBtn(false);
            }
        }

        document.addEventListener("scroll", handlePageScroll);
        return () => {document.removeEventListener("scroll", handlePageScroll);}
    }, [])

    const handleTopScrollClick = () => {
        discoverSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className="cmp-discover-page">
            <DiscoverBanner scrollSectionRef={discoverSectionRef}/>
            {
                showTopScrollBtn &&
                <button className="cmp-discover-page__top-scroll-btn"
                        onClick={handleTopScrollClick}
                        style={{backgroundColor: `var(${topScrollBtnColor})`}}
                >
                    <FaArrowUpLong/>
                </button>
            }
            <div className="cmp-discover-page__gallery-wrap" ref={discoverSectionRef}>
                <div className="cmp-discover-page__filters_wrap">
                    <select
                        className="cmp-discover-page__art-field-filter-select" id="artFieldFilter"
                        name="artFieldFilter">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="mostPopular">Most Popular</option>
                    </select>
                    <select className="cmp-discover-page__sort-type-select"
                            id="sortType" name="sortType">
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="mostPopular">Most Popular</option>
                    </select>
                </div>
                <DiscoverSection/>
            </div>
        </div>
    );
}

export default DiscoverPage;