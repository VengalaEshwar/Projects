import { useState } from "react";
import Card from "../card/Card";
import "./Grid.css";
import isWinner from "../../helpers/isWinner";
export default function Grid({num}) {
    let [board,setBoard] = useState(Array(num).fill(""));
    let [turn,setTurn] = useState(true);
    let [winner ,setWinner ] = useState(null);
    let [count,setCount] = useState(0);
    let onPlay = (index,clicable)=>{
        if(!clicable || board[index]!="")
            return;
        board[index]=turn?"X":"O";
        setCount(count+1);
        setBoard(board);
        setWinner(isWinner(board,board[index]));
        setTurn(!turn)

    };
    const reset =()=>{
        setBoard(Array(num).fill(""));
        setWinner(null);
        setTurn(true);
        setCount(0);
    }
    return (
        <>
       { !winner && <div className="turn">Current turn {turn?"X":"O"}</div>}
        <div className="grid">
        {board.map((ele,ind)=><Card index={ind} key={ind} onPlay={onPlay} symbol={ele} clicable={winner==null}/>)}
        </div>
        {
            count==9 && !winner && <div className="turn">Draw Match
            <br></br><button onClick={()=>{reset()}}>Reset</button></div>
            }
    
            {winner && <div className="turn">winner is {!turn?"X":"O"}
                <br></br><button onClick={()=>{reset()}}>Reset</button></div>}
        </>
    )
}