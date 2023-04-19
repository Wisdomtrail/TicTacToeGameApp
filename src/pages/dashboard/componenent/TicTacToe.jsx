import "../styles/TicTacToe.css";
import React, { useState } from "react";

function TicTacToe() {
  const [cell1Text, setCell1Text] = useState("");
  const [cell2Text, setCell2Text] = useState("");
  const [cell3Text, setCell3Text] = useState("");
  const [cell4Text, setCell4Text] = useState("");
  const [cell5Text, setCell5Text] = useState("");
  const [cell6Text, setCell6Text] = useState("");
  const [cell7Text, setCell7Text] = useState("");
  const [cell8Text, setCell8Text] = useState("");
  const [cell9Text, setCell9Text] = useState("");
  const [char, setChar] = useState("X");

  function changeChar(char) {
    setChar(char === "X" ? "O" : "X");
  }

  function checkForWin(char){
    if (
      (cell1Text === char && cell2Text === char && cell3Text === char) ||
      (cell4Text === char && cell5Text === char && cell6Text === char) ||
      (cell7Text === char && cell8Text === char && cell9Text === char) ||
      (cell1Text === char && cell4Text === char && cell7Text === char) ||
      (cell2Text === char && cell5Text === char && cell8Text === char) ||
      (cell3Text === char && cell6Text === char && cell9Text === char) ||
      (cell1Text === char && cell5Text === char && cell9Text === char) ||
      (cell3Text === char && cell5Text === char && cell7Text === char)
    ) {
      alert("Player "+char+" wins!");
      newGame();
    }
  }

  function newGame(){
    setCell1Text("");
    setCell2Text("");
    setCell3Text("");
    setCell4Text("");
    setCell5Text("");
    setCell6Text("");
    setCell7Text("");
    setCell8Text("");
    setCell9Text("");
  }

  function handleClick() {
    const input = document.getElementById("id");
    const num = input.value;

    
   
  
    if (num === "1" && cell1Text === "") {
      setCell1Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "2" && cell2Text === "") {
      setCell2Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "3" && cell3Text === "") {
      setCell3Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "4" && cell4Text === "") {
      setCell4Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "5" && cell5Text === "") {
      setCell5Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "6" && cell6Text === "") {
      setCell6Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "7" && cell7Text === "") {
      setCell7Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "8" && cell8Text === "") {
      setCell8Text(char);
      checkForWin(char);
      changeChar(char);
    } else if (num === "9" && cell9Text === "") {
      setCell9Text(char);
      checkForWin(char);
      changeChar(char);
    }
    
  }

    return (
      <center>
        <div className="MainConatiner">
          <div>
            TICTACTOE GAME
            <br />
            <div id='char'>
            player  {char} enter a number
            </div>
          </div>
          <div className="tictactoe">
            <div className="board">
              <div className="topNav">
                <div id="cell1">{cell1Text}</div>
                <div id="cell2">{cell2Text}</div>
                <div id="cell3">{cell3Text}</div>
              </div>
              <div className="secondNav">
                <div className="cell4">{cell4Text}</div>
                <div className="cell5">{cell5Text}</div>
                <div className="cell6">{cell6Text}</div>
              </div>
              <div className="lastNav">
                <div className="cell7">{cell7Text}</div>
                <div className="cell8">{cell8Text}</div>
                <div className="cell9">{cell9Text}</div>
              </div>
            </div>
          </div>
          <input type="text" id="id" />
          <button id="button" onClick={handleClick}>
            press
          </button>
          <button id="button" onClick={newGame}>
            New Game
          </button>
        </div>
      </center>
    );
  }   

export default TicTacToe;
