import React from "react";
import '../assets/css/TicTacToe.css'
import Board from "./Board";

const TicTacToe = () => {
    return(
        <div className="container">
            <h1 className="title">Tic Tac Toe Game with <span>React</span></h1>
            <Board />
            
        </div>
    );
}
export default TicTacToe