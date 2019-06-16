import React from 'react';
import Square from './Square';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export const Board = (props) => {
    let winner = '';
    let status;
    if(props.finished) {
        winner = calculateWinner(props.squares);
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square
                    value={props.squares[0]}
                    onclick={() => props.clickSquare(0)}
                />
                <Square
                    value={props.squares[1]}
                    onclick={() => props.clickSquare(1)}
                />
                <Square
                    value={props.squares[2]}
                    onclick={() => props.clickSquare(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={props.squares[3]}
                    onclick={() => props.clickSquare(3)}
                />
                <Square
                    value={props.squares[4]}
                    onclick={() => props.clickSquare(4)}
                />
                <Square
                    value={props.squares[5]}
                    onclick={() => props.clickSquare(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={props.squares[6]}
                    onclick={() => props.clickSquare(6)}
                />
                <Square
                    value={props.squares[7]}
                    onclick={() => props.clickSquare(7)}
                />
                <Square
                    value={props.squares[8]}
                    onclick={() => props.clickSquare(8)}
                />
            </div>
        </div>
    );
}

export default Board;
