import React from 'react';
import logo from './logo.svg';
import BoardContainer from './containers/Board';
import './App.css';
import './css/style.css';


function App() {
  return (
      <div className="game">
        <div className="game-board">
          <BoardContainer />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
  );
}

export default App;
