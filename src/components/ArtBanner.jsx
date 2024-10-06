import StatsBanner from "./StatsBanner.jsx";
import BannerContent from "./BannerContent.jsx";

const ArtBanner = ({props}) => {

    return (
        <div className="cmp-art-banner">
            <div className="cmp-art-banner__top-container">
                <img src={props.thumbnailUrl} alt="Banner photo" className="cmp-art-banner__thumbnail"/>
                <div className="cmp-art-banner__content-wrap">
                    <BannerContent props={props.content} />
                </div>
            </div>
            {}
            <StatsBanner props={props.stats} />
        </div>
    )
}

export default ArtBanner;