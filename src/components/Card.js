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
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path class="icon" d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd"/></svg>
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
