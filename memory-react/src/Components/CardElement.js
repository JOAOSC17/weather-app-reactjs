import React from 'react';
import game from '../Game/game'

const CardElement = (props) => {
    return (
        <div id={props.id} className="card flip">
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
