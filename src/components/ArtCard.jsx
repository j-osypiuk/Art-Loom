import {FiMusic} from "react-icons/fi";
import {BiLike} from "react-icons/bi";
import {BiDislike} from "react-icons/bi";
import {FaRegCommentAlt} from "react-icons/fa";

const ArtCard = ({props}) => {

    const handleMouseEvent = (event) => {
        const iconsWrap = document.querySelector(`#${event.target.closest(".cmp-art-card").id} .cmp-art-card__icons-wrap`);
        iconsWrap.classList.toggle("cmp-art-card__icons-wrap--visible");
    }

    return (
        <div onMouseEnter={handleMouseEvent}
             onMouseLeave={handleMouseEvent}
             className="cmp-art-card"
             id={props.id}
             style={{backgroundImage: `url(${props.thumbnailPath})`}}>
            <div className="cmp-art-card__category-icon-wrap">
                <FiMusic className="cmp-art-card__icon"/>
            </div>
            <div className="cmp-art-card__icons-wrap">
                <div className="cmp-art-card__panel-wrap">
                    <div className="cmp-art-card__like-icon-wrap">
                        <BiLike className="cmp-art-card__icon"/>
                    </div>
                    <div className="cmp-art-card__icon-sign-wrap">
                        <span className="cmp-art-card__icon-sign">{props.likesCount}</span>
                    </div>
                </div>
                <div className="cmp-art-card__panel-wrap">
                    <div className="cmp-art-card__dislike-icon-wrap">
                        <BiDislike className="cmp-art-card__icon"/>
                    </div>
                    <div className="cmp-art-card__icon-sign-wrap">
                        <span className="cmp-art-card__icon-sign">{props.dislikesCount}</span>
                    </div>
                </div>
                <div className="cmp-art-card__panel-wrap">
                    <div className="cmp-art-card__comment-icon-wrap">
                        <FaRegCommentAlt className="cmp-art-card__icon"/>
                    </div>
                    <div className="cmp-art-card__icon-sign-wrap">
                        <span className="cmp-art-card__icon-sign">{props.commentsCount}</span>
                    </div>
                </div>
            </div>
            <div className="cmp-art-card__title-wrap">
                <h3 className="cmp-art-card__title">{props.title}</h3>
            </div>
        </div>
    )
}
export default ArtCard;