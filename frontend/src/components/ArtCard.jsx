import {BiDislike, BiLike} from "react-icons/bi";
import {FaRegCommentAlt} from "react-icons/fa";
import Tag from "./Tag.jsx";
import React from "react";
import LoadingSpinner from "./LoadingSpinner.jsx";
import {getRandomDarkColor} from "../utils/colors.js";

const ArtCard = ({props}) => {

    const handleMouseEvent = (event) => {
        const iconsWrap = document.querySelector(`#${event.target.closest(".cmp-art-card").id} .cmp-art-card__icons-wrap`);
        iconsWrap.classList.toggle("cmp-art-card__icons-wrap--visible");
    }

    return (
        props ? (
            <div onMouseEnter={handleMouseEvent}
                 onMouseLeave={handleMouseEvent}
                 className="cmp-art-card"
                 id={props.id}>
                <img className="cmp-art-card__thumbnail-img" src={props.thumbnailPath} alt="Thumbnail image"/>
                <div className="cmp-art-card__icons-wrap">
                    <div className="cmp-art-card__panel-wrap">
                        <div className="cmp-art-card__like-icon-wrap">
                            <BiLike className="cmp-art-card__icon default-icon"/>
                        </div>
                        <div className="cmp-art-card__icon-sign-wrap">
                            <span className="cmp-art-card__icon-sign">{props.likesCount}</span>
                        </div>
                    </div>
                    <div className="cmp-art-card__panel-wrap">
                        <div className="cmp-art-card__dislike-icon-wrap">
                            <BiDislike className="cmp-art-card__icon default-icon"/>
                        </div>
                        <div className="cmp-art-card__icon-sign-wrap">
                            <span className="cmp-art-card__icon-sign">{props.dislikesCount}</span>
                        </div>
                    </div>
                    <div className="cmp-art-card__panel-wrap">
                        <div className="cmp-art-card__comment-icon-wrap">
                            <FaRegCommentAlt className="cmp-art-card__icon cmp-art-card__icon-comment default-icon"/>
                        </div>
                        <div className="cmp-art-card__icon-sign-wrap">
                            <span className="cmp-art-card__icon-sign">{props.commentsCount}</span>
                        </div>
                    </div>
                </div>
                <div className="cmp-art-card__title-wrap">
                    <h3 className="cmp-art-card__title">{props.title}</h3>
                    <div className="cmp-art-card__tag-container tag-container">
                        {
                            props.tags.map((tag) => {
                                return (
                                    <Tag key={tag.name} props={{text: tag.name, bgColor: tag.bgColor}}></Tag>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        ) : (
            <div className="cmp-art-card__loading-wrap">
                <LoadingSpinner size={4} width={0.8} color={getRandomDarkColor()}/>
            </div>
        )
    )
}
export default ArtCard;