import profilePhoto from "../assets/profile-photo.jpg"
import Tag from "./Tag.jsx";
import {Colors} from "../utils/colors.js";
import {BiLike} from "react-icons/bi";
import {BiDislike} from "react-icons/bi";
import {FaRegCommentAlt} from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const ProfileBanner = ({props}) => {

    return (
        <div className="cpm-profile-banner">
            <div className="cpm-profile-banner__top-container">
                <img src={profilePhoto} alt="User profile photo" className="cpm-profile-banner__photo"/>
                <button className="cmp-profile-banner__settings-btn" type="button" >
                    <CiSettings/>
                </button>
                <div className="cpm-profile-banner__info-container">
                    <h1 className="cpm-profile-banner__name">Shrek the Ogre</h1>
                    <div className="cpm-profile-banner__tag-container tag-container">
                        <Tag props={{text: "SCULPTURE", bgColor: Colors.GREEN_DARK}}></Tag>
                        <Tag props={{text: "MUSIC", bgColor: Colors.GREEN_DARK}}></Tag>
                        <Tag props={{text: "CINEMA", bgColor: Colors.GREEN_DARK}}></Tag>
                        <Tag props={{text: "PAINTING", bgColor: Colors.GREEN_DARK}}></Tag>
                        <Tag props={{text: "DRAWING", bgColor: Colors.GREEN_DARK}}></Tag>
                    </div>
                    <p className="cpm-profile-banner__description">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Vivamus consequat lacus non tortor tristique aliquam. Maecenas convallis varius nulla, varius
                        mollis
                        tellus mollis vitae. Suspendisse potenti. Suspendisse suscipit ante a est cursus gravida. Nulla
                        facilisis
                        ornare auctor. Suspendisse a scelerisque purus, vel suscipit eros. Suspendisse viverra tellus
                        vitae ligula
                        venenatis feugiat et a turpis.
                    </p>
                </div>
            </div>
            <div className="cpm-profile-banner__bottom-container">
                <div className="cpm-profile-banner__stats-container">
                <div className="cmp-profile-banner__icon-wrap">
                        <BiLike className="cpm-profile-banner__icon default-icon"/>
                        <span className="cmp-profile-banner__stat-count">14</span>
                    </div>
                    <div className="cmp-profile-banner__icon-wrap">
                        <BiDislike className="cpm-profile-banner__icon default-icon"/>
                        <span className="cmp-profile-banner__stat-count">1434343</span>
                    </div>
                    <div className="cmp-profile-banner__icon-wrap">
                        <FaRegCommentAlt className="cpm-profile-banner__icon default-icon"/>
                        <span className="cmp-profile-banner__stat-count">314</span>
                    </div>
                    <div className="cpm-profile-banner__join-wrap">
                        <p className="cpm-profile-banner__join-date">joined: 05-10-2024</p>
                    </div>
                </div>
                <button type="submit" className="cpm-profile-banner__connect-btn">
                    Connect
                </button>
            </div>
        </div>
    )
}

export default ProfileBanner;