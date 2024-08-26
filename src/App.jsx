import "./styles/App.css";
import "./styles/LoginForm.css";
import "./styles/FormInput.css"
import "./styles/Header.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserPage from "./pages/UserPage.jsx";
import Header from "./components/Header.jsx";


function App() {
  return (
      <>
        <Header />
        <main>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/profile" element={<UserPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>
        </main>
      </>
  );
}

export default App;
