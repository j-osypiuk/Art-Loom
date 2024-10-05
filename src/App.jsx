import "./styles/App.css";
import "./styles/LoginForm.css";
import "./styles/FormInput.css"
import "./styles/Header.css"
import "./styles/EventCard.css"
import "./styles/EventsSection.css";
import "./styles/ArtCard.css"
import "./styles/DiscoverSection.css";
import "./styles/UserCard.css"
import "./styles/ProfilePhoto.css"
import "./styles/Tag.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Header from "./components/Header.jsx";
import DiscoverPage from "./pages/DiscoverPage.jsx";


function App() {
  return (
      <>
        <main>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/discover" element={<DiscoverPage />} />
                    <Route path="/profile" element={<UserPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </main>
      </>
  );
}

export default App;
