import React from "react"
import "./card.css"

const cardsTitle = ['Titulo 1', 'Titulo 2', 'Titulo 3']

export default function Card(props) {
    return (
        // <div className="card">
        
        //     {props.children}
        //     {/* <h3>{props.title}</h3>
        //     <p>esse é um txt</p> */}
        // </div>
        
        <div>
            <h2>Meus Cards</h2>
            {cardsTitle.map((card, index) => {
                return (
                    <div key={index}>
                        <h3>{card}</h3>
                    </div>
                )
            })}



        </div>
    )
}