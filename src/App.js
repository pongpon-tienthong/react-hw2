import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    text: '',
    textLength: 0
  };

  onChangeInputHandler = (event) => {
    this.setState({
      text: event.target.value,
      textLength: event.target.value.length
    });
  }

  onClickCharHandler = (index) => {

    console.log('index', index);

    let text = this.state.text;
    text = text.slice(0, index) + text.slice(index + 1);

    this.setState({
      text: text,
      textLength: text.length
    });
  }

  render() {

    let chars = null;
    if (this.state.textLength > 0) {
      chars = (
        <div>
          {this.state.text.split('').map((char, index) => {
            return <Char
              char={char}
              key={index}
              clicked={() => { this.onClickCharHandler(index) }} />
          })}
        </div>);
    }

    return (
      <div className="App">
        <input type="text" onChange={this.onChangeInputHandler} value={this.state.text} />
        <p>Text Length: {this.state.textLength}</p>
        <Validation textLength={this.state.textLength} />
        {chars}
      </div>
    );
  }
}

export default App;
