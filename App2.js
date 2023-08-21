import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card2 from "./Card2"
import data from "./data"


export default function App() {
   
           const cardArray=data.map(item => {
               return <Card2 
               key={item.id}
               item={item}
            />
           })
    return (
        <div className="div" >
            <Navbar />
            <Hero />
            <div className="cards">
           {cardArray}
         
            </div>
        </div>
    )
}