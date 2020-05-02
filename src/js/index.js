import React from "react";
import '../css/style.css';

export default class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasFlippedCard: false,
            lockBoard: false,
            firstCard: null,
            secondCard: null
        };
    }

    flipCard = (event) => {
        if (this.state.lockBoard) return;
        if (this === this.state.firstCard) return;

        debugger
        event.target.classList.add('flip');
        const target = event.currentTarget;

        if (!this.state.hasFlippedCard) {

            debugger

            this.setState({
                hasFlippedCard: true,
                firstCard: target
            });

            debugger

            return;
        }

        debugger

        this.setState(
            {
                secondCard: target
            },
            this.checkForMatch
        );
    }

    checkForMatch() {
        const isMatch = this.state.firstCard.dataset.framework === this.state.secondCard.dataset.framework;
        isMatch ? this.disableCards() : this.unflipCards();
    }

    disableCards() {
        debugger

        this.state.firstCard.onclick(null);
        this.state.secondCard.onclick(null);

        this.resetBoard();
    }

    unflipCards() {
        this.setState({
            lockBoard: true
        });

        setTimeout(() => {
            this.state.firstCard.classList.remove('flip');
            this.state.secondCard.classList.remove('flip');

            this.resetBoard();
        }, 1500);
    }

    resetBoard = () => {
        this.setState({
            hasFlippedCard: false,
            lockBoard: false,
            firstCard: null,
            secondCard: null
        });
    }

    renderCard(src, dataFramework) {
        return <Card imgSrc={src}
                     imgAlt={dataFramework}
                     flipCard={this.flipCard}
                     dataFramework={dataFramework}/>;
    }

    shuffleCards() {
        const cards = React.Children.toArray(this.props.children);
        debugger
        console.log(cards)
        // cards.forEach(card => {
        //     let randomPos = Math.floor(Math.random() * 12);
        //     card.style.order = randomPos;
        // });
    }

    componentDidMount() {
        this.shuffleCards();
    }

    render() {
        return (
            <section className="memory-game">
                {this.renderCard('img/react.svg', 'React')}
                {this.renderCard('img/react.svg', 'React')}
                {this.renderCard('img/angular.svg', 'Angular')}
                {this.renderCard('img/angular.svg', 'Angular')}
                {this.renderCard('img/ember.svg', 'Ember')}
                {this.renderCard('img/ember.svg', 'Ember')}
                {this.renderCard('img/vue.svg', 'Vue')}
                {this.renderCard('img/vue.svg', 'Vue')}
                {this.renderCard('img/backbone.svg', 'Backbone')}
                {this.renderCard('img/backbone.svg', 'Backbone')}
                {this.renderCard('img/aurelia.svg', 'Aurelia')}
                {this.renderCard('img/aurelia.svg', 'Aurelia')}
                {this.renderCard('img/octocat.svg', 'Octocat')}
                {this.renderCard('img/octocat.svg', 'Octocat')}
                {this.renderCard('img/html.svg', 'Html')}
                {this.renderCard('img/html.svg', 'Html')}
            </section>
        );
    }
}

class Card extends React.Component {

    render() {
        return (
            <div className="memory-card" onClick={this.props.flipCard} data-framework={this.props.dataFramework}>
                <img src={this.props.imgSrc} alt={this.props.imgAlt} className="front-face"/>
                <img src="img/js-badge.svg" alt="Memory card" className="back-face"/>
            </div>
        );
    }
}


// Все работающие функции до добавления реакта

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

cards.forEach(card => card.addEventListener("click", flipCard));
