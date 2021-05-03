import React, { Component } from 'react'

import '../CSS/TictactoeComponent.css'

export default class TictactoeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            spaces: '',
            disabled: false,
            counter: 0,
            whoWin:{}
        }

        this.chance = this.chance.bind(this)
        this.restart = this.restart.bind(this)
    }

    chance(event) {
        console.log("Counter = " + this.state.counter)
        if (this.state.counter % 2 === 0) {
            event.target.innerHTML = "X"
            this.setState({ counter: this.state.counter + 1 })
            document.getElementById(event.target.id).disabled = true;
        }
        else {
            this.setState({ counter: this.state.counter + 1 })
            event.target.innerHTML = "O"
            document.getElementById(event.target.id).disabled = true;
        }

        if(this.state.counter===8)
        {
            this.result()
            console.log("FULL STATCK = ")
            document.getElementById("reset").disabled = false;
        }

        // console.log(event.target.id)
        //event.target.value = "X"

        // console.log(event.target.innerHTML)
        // console.log("moves = "+moves)
        // console.log("moves = "+moves.length)

    }

    restart(){
        console.log("reset")
        for(let i=1;i<10;i++){
            document.getElementById(i).innerHTML = ""
            document.getElementById(i).disabled = false;
        }
        this.setState({counter:0})
    }

    result(){
        console.log("IN PROCESS")
    }

    render() {
        return (
            <div className="tictactoe">
                <h1>Welcome to My game</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={this.chance} id="1" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="2" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="3" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.chance} id="4" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="5" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="6" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.chance} id="7" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="8" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                            <td><button onClick={this.chance} id="9" className="btn  btn-light waves-effect">{this.state.spaces}</button></td>
                        </tr>
                        <tr>
                            <td colSpan="3" align="center">
                                <button onClick={this.restart} id="reset" className="btn btn-success" >Restart</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}