import StatsBanner from "./StatsBanner.jsx";
import BannerContent from "./BannerContent.jsx";
import {MdDeleteForever} from "react-icons/md";
import {RiEdit2Fill} from "react-icons/ri";
import React from "react";

const ArtBanner = ({props}) => {

    return (
        <div className="cmp-art-banner">
            <div className="cmp-art-banner__top-container">
                <div className="cmp-art-banner__button-wrap">
                    <button type="button" className="cmp-art-banner__edit-btn" onClick={() => {
                    }}>
                        <RiEdit2Fill className="cmp-file-upload__edit-icon"/>
                    </button>
                    <button type="button" className="cmp-art-banner__delete-btn" onClick={() => {
                    }}>
                        <MdDeleteForever className="cmp-file-upload__delete-icon"/>
                    </button>
                </div>
                <img src={props.thumbnailUrl} alt="Banner photo" className="cmp-art-banner__thumbnail"/>
                <div className="cmp-art-banner__content-wrap">
                    <BannerContent props={props.content}/>
                </div>
            </div>
            {}
            <StatsBanner props={props.stats} />
        </div>
    )
}

export default ArtBanner;