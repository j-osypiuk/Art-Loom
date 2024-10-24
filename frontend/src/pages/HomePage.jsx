import EventsSection from "../components/EventsSection.jsx";
import UserCard from "../components/UserCard.jsx";

const HomePage = () => {
    return (
        <div className="cmp-container">
            <UserCard/>
            <EventsSection/>
        </div>
    );
}

export default HomePage;