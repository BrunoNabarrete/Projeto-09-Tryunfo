import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cheapCard: [],
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const validationNumber = 90;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if ((name === 'cardAttr1' || name === 'cardAttr2' || name === 'cardAttr3')
    && (+target.value > validationNumber || +target.value < 0)) {
      return this.setState({
        isSaveButtonDisabled: true,
      });
    }
    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardImage, cardRare } = this.state;
      const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
      const numberValid = 210;
      const newStatusButton = cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || cardRare === ''
      || (+cardAttr1 + +cardAttr2 + +cardAttr3) > numberValid;
      this.setState({
        isSaveButtonDisabled: newStatusButton,
      });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.state;
    const { cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;

    const objInfo = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      hasTrunfo,
    };

    this.setState((prevState) => ({
      cheapCard: [...prevState.cheapCard, objInfo],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
    console.log(cardTrunfo);
    if (cardTrunfo) this.setState({ hasTrunfo: true });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cheapCard,
    } = this.state;
    const { isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo.</h1>
        <Form
          cardTrunfo={ cardTrunfo }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardTrunfo={ cardTrunfo }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
        />
        <Deck
          cheapCard={ cheapCard }
        />
      </div>
    );
  }
}

export default App;
