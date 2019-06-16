import Board from '../components/Board';
import {connect} from 'react-redux';
import {squareUpdate} from '../actions/square';

const mapDispatchToProps = (dispatch, props) => {
    return {
        clickSquare: (i) => {
            dispatch(squareUpdate(i))
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        squares: state.square.squares,
        xIsNext: state.square.xIsNext,
        finished: state.square.finished
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
