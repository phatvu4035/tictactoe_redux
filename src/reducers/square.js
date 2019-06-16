import * as types from '../constants';
import {calculateWinner} from '../helpers/functions';
const originalState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    finished: null,
}



export const square = (state= originalState, action) => {
    switch (action.type) {
        case types.UPDATE_SQUARE:
            let ind = action.ind;
            let squares = state.squares.slice();
            let xIsNext = state.xIsNext;
            let finished = state.finished;
            if(calculateWinner(squares) || squares[ind]) {
                finished = true;
                return {
                    ...state, squares: squares, xIsNext: !xIsNext, finished: finished
                }
            }
            squares[ind] = state.xIsNext ? 'X' : 'O';
            return {
                ...state, squares: squares, xIsNext: !xIsNext, finished: finished
            }
        default:
            return state;

    }
}
