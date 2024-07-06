import React from "react";
import { Link } from "react-router-dom";
import Back from "/images/back.svg";
import Css3 from "/images/css3.svg";
import ReactSvg from "/images/react.svg";
import ReactRouter from "/images/react-router.svg";
import Github from "/images/github.svg";
import IsGlitchDotCom1 from "/images/isGlitchDotCom1.jpg";
import IsGlitchDotCom2 from "/images/isGlitchDotCom2.jpg";
import Typescript from "/images/typescript.svg"
import Bug from "/images/bug.svg"

export default function IsGlitchPage() {
    return (
        <main>
            <div className="project-page">
                <Link className="back-button" to="/projects">
                    <img src={Back} alt="back button icon" />
                    <span>Back to projects</span>
                </Link>
                <h1>isGlitch.com</h1>
                <div className="project-img-wrapper">
                    <a onClick={() => window.open("https://isglitch.com/", "_blank")}>
                        <img src={IsGlitchDotCom1} alt="screenshot of the isGlitch.com entertainment page" /> 
                        <img src={IsGlitchDotCom2} alt="screenshot of the isGlitch.com search page" />
                    </a>
                </div>
                <h3>Technologies Used:</h3>
                <div className="project-page-tech-wrapper">
                    <img src={Css3} alt="CSS icon" />
                    <img src={ReactSvg} alt="React icon" />
                    <img src={ReactRouter} alt="React Router icon" />
                    <img src={Typescript} alt="TypeScript icon" />
                </div>
                <h3>Description:</h3>
                <p>A satirical tech news website.</p>
                <h3>What I Learned:</h3>
                <p>The main thing I learned was how to implement TypeScript. It is invaluable for scaling up large projects due to early detection of potential errors.</p>
                <p>The original idea for this project was to use a combination LLMs and Stable Diffusion. I was going to simulate how The Onion workshops its ideas with LangChain called to various LLM APIs. Unofortunatley, the only LLM with a sense of humor is Anthropic's Claude. The images are the most diffucult part of the process. I sometimes need to download loras. Even if they are not needed, maybe one out of fifty images created are decent. Suffice to say, I learned the limitations of relying on AI for automation.</p>
                <p>I also leared a lot about metatags and how they affect SEO. In addition, about how Google will ignore all that and do it's own thing. In the future, I plan to implement server side rendering, but that seems like a steep time investment.</p>
                <p>Pagination was another thing I learned. All in all, I think it worked out well. I also implemented a simple search page so the user can find similar stories on the site.</p>
                <h3>Links:</h3>
                <div className="links-wrapper">
                    <a className="project-link" onClick={() => window.open("https://github.com/orbithammer/theGlitch", "_blank")}> 
                        <img src={Github} alt="GitHub icon" /> 
                    </a>
                    <a className="project-link" onClick={() => window.open("https://isGlitch.com/", "_blank")}> 
                        <img src={Bug} alt="isGlitch.com" /> 
                    </a>
                </div>
            </div>
        </main>
    );
}
