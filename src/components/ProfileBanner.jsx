import profilePhoto from "../assets/profile-photo.jpg"
import {CiSettings} from "react-icons/ci";
import StatsBanner from "./StatsBanner.jsx";
import BannerContent from "./BannerContent.jsx";

const ProfileBanner = ({props}) => {

    return (
        <div className="cpm-profile-banner">
            <div className="cpm-profile-banner__top-container">
                <img src={profilePhoto} alt="User profile photo" className="cpm-profile-banner__photo"/>
                <button className="cmp-profile-banner__settings-btn" type="button">
                    <CiSettings/>
                </button>
                <BannerContent props={props.content} />
            </div>
            <StatsBanner props={props.stats} />
            <button type="submit" className="cpm-profile-banner__connect-btn">
                Connect
            </button>
        </div>
    )
}

export default ProfileBanner;