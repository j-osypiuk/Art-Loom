import { FiMusic } from "react-icons/fi";

const EventCard = ({props}) => {

    return (
        <a href="#" className="cmp-event-card">
            <div className="cmp-event-card__icon-wrap">
                <div className="cmp-event-card__icon">
                    <FiMusic className="cmp-event-card__icon" />
                </div>
            </div>
            <div className="cmp-event-card__content-wrap">
                <p className="cmp-event-card__title">{props.title}</p>
                <p className="cmp-event-card__location">{props.address}</p>
                <p className="cmp-event-card__date">{`${props.date}, ${props.time}`}</p>
            </div>
        </a>
    )
}

export default EventCard;