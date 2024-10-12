import "./styles/App.css";
import "./styles/forms/Forms.css"
import "./styles/components/ModalSlide.css"
import "./styles/forms/LoginForm.css";
import "./styles/forms/ProfileForm.css"
import "./styles/components/FormInput.css"
import "./styles/components/Header.css"
import "./styles/components/EventCard.css"
import "./styles/components/EventsSection.css";
import "./styles/components/ArtCard.css"
import "./styles/components/DiscoverSection.css";
import "./styles/components/UserCard.css"
import "./styles/components/Tag.css"
import "./styles/components/ProfileBanner.css"
import "./styles/containers/TagContainer.css"
import "./styles/icons/DefaultIcon.css"
import "./styles/components/ArtBanner.css"
import "./styles/components/StatsBanner.css"
import "./styles/components/BannerContent.css"
import "./styles/components/TextWrap.css"
import "./styles/pages/UserPage.css"
import "./styles/components/SelectInput.css"
import "./styles/components/Tabs.css"
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
