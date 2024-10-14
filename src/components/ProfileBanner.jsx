import {CiSettings} from "react-icons/ci";
import StatsBanner from "./StatsBanner.jsx";
import BannerContent from "./BannerContent.jsx";
import {useState} from "react";
import ModalSlide from "./ModalSlide.jsx";
import ProfileForm from "./ProfileForm.jsx";

const ProfileBanner = ({props}) => {

    const [showProfileForm, setShowProfileForm] = useState(false);

    return (
        <div className="cpm-profile-banner">
            <ModalSlide props={{showSlide: showProfileForm, setShowSlide: setShowProfileForm}}>
                <ProfileForm props={{userData: props.userData, content: props.content, setShowProfileForm: setShowProfileForm}}/>
            </ModalSlide>
            <div className="cpm-profile-banner__top-container">
                <div className="cpm-profile-banner__photo-wrap">
                    <img src={props.thumbnailUrl} alt="User profile photo" className="cpm-profile-banner__photo"/>
                    <button onClick={() => setShowProfileForm(true)}
                            className="cmp-profile-banner__settings-btn"
                            type="button">
                        <CiSettings/>
                    </button>
                </div>
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