import React from 'react';
import './App.css';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                {this.props.img(this.props.imgSrc, this.props.Name)}
            </div>
        );
    }
}

class Board extends React.Component {
    render() {
        const cards = [];
        const equalCardsNumber = 2;
        const imageContext = require.context('../public/img', false, /\.(png|jpe?g|svg)$/);
        const images = this.importAllImages(imageContext);

        for (const [imgName, imgSrc] of Object.entries(images)) {
            for (let i = 0; i <= equalCardsNumber; i++) {
                cards.push(
                    <Card img={this.imageCard()} imgName={imgName} imgSrc={imgSrc} />
                );
            }
        }

        return (
            <div className="board">
                {cards}
            </div>
        );
    }

    imageCard(imgSrc, imgAlt) {
        return <img src={imgSrc} alt={imgAlt}/>
    }

    importAllImages(context) {
        let images = {};
        context.keys().map((item, index) => { images[item.replace('./', '')] = context(item); });
        return images;
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

