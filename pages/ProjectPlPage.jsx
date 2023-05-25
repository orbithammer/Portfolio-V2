import React from "react"
import { Link } from "react-router-dom"

export default function ProjectPlPage() {
    return(
        <main className="projectPlPage">
            <h2>Projects</h2>
                <section className="projectPlWrapper">
                    <Link className="project" to="company_intranet">
                        <img src="./images/404.jpg" alt="a screenshot of the company intranet project" />
                        <h3>Company Intranet</h3>
                        <div className="projectTechWrapper">
                            <img src="./images/css3-alt.svg" alt="css icon"/>
                            <img src="./images/react.svg" alt="react icon"/>
                            <img src="./images/react-router.svg" alt="react router icon" />
                        </div>
                        <p>An intranet site for an EFL tutoring company.</p>
                    </Link>
                    <Link className="project" to="portfolio_project">
                        <img src="./images/portrait.jpg" alt="a screenshot of the company intranet project" />
                        <h3>Company Intranet</h3>
                        <div className="projectTechWrapper">
                            <img src="./images/css3-alt.svg" alt="css icon"/>
                            <img src="./images/react.svg" alt="react icon"/>
                            <img src="./images/react-router.svg" alt="react router icon" />
                        </div>
                        <p>An intranet site for an EFL tutoring company.</p>
                    </Link>
                </section>
        </main>
    )
}