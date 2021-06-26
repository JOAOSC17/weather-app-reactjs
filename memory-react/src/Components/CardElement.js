import React from 'react';

const CardElement = (props) => {
    return (
        <div onClick={()=> {props.handleFlip(props.card)}} id={props.id} className={`card ${props.card.flipped? "flip" : ""}`}>
            <div className="card_front">
                <img className="icon" src={`assets/images/${props.card.icon}.png`} alt={props.card.icon}/>
            </div>
            <div className="card_back">
                {"</>"}
            </div>
            
        </div>
    )
}

export default CardElement;
