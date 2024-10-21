const Comment = ({props}) => {

    const getTimeAgo = (date) => {
        const now = new Date();
        const past = new Date(date);
        const timeDifferenceInSeconds = Math.floor((now - past) / 1000);

        const years = Math.floor(timeDifferenceInSeconds / (3600 * 24 * 365));
        const months = Math.floor(timeDifferenceInSeconds / (3600 * 24 * 30));
        const days = Math.floor(timeDifferenceInSeconds / (3600 * 24));
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        const minutes = Math.floor(timeDifferenceInSeconds / 60);

        if (years >= 1) {
            return years === 1 ? '1 year ago' : `${years} years ago`;
        } else if (months >= 1) {
            return months === 1 ? '1 month ago' : `${months} months ago`;
        } else if (days >= 1) {
            return days === 1 ? '1 day ago' : `${days} days ago`;
        } else if (hours >= 1) {
            return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
        } else if (minutes >= 1) {
            return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
        } else {
            return 'Just now';
        }
    }

    return (
        <div className="cmp-comment">
            <img className="cmp-comment__profile-img"
                 src="src/assets/profile-photo.jpg"
                 alt="User Profile Photo"
            />
            <div className="cmp-comment__content-wrap">
                <div className="cmp-comment__top-content-wrap">
                    <div className="cmp-comment__full-name-wrap">
                        <span className="cmp-comment__full-name">{`${props.fullName} `}</span>
                        <span className="cmp-comment__nick-name">#{props.nickName}</span>
                    </div>
                    <div className="cmp-comment__date-wrap">
                        <span className="cmp-comment__date">{getTimeAgo(props.publishedDate)}</span>
                    </div>
                </div>
                <p className="cmp-comment__comment">{props.comment}</p>
            </div>
        </div>
    )
}

export default Comment;