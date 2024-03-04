import React from "react";
import { Link } from "react-router-dom";
import Back from "/images/back.svg";
import Css3 from "/images/css3.svg";
import ReactSvg from "/images/react.svg";
import ReactRouter from "/images/react-router.svg";
import ChatGpt from "/images/chatgpt.svg";
import Langchain from "/images/langchain.png";
import FringeFilmFinder1 from "/images/fringefilmfinder1.jpg";

export default function ProjectShowcasePage() {
    return (
        <main className="project-showcase-page">
            <Link className="back-button" to="/">
                <img src={Back} alt="back button icon" />
                <span>Back to home</span>
            </Link>
            <h2>Projects</h2>
            <section className="project-showcase-wrapper">
                <Link className="project" to="fringefilmfinder">
                    <div className="project-content">
                        <img src={FringeFilmFinder1} className="content-img" alt="a screenshot of the Fringe Film Finder project" />
                        <h3>Fringe Film Finder</h3>
                        <div className="project-tech-wrapper">
                            <img src={Css3} alt="css icon" />
                            <img src={ReactSvg} alt="react icon" />
                            <img src={ReactRouter} alt="react router icon" />
                            <img src={ChatGpt} alt="chatgpt icon" />
                            <img src={Langchain} alt="langchain icon" className="white-image" />
                        </div>
                        <p>A movie recommender. Draws on a database of 10k+ movies.</p>
                    </div>
                </Link>
                <Link className="project" to="portfolioproject">
                    <div className="project-content">
                        <img src="./images/portrait.jpg" className="content-img" alt="a screenshot of the company intranet project" />
                        <h3>Portfolio Site</h3>
                        <div className="project-tech-wrapper">
                            <img src={Css3} alt="css icon" />
                            <img src={ReactSvg} alt="react icon" />
                            <img src={ReactRouter} alt="react router icon" />
                        </div>
                        <p>The portfolio site you are on right now.</p>
                    </div>
                </Link>
            </section>
        </main>
    );
}
