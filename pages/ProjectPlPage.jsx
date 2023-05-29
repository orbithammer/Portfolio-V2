import React from "react"
import { Link } from "react-router-dom"

export default function ProjectPlPage() {
    return(
        <main className="projectPlPage">
            <h2>Projects</h2>
                <section className="projectPlWrapper">
                    <Link className="project" to="companyintranet">
                        <img src="./images/portrait.jpg" alt="a screenshot of the company intranet project" />
                        <h3>Company Intranet</h3>
                        <div className="projectTechWrapper">
                            <img src="./images/css3-alt.svg" alt="css icon"/>
                            <img src="./images/react.svg" alt="react icon"/>
                            <img src="./images/react-router.svg" alt="react router icon" />
                        </div>
                        <p>An intranet site for an EFL tutoring company.</p>
                    </Link>
                    <Link className="project" to="portfolioproject">
                        <img src="./images/portrait.jpg" alt="a screenshot of the company intranet project" />
                        <h3>Portfolio Site</h3>
                        <div className="projectTechWrapper">
                            <img src="./images/css3-alt.svg" alt="css icon"/>
                            <img src="./images/react.svg" alt="react icon"/>
                            <img src="./images/react-router.svg" alt="react router icon" />
                        </div>
                        <p>The portfolio site you are on right now.</p>
                    </Link>
                </section>
        </main>
    )
}