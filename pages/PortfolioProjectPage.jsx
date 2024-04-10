import React from "react";
import { Link } from "react-router-dom";
import Back from "/images/back.svg";
import Portfolio1 from "/images/portfolio1.jpg";
import Portfolio2 from "/images/portfolio2.jpg";
import Css3 from "/images/css3.svg";
import ReactSvg from "/images/react.svg";
import ReactRouter from "/images/react-router.svg";
import Github from "/images/github.svg";

export default function PortfolioProjectPage() {
    return (
        <main>
            <div className="project-page">
                <Link className="back-button" to="/projects">
                    <img src={Back} alt="back button icon" />
                    <span>Back to projects</span>
                </Link>
                <h1>Portfolio Site</h1>
                <div className="project-img-wrapper">
                    <img src={Portfolio1} alt="screenshot of the portfolio home page" /> 
                    <img src={Portfolio2} alt="screenshot of the portfolio about me page" /> 
                </div>
                <h3>Technologies Used:</h3>
                <div className="project-page-tech-wrapper">
                    <img src={Css3} alt="CSS icon" />
                    <img src={ReactSvg} alt="React icon" />
                    <img src={ReactRouter} alt="React Router icon" />
                </div>
                <h3>Description:</h3>
                <p>A mobile-first site to display all of my projects.</p>
                <h3>What I Learned:</h3>
                <p>I chose to use React Router to solidify my skills and found it's the only real option for multi paged apps. It was also great CSS practice to make a responsive design.</p>
                <h3>Links:</h3>
                <a className="project-link" onClick={() => window.open("https://github.com/orbithammer/Portfolio-V2", "_blank")}> 
                    <img src={Github} alt="GitHub icon" /> 
                </a>
            </div>
        </main>
    );
}
