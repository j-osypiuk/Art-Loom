import {CiSettings} from "react-icons/ci";
import StatsBanner from "./StatsBanner.jsx";
import React, {useState} from "react";
import ModalSlide from "./ModalSlide.jsx";
import ProfileForm from "./ProfileForm.jsx";
import Tag from "./Tag.jsx";
import {PiMapPinFill} from "react-icons/pi";
import TextWrap from "./TextWrap.jsx";
import {Colors} from "../utils/colors.js";

const ProfileBanner = ({props}) => {

    const [showProfileForm, setShowProfileForm] = useState(false);

    return (
        <div className="cmp-profile-banner">
            <ModalSlide props={{showSlide: showProfileForm, setShowSlide: setShowProfileForm}}>
                <ProfileForm
                    props={{userData: props.userData, content: props.content, setShowProfileForm: setShowProfileForm}}/>
            </ModalSlide>
            <div className="cmp-profile-banner__bg-wrap">
                <img src="src/assets/white-bg.jpg" className="cmp-profile-banner__bg-img" alt="Banner photo"/>
                <div className="cmp-profile-banner__content-wrap">
                    <img className="cmp-profile-banner__profile-img" src="src/assets/profile-photo.jpg" alt="Selected"/>
                    <div className="cmp-profile-banner__user-data-wrap">
                        <div className="cmp-profile-banner__top-content-wrap">
                            <div className="cmp-profile-banner__name-wrap">
                                <h2 className="cmp-profile-banner__full-name">Jane Wlazła</h2>
                                <h2 className="cmp-profile-banner__nickname">#Siubidubi</h2>
                            </div>
                            <button onClick={() => setShowProfileForm(true)}
                                    className="cmp-profile-banner__settings-btn"
                                    type="button">
                                <CiSettings/>
                            </button>
                        </div>
                        <div className="cmp-profile-banner__tag-container tag-container">
                            {
                                props.content.tags.map((tag) => {
                                    return (
                                        <Tag key={tag.name} props={{text: tag.name, bgColor: tag.bgColor}}></Tag>
                                    )
                                })
                            }
                        </div>
                        <div className="cmp-profile-banner__bottom-content-wrap">
                            <div className="cmp-profile-banner__place-wrap">
                                <PiMapPinFill className="cmp-profile-banner__place-icon"/>
                                <span className="cmp-profile-banner__place-name">Łódź</span>
                            </div>
                            <button type="submit" className="cpm-profile-banner__connect-btn">
                                Connect
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cmp-profile-banner__description-wrap">
                <div className="cmp-profile-banner__description-header-wrap">
                    <h3 className="cmp-profile-banner__about-heading">About</h3>
                    <div className="cmp-profile-banner__joined-wrap">
                        <p className="cmp-profile-banner__hash">#</p>
                        <p className="cmp-profile-banner__joined">joined: 14-10-2024</p>
                    </div>
                </div>
                <div className="cmp-profile-banner__description">
                    <TextWrap props={{height: props.content.textHeight, fontSize: 1.6, color: Colors.GRAY_300, lineHeight: 1.3, text: props.content.description}}/>
                </div>
            </div>
            <div className="cmp-profile-banner__stats-wrap">
                <StatsBanner props={props.stats} />
            </div>
        </div>
    )
}

export default ProfileBanner;