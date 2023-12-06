import React, { useState } from 'react';
import Tile from './Tile';
import '../assets/css/TicTacToe.css'
import ResetButton from "./ResetButton";


// const Board = () => {
//     const tiles = Array(9).fill(null)
//     // const [isStart, setIsStart] = useState(false)
//     window.isStart = false;

//     return (
//         <div className='board grid gap-2 grid-cols-3'>
//             {tiles.map((tile, index) => {
//                 return <Tile key={index} isStart={window.isStart} />;
//             })}
//         </div>
//     );
// };

const Board = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [isNext, setIsNExt] = useState(true)

    function handleClick(i) {
        if(tiles[i] || calculateWinner(tiles)) {
            return;
        }
        const nextTiles = tiles.slice();
        if(isNext){
            nextTiles[i] = 'X'
        }
        else {
            nextTiles[i] = 'O'
        }
        setTiles(nextTiles);
        setIsNExt(!isNext)
      }

      function calculateWinner(tiles) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return tiles[a];
          }
        }
        return null;
      }

      const winner = calculateWinner(tiles)
      let status;
      if(winner) {
        status = "winner:" + winner
      } else {
        status = "sonraki oyuncu: " + ( isNext ? 'X': 'O');
      }

      const resetGame = () => {
        setTiles(Array(9).fill(null))
        setIsNExt(true)
      }
    return(
        <div className='flex items-center justify-center flex-col'>
            <div className='status flex items-center justify-center'>{status}</div>
            <div className='board grid gap-2 grid-cols-3'>
                <Tile value={tiles[0]} handleClick= {() =>handleClick(0)}/>
                <Tile value={tiles[1]} handleClick= {() =>handleClick(1)}/>
                <Tile value={tiles[2]} handleClick= {() =>handleClick(2)}/>
                <Tile value={tiles[3]} handleClick= {() =>handleClick(3)}/>
                <Tile value={tiles[4]} handleClick= {() =>handleClick(4)}/>
                <Tile value={tiles[5]} handleClick= {() =>handleClick(5)}/>
                <Tile value={tiles[6]} handleClick= {() =>handleClick(6)}/>
                <Tile value={tiles[7]} handleClick= {() =>handleClick(7)}/>
                <Tile value={tiles[8]} handleClick= {() =>handleClick(8)}/>
            </div>
            <ResetButton resetGame={resetGame}/>
        </div>
    )
}

export default Board