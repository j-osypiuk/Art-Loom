import EventsSection from "../components/EventsSection.jsx";
import UserCard from "../components/UserCard.jsx";
import DiscoverSection from "../components/DiscoverSection.jsx";

const HomePage = () => {
    return (
        <div className="cmp-container">
            <UserCard/>
            <EventsSection/>
            <DiscoverSection/>
        </div>
    );
}

export default HomePage;