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
        return (
            <div className="board">
                <Card img={this.imageCard}/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }

    imageCard() {
        return <img src="../public/img/angular.svg" alt="Angular"/>
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

