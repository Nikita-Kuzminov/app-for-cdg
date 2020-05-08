import './css/style.css'

class Card extends React.Component {
    render() {
        return (
            <div className="Card">

            </div>
        );
    }
}

class Board extends React.Component {
    render() {
        return (
            <Card />

        );
    }
}

ReactDOM.render(
    <Board />,
    document.getElementById('root')
);

