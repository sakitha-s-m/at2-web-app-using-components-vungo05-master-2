import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Components 
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page Components
import HomePage from "./components/home-page/HomePage";
import RegionsPage from "./components/regions-page/RegionsPage";
import NewsPage from "./components/news-page/NewsPage";
import ContactPage from "./components/contact-page/ContactPage";
import TravelGuidesPage from "./components/travel-guides-page/TravelGuidesPage";

// Basename for the React Router
const basename =
    process.env.NODE_ENV === "production"
        ? "/at2-web-app-using-components-vungo05-master-2/"
        : "/";
        
function App() {
    return (
        <BrowserRouter basename={basename}>
            <div id="wrapper">
                {/* Common Header */}
                <Header />

                {/* Page Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/regions" element={<RegionsPage />} />
                    <Route path="/news" element={<NewsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/travel-guides" element={<TravelGuidesPage />} />
                </Routes>

                {/* Common Footer */}
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;