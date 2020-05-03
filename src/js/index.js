import * as React from "react";

export default class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasFlippedCard: false,
            lockBoard: false,
            firstFlippedCard: null,
            secondFlippedCard: null
        }
    }

    flipCard = (event) => {
        if (this.lockBoard) return;
        if (!this.hasFlippedCard) this.state = {
            hasFlippedCard: true,
            firstFlippedCard: target
        };

        event.target.parentNode.classList.add('flip');
        const target = event.target.currentTarget;

        this.checkForMatch();
    };

    checkForMatch() {
        let isMatch = this.firstFlippedCard.dataset.framework === this.secondFlippedCard.dataset.framework;
        isMatch ? this.disableCard() : this.unFlipCards();
    }

    renderCard() {
    }

    disableCard() {
    }

    unFlipCards() {
        this.lockBoard = true;
        setTimeout(() => {
            this.firstFlippedCard.classList.remove('flip');
            this.secondFlippedCard.classList.remove('flip');

            this.lockBoard = false;
        }, 1500);

    }
}

class Game extends React.Component {
    render() {
        return (
        )
    }
}
