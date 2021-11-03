const MainCard = ({state, setCurrentState}) => {

    const handleClick = (new_state)=>{
        setCurrentState(new_state)
    }
    return ( 
        <div className="main-card">
            <div className="main-card-top">
                <img src="images/image-jeremy.png" alt=""/>
                <div className="main-card-info">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
                
            </div>
            <div className="main-card-bottom">
                <p onClick={()=> handleClick('daily')} 
                    className={state === 'daily' ? 'selected-text' : null}>Daily</p>
                <p onClick={()=> handleClick('weekly')}
                    className={state === 'weekly' ? 'selected-text' : null}>Weekly</p>
                <p onClick={()=> handleClick('monthly')} 
                    className={state === 'monthly' ? 'selected-text' : null}>Monthly</p>
            </div>
      </div>
     );
}
 
export default MainCard;