import * as types from '../constants';

export const squareUpdate = (i) => {
    return {type: types.UPDATE_SQUARE, ind: i};
}
