import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img src="https://www.athletespeakers.com/storage/celebrities/1627410490_Katie-Zaferes-Banner-1.jpg" className="card--image" />
            <div className="card--stats">
                <img src="http://pluspng.com/img-png/yellow-stars-png-hd-pictures-of-cartoon-stars-hd-wallpapers-lovely-8029.png" className="card--star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <div className="info">
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p></div>
        </div>
    )
}

const person = {
    img: "./images/mr-whiskerson.png",
    name: "Mr. Whiskerson",
    phone: "(800) 555-1234",
    email: "mr.whiskaz@catnap.meow"
}

const {name, img}=person
console.log(img)