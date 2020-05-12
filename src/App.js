import React from 'react';
import './App.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {this.props.img()}
            </div>
        );
    }
}

class Board extends React.Component {
    render() {
        const cards = [];

        for (let i = 0; i <= 15; i++) {
            cards.push(<Card img={this.imageCard} />)
        }

        return (
            <div className="board">
                {cards}
            </div>
        );
    }

    imageCard() {
        return <img src="img/angular.svg" alt="Angular"/>
    }
}


function App() {
  return (
    <div className="App">
      <Board/>
    </div>
  );
}

export default App;

