import React from 'react';

const Dashboard = (props) => {
    
    return (
        <div>
        <button onClick={props.changeHomeScore}>Increase Home Score</button>
        <button onClick={props.changeAwayScore}>Increase Away Score</button>
        <button onClick={props.changeInninng}>Increase Inninngs</button>
        <button onClick={props.increaseStrikes}>Strike</button>
        <button onClick={props.increaseFouls}>Foul</button>
        <button onClick={props.increaseOuts}>Increase Out</button>
        <button onClick={props.increaseBalls}>Ball</button>
        <button onClick={props.increaseHit}>Hit</button>
        </div>
    )
}

export default Dashboard