import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.props;
    const { cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <>
        <div>
          <h2 data-testid="name-card">
            {cardName}
          </h2>
        </div>
        <div>
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div>
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div>
          <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        </div>
        <div>
          <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        </div>
        <div>
          <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        </div>
        <div>
          <p data-testid="rare-card">{ cardRare }</p>
        </div>
        <div>
          {cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3> }
        </div>
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
