import DiscoverSection from "../components/DiscoverSection.jsx";
import DiscoverBanner from "../components/DiscoverBanner.jsx";
import React, {useRef} from "react";

const DiscoverPage = () => {

    const discoverSectionRef = useRef(null);

    return (
        <div className="cmp-container">
            <DiscoverBanner scrollSectionRef={discoverSectionRef} />
            <div style={{marginTop: "3rem"}} ref={discoverSectionRef}></div>
            <DiscoverSection/>
        </div>
    );
}

export default DiscoverPage;