import React from "react"

export default function HomePage() {
    return (
        <div>
            <header>
                <div className="heroWrapper">
                    <img src="./images/portrait.jpg" className="portraitHero" alt="Brock Penner's portrait" />
                    <div className="heroTextWrapper">
                        <h1>Hello, my name is <br/><span>Brock Penner</span>.</h1>
                        <h1>I am a <br/><span>junior developer</span>.</h1>
                        <p className="contactWrapper">Find me on 
                            <a onClick={()=>{window.open("https://www.linkedin.com/in/brock-penner-97322062", "_blank")}}>
                                <img src="./images/linkedin.svg" alt="linkedin icon" />
                                </a>
                            <a onClick={()=>{window.open("https://techhub.social/@brockpenner", "_blank")}}>
                                <img src="./images/mastodon.svg" alt="mastodon icon" />
                                </a>
                            <a onClick={()=>{window.open("https://github.com/orbithammer", "_blank")}}>
                                <img src="./images/github.svg" alt="github icon" />
                            </a>
                            <a onClick={()=>{window.open("https://twitter.com/BrockTIPenner", "_blank")}}>
                                <img src="./images/twitter.svg" alt="twitter icon" />
                                </a>
                        </p>
                        <div className="buttonWrapper">
                            <a className="emailLink" onClick={()=>{window.open("mailto: brockpenner@protonmail.com", "_blank")}}>
                                <img src="./images/envelope-solid.svg" alt="email icon" />Email
                            </a>
                            <a className="resumeLink" onClick={()=>{window.open("/files/resumeBrockPenner.pdf", "_blank")}}>
                                <img src="./images/download-solid.svg" alt="download icon" />Resume
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="whyHire">
                    <h2>Why hire me?</h2>
                    <div className="qualityPl">
                            <div className="quality">
                                <img src="./images/tenacity.png" alt="a dog chewinng a bone" />
                                <h3>Tenacious</h3>
                                <p>When I sink my teeth into a coding challenge, I don't stop until it's solved.</p>
                            </div>
                            <div className="quality">
                                <img src="./images/lifelongLearner.png" alt="a person reading a book" />
                                <h3>Life-long Learner</h3>
                                <p>I am zealous about the continous cycle of skill development. I embrace new technologies and design patterns.</p>
                            </div>
                            <div className="quality">
                                <img src="./images/mature.png" alt="a man with a beard wearing a suit" />
                                <h3>Mature</h3>
                                <p>Responsible and reliable, I take on tasks with professionalism. I am experienced with adhering to uncertain schedules.</p>
                            </div>
                            <div className="quality">
                                <img src="./images/goalOriented.png" alt="an arrow dead center in a target" />
                                <h3>Goal Oriented</h3>
                                <p>Focused on achieving results, I break complex tasks down into their essiential components. In this way, I will contribute to delivering the finished product on or before the dealine.</p>
                            </div>
                    </div>
                </section>
                <h2>Technologies</h2>
                <div className="technologiesWrapper">
                    <h4><img src="./images/html5.svg" alt="html icon" />HTML</h4>
                    <h4><img src="./images/css3-alt.svg" alt="css icon" />CSS</h4>
                    <h4><img src="./images/js.svg" alt="javascript icon" />Javascript</h4>
                    <h4><img src="./images/react.svg" alt="react icon" />React</h4>
                    <h4><img src="./images/react-router.svg" alt="react router icon" />React Router</h4>
                </div>
            </main>
        </div>
    )
}