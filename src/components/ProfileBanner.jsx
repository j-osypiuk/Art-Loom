import profilePhoto from "../assets/profile-photo.jpg"
import {Colors} from "../utils/colors.js";
import {CiSettings} from "react-icons/ci";
import StatsBanner from "./StatsBanner.jsx";
import BannerContent from "./BannerContent.jsx";

const ProfileBanner = ({props}) => {

    const tempData = {
        title: "Jane Wlazła",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius mollis tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla facilisis ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus vitae ligula venenatis feugiat et a turpis.",
        tags: [
            {name: "SCULPTURE", bgColor: Colors.GREEN_DARK},
            {name: "MUSIC", bgColor: Colors.PURPLE_DARK},
            {name: "CINEMA", bgColor: Colors.RED_DARK},
            {name: "PAINTING", bgColor: Colors.YELLOW_DARK},
            {name: "DRAWING", bgColor: Colors.BLUE_DARK},
        ]
    }

    return (
        <div className="cpm-profile-banner">
            <div className="cpm-profile-banner__top-container">
                <img src={profilePhoto} alt="User profile photo" className="cpm-profile-banner__photo"/>
                <button className="cmp-profile-banner__settings-btn" type="button">
                    <CiSettings/>
                </button>
                <BannerContent props={tempData} />
            </div>
            <StatsBanner props={{likes: 150, dislikes: 23, comments: 53, dateLabel: "Joined", date: "05-10-2024"}}/>
            <button type="submit" className="cpm-profile-banner__connect-btn">
                Connect
            </button>
        </div>
    )
}

export default ProfileBanner;