import React, { Component } from 'react';
import './GameCard.css';

class GameCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.game.image} />
                <div>
                    {this.props.game.title}
                </div>
            </div>
        );
    }
}

export default GameCard;
