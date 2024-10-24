import EventCard from "./EventCard.jsx"
import {useState} from "react";

const EventsSection = () => {
    const [props, setProps] = useState({
        title: "Super Music Event Festival in Warsaw 2024",
        address: "Warsaw, Marszałkowska 48",
        date: "01-05-2024",
        time: "19:00"
    })

    return (
        <div className="cmp-events-section">
            <EventCard props={props}/>
            <EventCard props={props}/>
            <EventCard props={props}/>
            <EventCard props={props}/>
        </div>
    )
}

export default EventsSection;