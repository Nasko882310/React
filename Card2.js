import React from "react"

export default function Card(props) {
     let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>} 
            <img src={props.item.coverImg} className="card--image" />
            <div className="card--stats">
                <img src="http://pluspng.com/img-png/yellow-stars-png-hd-pictures-of-cartoon-stars-hd-wallpapers-lovely-8029.png" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount2}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
             <div className="info">
            <p>{props.item.title}</p>
            <p><span className="bold">From {props.item.price}</span> / person</p></div>
            
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