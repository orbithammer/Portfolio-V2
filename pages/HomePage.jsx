import React from "react"

export default function HomePage() {
    return (
        <div>
            <header>
                <h1>Hello, my name is <span>Brock Penner</span>.</h1>
                <h1>I'm a <span>junior frontend developer</span>.</h1>
                <p className="contactWrapper">Find me on 
                    <a onClick={()=>{window.open("https://www.linkedin.com/in/brock-penner-97322062", "_blank")}}><img src="./images/linkedin.svg" /></a>
                    <a onClick={()=>{window.open("https://techhub.social/@brockpenner", "_blank")}}><img src="./images/mastodon.svg" /></a>
                    <a onClick={()=>{window.open("https://github.com/orbithammer", "_blank")}}><img src="./images/github.svg" /></a>
                    <a onClick={()=>{window.open("https://twitter.com/BrockTIPenner", "_blank")}}><img src="./images/twitter.svg" /></a>
                </p>
                <div className="buttonWrapper">
                    <a className="emailLink" onClick={()=>{window.open("mailto: brockpenner@protonmail.com", "_blank")}}><img src="./images/envelope-solid.svg" />Email</a>
                    <a className="resumeLink" onClick={()=>{window.open("/files/resumeBrockPenner.pdf", "_blank")}}><img src="./images/download-solid.svg" />Resume</a>
                </div>
            </header>
            <main>
                <h2>Why hire me?</h2>
                    <h3>Tenacity</h3>
                        <img src="./images/tenacity.png" />
                        <p>When I sink my teeth into a coding challenge, I don't stop until it's solved.</p>
                    <h3>Life-long Learner</h3>
                        <img src="./images/lifelongLearner.png" />
                        <p>I am zealous about the continous cycle of skill development. I embrace new technologies and design patterns.</p>
                    <h3>Mature</h3>
                        <img src="./images/mature.png" />
                        <p>Responsible and reliable, I take on tasks with professionalism. I am experienced with adhering to uncertain schedules.</p>
                    <h3>Goal Oriented</h3>
                        <img src="./images/goalOriented.png" />
                        <p>Focused on achieving results, I break complex tasks down into their essiential components. In this way, I will contribute to delivering the finished product on or before the dealine.</p>
                <h2>Technologies</h2>
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                    <h3>Javascript</h3>
                    <h3>React</h3>
                    <h3>React Router</h3>
            </main>
        </div>
    )
}