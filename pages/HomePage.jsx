import React from "react";
import Portrait from "/images/portrait.jpg";
import LinkedIn from "/images/linkedin.svg";
import Mastodon from "/images/mastodon.svg";
import Github from "/images/github.svg";
import Twitter from "/images/twitter.svg";
import EnvelopeSolid from "/images/envelope-solid.svg";
import DownloadSolid from "/images/download-solid.svg";
import Tenacity from "/images/tenacity.png";
import LifelongLearner from "/images/lifelongLearner.png";
import Mature from "/images/mature.png";
import GoalOriented from "/images/goalOriented.png";
import Html5 from "/images/html5.svg";
import Css3 from "/images/css3.svg";
import Js from "/images/js.svg";
import ReactSvg from "/images/react.svg";
import ReactRouter from "/images/react-router.svg";
import ChatGpt from "/images/chatgpt.svg";
import Langchain from "/images/langchain.png";
import TypeScript from "/images/typescript.svg";
import resumePdf from "/files/resumeBrockPenner.pdf"

export default function HomePage() {
    return (
        <div>
            <header>
                <div className="hero-wrapper">
                    <img src={Portrait} className="portrait-hero" alt="Brock Penner's portrait" />
                    <div className="hero-text-wrapper">
                        <h1>Hello, my name is <br/><span>Brock Penner</span>.</h1>
                        <h1>I am a <br/><span>junior developer</span>.</h1>
                        <p className="contact-wrapper">Find me on 
                            <a onClick={()=>{window.open("https://www.linkedin.com/in/brock-penner-97322062", "_blank")}}>
                                <img src={LinkedIn} alt="linkedin icon" />
                            </a>
                            <a onClick={()=>{window.open("https://techhub.social/@brockpenner", "_blank")}}>
                                <img src={Mastodon} alt="mastodon icon" />
                            </a>
                            <a onClick={()=>{window.open("https://github.com/orbithammer", "_blank")}}>
                                <img src={Github} alt="github icon" />
                            </a>
                            <a onClick={()=>{window.open("https://twitter.com/BrockTIPenner", "_blank")}}>
                                <img src={Twitter} alt="twitter icon" />
                            </a>
                        </p>
                        <div className="button-wrapper">
                            <a className="email-link" onClick={()=>{window.open("mailto: brockpenner@protonmail.com", "_blank")}}>
                                <img src={EnvelopeSolid} alt="email icon" />Email
                            </a>
                            <a className="resume-link" href={resumePdf}>
                                <img src={DownloadSolid} alt="download icon" />Resume
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="why-hire">
                    <h2>Why hire me?</h2>
                    <div className="quality-pl">
                            <div className="quality">
                                <img src={Tenacity} alt="a dog chewing a bone" />
                                <h3>Tenacious</h3>
                                <p>When I sink my teeth into a coding challenge, I don't stop until it's solved.</p>
                            </div>
                            <div className="quality">
                                <img src={LifelongLearner} alt="a person reading a book" />
                                <h3>Life-long Learner</h3>
                                <p>I am zealous about the continuous cycle of skill development. I embrace new technologies and design patterns.</p>
                            </div>
                            <div className="quality">
                                <img src={Mature} alt="a man with a beard wearing a suit" />
                                <h3>Mature</h3>
                                <p>Responsible and reliable, I take on tasks with professionalism. I am experienced with adhering to uncertain schedules.</p>
                            </div>
                            <div className="quality">
                                <img src={GoalOriented} alt="an arrow dead center in a target" />
                                <h3>Goal Oriented</h3>
                                <p>Focused on achieving results, I break complex tasks down into their essential components. In this way, I will contribute to delivering the finished product on or before the deadline.</p>
                            </div>
                    </div>
                </section>
                <section className="technologies">
                    <h2>Technologies</h2>
                    <div className="technologies-wrapper">
                        <div className="technologies-row">
                            <h4><img src={Html5} alt="html icon" />HTML</h4>
                            <h4><img src={Css3} alt="css icon" />CSS</h4>
                            <h4><img src={Js} alt="javascript icon" />Javascript</h4>
                            <h4><img src={ReactSvg} alt="react icon" />React</h4>
                        </div>
                        <div className="technologies-row">
                            <h4><img src={TypeScript} calt="TypeScript icon" />TypeScript</h4>
                            <h4><img src={ReactRouter} alt="react router icon" />React Router</h4>
                            <h4><img src={ChatGpt} alt="chatgpt icon" />ChatGPT</h4>
                            <h4><img src={Langchain} className="white-image" alt="langchain icon" />LangChain</h4>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    );
}
