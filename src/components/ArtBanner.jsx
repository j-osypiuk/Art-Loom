import StatsBanner from "./StatsBanner.jsx";
import BannerContent from "./BannerContent.jsx";

const ArtBanner = ({props}) => {

    return (
        <div className="cmp-art-banner">
            <div className="cmp-art-banner__thumbnail-wrap">
                <img src={props.thumbnailUrl} alt="Banner photo" className="cmp-art-banner__thumbnail"/>
            </div>
            <div className="cmp-art-banner__content-container">
                <div className="cmp-art-banner__content-wrap">
                    <BannerContent props={props.content} />
                </div>
                <StatsBanner props={props.stats} />
            </div>
        </div>
    )
}

export default ArtBanner;