import {BiDislike, BiLike} from "react-icons/bi";
import {FaRegCommentAlt} from "react-icons/fa";

const StatsBanner = ({props, showDate}) => {

    return (
        <div className="cmp-stats-banner">
            <div className="cmp-stats-banner__content-wrap">
                <div className="cmp-stats-banner__stats-wrap">
                    <div className="cmp-stats-banner__like-icon-wrap">
                        <BiLike className="cmp-stats-banner__icon--like default-icon"/>
                        <span className="cmp-stats-banner__stat-count">{props.likes}</span>
                    </div>
                    <div className="cmp-stats-banner__dislike-icon-wrap">
                        <BiDislike className="cmp-stats-banner__icon-dislike default-icon"/>
                        <span className="cmp-stats-banner__stat-count">{props.dislikes}</span>
                    </div>
                    <div className="cmp-stats-banner__comment-icon-wrap">
                        <FaRegCommentAlt className="cmp-stats-banner__icon-comment default-icon"/>
                        <span className="cmp-stats-banner__stat-count">{props.comments}</span>
                    </div>
                </div>
                {
                    showDate && (
                        <div className="cmp-stats-banner__date-wrap">
                            <p className="cmp-stats-banner__date-date">{`${props.dateLabel}: ${props.date}`}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default StatsBanner;