import React from "react"
import Navbar from "./Navbar"

import Card from "./Card"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
            // <Hero />
    return (
        <div >
            <Navbar />
            <div className="cards">
            <Card />
            <Card />
            <Card />
            </div>
        </div>
    )
}