import { useState } from 'react';

const Card = ({card_type, img, color, data, currentState }) => {

    let hrs = data['timeframes'][currentState]['current']
    let last_hrs = data['timeframes'][currentState]['previous']

    let text = "Day"
    if (currentState === 'weekly') text = 'Week'
    if (currentState === 'monthly') text = 'Month'  

    return ( 
        <div className="card">
        <div className="card-top" style={{
                backgroundColor: color
            }}>
          <img src={ img } alt="" />
        </div>
        <div className="card-content" >
          <div className="card-label">
            <p>{ card_type }</p>
            <img src="images/icon-ellipsis.svg" alt=""/>
          </div>
          <div className="card-info">
            <h2>{ hrs }hrs</h2>
            <p>Last {text} - { last_hrs }hrs</p>
          </div>
        </div>
      </div>
     );
}
 
export default Card;
