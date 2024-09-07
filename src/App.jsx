import "./styles/App.css";
import "./styles/WelcomeForm.css";
import "./styles/FormInput.css"
import "./styles/EventCard.css"
import "./styles/EventsSection.css";
import "./styles/ArtCard.css"
import "./styles/DiscoverSection.css";
import WelcomeForm from "./components/WelcomeForm.jsx";
import EventCard from "./components/EventCard.jsx";
import EventsSection from "./components/EventsSection.jsx";
import ArtCard from "./components/ArtCard.jsx";
import DiscoverSection from "./components/DiscoverSection.jsx";

function App() {
  return (
    <div className="cmp-container">
        <DiscoverSection />
    </div>
  );
}

export default App;
