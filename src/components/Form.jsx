import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.props;
    const { cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo } = this.props;
    const { isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    console.log(hasTrunfo);
    // console.log(cardTrunfo);
    return (
      <div>
        Form
        <form>
          <label htmlFor="cardName">
            Nome do card
            <input
              type="text"
              name="cardName"
              id="cardName"
              value={ cardName }
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="descriptionCard">
            Descrição da carta
            <textarea
              name="cardDescription"
              id="descriptionCard"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="firstPower">
            Atributo 01
            <input
              type="number"
              id="firstPower"
              name="cardAttr1"
              maxLength={ 100 }
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="secondPower">
            Atributo 02
            <input
              type="number"
              id="secondPower"
              name="cardAttr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="thirdPower">
            Atributo 03
            <input
              type="number"
              name="cardAttr3"
              id="thirdPower"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="cardImage"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rareSelect">
            Raridade
            <select
              name="cardRare"
              id="rareSelect"
              value={ cardRare }
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option>
                normal
              </option>
              <option>
                raro
              </option>
              <option>
                muito raro
              </option>
            </select>
          </label>
          <label htmlFor="trunfoInput">
            Super Trunfo
            { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
              type="checkbox"
              name="cardTrunfo"
              id="trunfoInput"
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              onChange={ onInputChange }
            /> }
          </label>
          <button
            type="submit"
            id="saveButton"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
