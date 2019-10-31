import React from 'react';
import Dashboard from "./Dashboard" 

class Display extends React.Component{
    
        state = {
            inninng:1,
            homeTeamHasBall:true,
            homeScore:0,
            awayScore:0,
            fouls:0,
            strikes:0,
            outs:0,
            hit:false,
            balls:0
        }
    increaseBalls = (e) => {
            this.setState({balls:this.state.balls + 1}) 
        }
    changeInninng = (e) => {
        this.setState({inninng:this.state.inninng + 1}) 
    }
    increaseHomeScore = (e) => {
        this.setState({homeScore:this.state.homeScore + 1}) 
    }
    increaseAwayScore = (e) =>{
        this.setState({awayScore:this.state.awayScore + 1}) 
    }
    increaseStrikes = (e) =>{
        this.setState({strikes:this.state.strikes + 1}) 
    }
    increaseFouls = (e) =>{
        if (this.state.strikes < 2){
        this.setState({strikes:this.state.strikes + 1,
            fouls:this.state.fouls + 1}
            ) 
    }
    else{
        this.setState({fouls:this.state.fouls + 1})
    }
    }
    increaseOuts = (e) =>{
        this.setState({outs:this.state.outs + 1}) 
    }
    increaseHit = (e) => {
        this.setState({balls:0,
        strikes:0,
    fouls:0}) 
    }
    

    render(){
        
        if (this.state.strikes > 2){
            this.setState({
                strikes:0,
            outs:this.state.outs + 1,
            fouls:0,
            balls:0
            })}
             else if (this.state.outs == 3){
                this.setState({
                    strikes:0,
                outs:0,
                fouls:0
                })
            }
            else if (this.state.balls > 3){
                this.setState({
                    strikes:0,
                fouls:0,
                balls:0
                })
            }

            
        return(
            <div>
                <h1>{this.state.homeScore}</h1>
                <p>Home Team</p>
                <h1>{this.state.inninng}inninng</h1>
                <h1>{this.state.awayScore}</h1>
                <p>Away Team</p>
                <h1>{this.state.strikes} Strikes</h1>
                <h1>{this.state.fouls} Fouls</h1>
                <h1>{this.state.outs} Outs</h1>
                <h1>{this.state.balls} Balls</h1>
                
                <Dashboard increaseHit={this.increaseHit} increaseBalls={this.increaseBalls} changeInninng={this.changeInninng} changeAwayScore={this.changeAwayScore} changeHomeScore={this.changeHomeScore} increaseStrikes={this.increaseStrikes} increaseOuts={this.increaseOuts} increaseFouls={this.increaseFouls} />

            </div>
        )
    }
}
export default Display