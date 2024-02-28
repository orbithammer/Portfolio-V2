import React from "react";
import { Link } from "react-router-dom"
import Back from "/images/back.svg"

export default function AboutPage() {
    return (
        <main className="about-page">
            <Link className="back-button" to="/">
                <img src={Back} alt="back button icon" />
                <span>Back to home</span>
            </Link>
            <h2>About Me</h2>
            <p className="about-text">I am a frontend developer who adheres to the KISS design principle. I love to learn anything that will improve my craft and incorporate <strong><em>any and all</em></strong> feedback.</p>
            <h3>Interests</h3>
            <p className="about-text">I'm a nature-loving solarpunk. I'm into marching up mountains and squeezing in the occasional book or movie when I can.</p>
            <h3>Why programming?</h3>
            <p className="about-text">I have always dabbled in programming. One of my first memories is of taking a course on BASIC back in the day. When opportunities arose during my teaching career, I would use my beginner Python skills to automate the boring stuff.</p>
            <p className="about-text">And then the pandemic changed everything. Teaching was comfortable, but there was no next step along that career path. I had to do a radical re-evaluation of what I wanted from work. There was only one job in the center of the Venn diagram of "what I'm good at", "what I enjoy doing", and "what's employable": programming!</p>
        </main>
    );
}
