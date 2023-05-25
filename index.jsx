import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectPlPage from "./pages/ProjectPlPage"
import CompanyIntranetPage from "./pages/CompanyIntranetPage"
import PortfolioProjectPage from "./pages/PortfolioProjectPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectPlPage />} />
          <Route path="projects/company_intranet" element={<CompanyIntranetPage />} />
          <Route path="projects/portfolio_project" element={<PortfolioProjectPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)