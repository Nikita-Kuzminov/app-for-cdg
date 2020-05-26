import React from 'react';
import './App.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardIsFlipped: false,
        };
    }

    flipCard = () => {
        if (this.props.numberOfFlippedCards < 2) {

            if (this.props.numberOfFlippedCards === 0) {
                this.props.setFirstFlippedCard(this.props.imgName);
            } else {
                this.props.setSecondFlippedCard(this.props.imgName);
            }

            const currentState = this.state.cardIsFlipped;
            this.setState({ cardIsFlipped: !currentState });
            this.props.setNumberOfFlippedCards();
        }
    };

    render() {
        return (
            <div className="card" onClick={this.flipCard}>
                <img src="img/back/js-badge.svg"
                     alt="js"
                     className={this.state.cardIsFlipped ? 'img-hidden': null}/>

                <img src={this.props.imgSrc}
                     alt={this.props.imgName}
                     className={this.state.cardIsFlipped ? null : 'img-hidden'}/>

                {/*{this.props.cardImage(this.props.imgSrc, this.props.imgName)}*/}
            </div>
        );
    }
}


class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfFlippedCards: 0,
            firstFlippedCard: '',
            secondFlippedCard: '',
        };
    }

    checkCardEquals() {
        const isEqual = this.state.firstFlippedCard === this.state.secondFlippedCard;
        return isEqual;
    }

    setNumberOfFlippedCards = () => {
        const numberOfFlippedCards = this.state.numberOfFlippedCards;
        this.setState({ numberOfFlippedCards: numberOfFlippedCards + 1 });
        console.log(this.state.numberOfFlippedCards);
    };

    setFirstFlippedCard = (alt) => {
        this.setState({ firstFlippedCard: alt });
    };

    setSecondFlippedCard = (alt) => {
        this.setState({ secondFlippedCard: alt });
    };

    render() {
        const cards = [];
        const equalCardsNumber = 1;
        const imageContext = require.context('../public/img/front', false, /\.(png|jpe?g|svg)$/);
        const images = this.importAllImages(imageContext);

        for (const [imgName, imgSrc] of Object.entries(images)) {
            for (let i = 0; i <= equalCardsNumber; i++) {
                cards.push(
                    <Card cardImage={this.imageCard}
                          imgSrc={imgSrc}
                          imgName={imgName}
                          checkcardEquals={this.checkCardEquals}
                          setNumberOfFlippedCards={this.setNumberOfFlippedCards}
                          setFirstFlippedCard={this.setFirstFlippedCard}
                          setSecondFlippedCard={this.setSecondFlippedCard}
                          numberOfFlippedCards={this.state.numberOfFlippedCards}
                    />
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
        return <img src={imgSrc} alt={imgAlt} className="img-back img-hidden"/>
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

