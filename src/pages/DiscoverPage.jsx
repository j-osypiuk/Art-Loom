import DiscoverSection from "../components/DiscoverSection.jsx";
import DiscoverBanner from "../components/DiscoverBanner.jsx";
import React, {useRef} from "react";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import {Colors} from "../utils/colors.js";

const DiscoverPage = () => {

    const discoverSectionRef = useRef(null);

    return (
        <div className="cmp-container">
            <LoadingSpinner size={4} width={0.8} color={Colors.PURPLE_DARK}/>
            <DiscoverBanner scrollSectionRef={discoverSectionRef} />
            <div style={{marginTop: "3rem"}} ref={discoverSectionRef}></div>
            <DiscoverSection/>
        </div>
    );
}

export default DiscoverPage;