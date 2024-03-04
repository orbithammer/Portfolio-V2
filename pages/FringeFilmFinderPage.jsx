import React from "react";
import { Link } from "react-router-dom";
import Back from "/images/back.svg";
import Css3 from "/images/css3.svg";
import ReactSvg from "/images/react.svg";
import ReactRouter from "/images/react-router.svg";
import Github from "/images/github.svg";
import FringeFilmFinder1 from "/images/fringefilmfinder1.jpg";
import FringeFilmFinder2 from "/images/fringefilmfinder2.jpg";
import ChatGpt from "/images/chatgpt.svg";
import Langchain from "/images/langchain.png";
import Clapper from "/images/clapper.svg"

export default function FringeFilmFinderPage() {
    return (
        <main>
            <div className="project-page">
                <Link className="back-button" to="/projects">
                    <img src={Back} alt="back button icon" />
                    <span>Back to projects</span>
                </Link>
                <h1>Fringe Film Finder</h1>
                <div className="project-img-wrapper">
                    <a onClick={() => window.open("https://fringefilmfinder.netlify.app/", "_blank")}>
                        <img src={FringeFilmFinder1} alt="screenshot of the Fringe Film Finder page" /> 
                        <img src={FringeFilmFinder2} alt="screenshot of the Fringe Film Finder page" /> 
                    </a>
                </div>
                <h3>Technologies Used:</h3>
                <div className="project-page-tech-wrapper">
                    <img src={Css3} alt="CSS icon" />
                    <img src={ReactSvg} alt="React icon" />
                    <img src={ReactRouter} alt="React Router icon" />
                    <img src={ChatGpt} alt="ChatGPT icon" />
                    <img src={Langchain} alt="Langchain icon" className="white-image" />
                </div>
                <h3>Description:</h3>
                <p>A mobile site that uses ChatGPT and Langchain to recommend movies. It draws upon a database of 10k+ titles.</p>
                <h3>What I Learned:</h3>
                <p>I found the limitations of prompt engineering. The first iteration of this project gave ChatGPT the user's favorite movie and the type of movie they would like to watch. The results were bland and unimpressive.</p>
                <p>For the second iteration, I started to use ChatGPT and other platforms as a coding mentor. This increased my output twofold at least. ChatGPT helped me set up a web scraper. I had almost zero experience scraping beforehand. I created a database of over ten thousand movies scraped from a specialty video rental store and populated it with data from omdbapi.com.</p>
                <p>I remade the second iteration as a ChatGPT assistant. The output was unreliable at best. The user would be lucky to get the correct IMDb ID, and it would return the wrong poster more often than not. In response to the user's queries, it sometimes said it did not have the information on file. If it was asked to look harder, it magically found the answer.</p>
                <p>For the third iteration, I converted the movie database to JSON data since I had read it was the most efficient for data retrieval. After rebuilding the app with Langchain, the output became much more reliable. However, it does tend to hallucinate the poster URL once in a while. Possibly, the length of the URL might make it susceptible to hallucinations. All in all, the app works!</p>
                <h3>Links:</h3>
                <div className="links-wrapper">
                    <a className="project-link" onClick={() => window.open("https://github.com/orbithammer/Fringe-Film-Finder-v2", "_blank")}> 
                        <img src={Github} alt="GitHub icon" /> 
                    </a>
                    <a className="project-link" onClick={() => window.open("https://fringefilmfinder.netlify.app/", "_blank")}> 
                        <img src={Clapper} alt="Fringe Film Finder icon" /> 
                    </a>
                </div>
            </div>
        </main>
    );
}
