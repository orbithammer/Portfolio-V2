import React from "react"
import Portrait from "/images/portrait.jpg"
import Envelope from "/images/envelope-solid.svg"
import Linkedin from "/images/linkedin.svg"
import Mastodon from "/images/mastodon.svg"
import Twitter from "/images/twitter.svg"
import Github from "/images/github.svg"

export default function App() {
    return (
        <div>
            <main>
                <img className="portrait" src={Portrait} />
                <div className="info">
                    <section className="titles">
                        <h1>Brock Penner</h1>
                        <h4 className="job-title">Frontend Developer</h4>
                        <h4><a className="portfolio-link" onClick={()=>{window.open("https://brocksportfolio.netlify.app/", "_blank")}}>Click here for portfolio.</a></h4>
                    </section>
                    <section className="contact-info">
                        <a onClick={()=>{window.open("mailto: brockpenner@protonmail.com", "_blank")}}><img href="" src={Envelope} />Email</a>
                        <a onClick={()=>{window.open("https://www.linkedin.com/in/brock-penner-97322062/", "_blank")}}><img src={Linkedin} className="linkedin-icon"/>LinkedIn</a>
                    </section>
                    <section className="details">
                        <h3>About</h3>
                        <p>I am a frontend developer that keeps to the KISS design principle. I love to learn anything that will improve my craft and am willing to incorporate <strong><em>any and all</em></strong> feedback.</p>
                        <h3>Interests</h3>
                        <p>Wordsmith and admirer of master scribes. Rider of alpine waves. Aficionado of art-house cinema and popcorn flicks. Dreamer of a solarpunk future.</p>
                    </section>
                </div>
                <footer>
                    <a onClick={()=>{window.open("https://techhub.social/@brockpenner", "_blank")}}>
                        <img src={Mastodon} />
                    </a>
                    <a onClick={()=>{window.open("https://www.twitter.com/BrockTIPenner", "_blank")}}>
                        <img src={Twitter} />
                    </a>
                    <a onClick={()=>{window.open("https://www.github.com/orbithammer", "_blank")}}>
                        <img src={Github} />
                    </a>
                </footer>
            </main>
        </div>
    )
}
