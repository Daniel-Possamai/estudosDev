import React from "react"
import "./card.css"

export default function Card(props){
    
    return (
        <div className="card">

            {props.children}
            {/* <h3>{props.title}</h3>
            <p>esse é um txt</p> */}
        </div>
    )
}