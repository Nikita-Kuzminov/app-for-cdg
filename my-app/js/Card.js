'use strict';

const c = React.createElement;

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { flipped: false };
    }

    render() {
        if (this.state.liked) {
            flipCard();
        }

        return c(
            "button",
            { onClick: () => this.setState({flipped: true}) },
            "Like"
        );
    }
}

const domContainer = document.querySelector("#Card_container");
ReactDOM.render(c(Card), domContainer);
