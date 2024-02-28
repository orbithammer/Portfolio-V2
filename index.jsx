import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectShowcasePage from "./pages/ProjectShowcasePage"
import FringeFilmFinderPage from "./pages/FringeFilmFinderPage"
import PortfolioProjectPage from "./pages/PortfolioProjectPage"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectShowcasePage />} />
          <Route path="projects/fringefilmfinder" element={<FringeFilmFinderPage />} />
          <Route path="projects/portfolioproject" element={<PortfolioProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)