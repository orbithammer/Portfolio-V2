import React from "react"

export default function PortfolioProjectPage() {
    return(
        <main className="projectPage">
            <h1>Portfolio Site</h1>
            <div className="projectImgWrapper">
                <img src="./images/portrait.jpg" alt="screenshot of portfolio site" /> 
                <img src="./images/portrait.jpg" alt="screenshot of portfolio site" /> 
            </div>
            <h3>Technologies Used:</h3>
            <div className="projectPageTechWrapper">
                <img src="./images/css3-alt.svg" alt="css icon" />
                <img src="./images/react.svg" alt="react icon" />
                <img src="./images/react-router.svg" alt="react router icon" />
            </div>
            <h3>Description:</h3>
            <p>A mobile-first site to display all of my projects.</p>
            <h3>What I Learned:</h3>
            <p>I chose to use React Router to solidify my skills, not out of any real technical need for the library. It was also great CSS practice.</p>
            <h3>Link:</h3>
            <a className="projectLink" onClick={()=>window.open("https://github.com/orbithammer/Portfolio-V2", "_blank")}> 
                <img src="./images/github.svg" alt="github icon" /> 
            </a>
        </main>
    )
}