import React, { Component } from 'react'

export class AddQuote extends Component {
    state = {
        content: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuote(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2 className="center">Add new quote:</h2>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" onChange={this.handleChange} value={this.state.content} required/>
                    <label htmlFor="newQuote">Quote:</label>
                    <input type="text" id="newQuote" onChange={this.handleChange} value={this.state.content} required/>
                    <label htmlFor="author">Author:</label>
                    <input type="text" id="author" onChange={this.handleChange} value={this.state.content} required/>
                    <button id="submit" className="right">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddQuote;
