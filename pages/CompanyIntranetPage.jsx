import React from "react"

export default function CompanyIntranetPage() {
    return(
        <main>
            <div className="projectPage">
            <h1>Company Intranet</h1>
            <div className="projectImgWrapper">
                <img src="./images/portrait.jpg" alt="screenshot of company intranet site" /> 
                <img src="./images/portrait.jpg" alt="screenshot of company intranet site" /> 
            </div>
            <h3>Technologies Used:</h3>
            <div className="projectPageTechWrapper">
                <img src="./images/css3-alt.svg" alt="css icon" />
                <img src="./images/react.svg" alt="react icon" />
                <img src="./images/react-router.svg" alt="react router icon" />
            </div>
            <h3>Description:</h3>
            <p>A mobile-first site mock intranet site for an ESL tutoring company. The inspiration for this project is the real-life site I have to use everyday. I thought, "I could make a better site than this." So, I did!</p>
            <h3>What I Learned:</h3>
            <p>TODO</p>
            <h3>Link:</h3>
            <a className="projectLink" onClick={()=>window.open("https://github.com/orbithammer/Portfolio-V2", "_blank")}> 
                <img src="./images/github.svg" alt="github icon" /> 
            </a>
            </div>
        </main>
    )
}