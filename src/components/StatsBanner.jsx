import {BiDislike, BiLike} from "react-icons/bi";
import {FaRegCommentAlt} from "react-icons/fa";

const StatsBanner = ({props}) => {

    return (
        <div className="cmp-stats-banner">
            <div className="cmp-stats-banner__stats-container">
                <div className="cmp-stats-banner__icon-wrap">
                    <BiLike className="cmp-stats-banner__icon default-icon"/>
                    <span className="cmp-stats-banner__stat-count">{props.likes}</span>
                </div>
                <div className="cmp-stats-banner__icon-wrap">
                    <BiDislike className="cmp-stats-banner__icon default-icon"/>
                    <span className="cmp-stats-banner__stat-count">{props.dislikes}</span>
                </div>
                <div className="cmp-stats-banner__icon-wrap">
                    <FaRegCommentAlt className="cmp-stats-banner__icon default-icon"/>
                    <span className="cmp-stats-banner__stat-count">{props.comments}</span>
                </div>
                <div className="cmp-stats-banner__date-wrap">
                    <p className="cmp-stats-banner__date-date">{`${props.dateLabel}: ${props.date}`}</p>
                </div>
            </div>
        </div>
    );
}

export default StatsBanner;