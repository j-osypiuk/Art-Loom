import "./styles/App.css";
import "./styles/WelcomeForm.css";
import "./styles/FormInput.css"
import "./styles/EventCard.css"
import "./styles/EventsSection.css";
import WelcomeForm from "./components/WelcomeForm.jsx";
import EventCard from "./components/EventCard.jsx";
import EventsSection from "./components/EventsSection.jsx";

function App() {
  return (
    <div className="cmp-container">
      <EventsSection />
    </div>
  );
}

export default App;
