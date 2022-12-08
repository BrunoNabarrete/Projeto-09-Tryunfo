import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  render() {
    const { cheapCard } = this.props;
    return (
      <ul>
        {cheapCard.map((card) => {
          const {
            cardName: name,
            cardDescription: description,
            cardAttr1: attr1,
            cardAttr2: attr2,
            cardAttr3: attr3,
            cardImage: image,
            cardRare: rare,
            cardTrunfo: trunfo,
          } = card;
          return (
            <li key={ name }>
              <Card
                key={ name }
                cardName={ name }
                cardDescription={ description }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ image }
                cardRare={ rare }
                cardTrunfo={ trunfo }
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

Deck.propTypes = {
  cheapCard: PropTypes.string.isRequired,
};

export default Deck;
