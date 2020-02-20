import React, { Component } from 'react';
import Quotes from './Quotes'
import AddQuote from './AddQuote'
import './App.scss';

export class App extends Component {
  state = {
    quotes: [
      {id: 1, title: 'Going through hell', newQuote: 'If you are going through hell, keep going', author: 'Winston Churchill'},
      {id: 2, title: 'Rainbow', newQuote: 'The way I see it, if you want the rainbow, you gotta put up with the rain', author: 'Dolly Parton'},
      {id: 3, title: 'Fake it', newQuote: 'Fake it till you make it', author: 'Mary Kay Ash'},
      {id: 4, title: 'Nothing is impossible', newQuote: 'People say nothing is impossible, but I do nothing every day', author: 'A. A. Milne'},
      {id: 5, title: 'Forces of evil', newQuote: 'May the forces of evil become confused on the way to your house', author: 'George Carlin'}
    ]
  }
  deleteQuote = (id) => {
    const quotes = this.state.quotes.filter(quote => {
      return quote.id !== id
    });
    this.setState({
      quotes
    })
  }
  addQuote = (quote) => {
    quote.id = Math.random();
    let quotes = [...this.state.quotes, quote];
    this.setState({
      quotes
    })
  }
  render() {
    return (
      <div className="quotes-app container">
        <h1 className="center">Your daily quotes</h1>
        <Quotes quotes={this.state.quotes} deleteQuote={this.deleteQuote} className="quoteSection" />
        <AddQuote addQuote={this.addQuote} />
      </div>
    )
  }
}

export default App;
