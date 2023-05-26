import React from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
    return(
        <main>
            <h1>Sorry, that page is not found.</h1>
            <Link to="/" className="link-button">Return Home</Link>
        </main>
    )
}