import React from 'react'

const Quotes = ({ quotes, deleteQuote }) => {
    const quoteList = quotes.length ? (
        quotes.map(quote => {
            return (
                    <div className="quote collection-item" key={quote.id}>
                        <div className="text-title">{quote.title}</div>
                        <div className="text">"{quote.newQuote}"</div>
                        <div className="text">- {quote.author}</div>
                        <button id="delete" onClick={() => { deleteQuote(quote.id) }}>Delete quote</button>
                    </div>
            )
        })
    ) : (
            <p className="center">You have no quotes left for today, yay!</p>

        );
    return (
        <div className="quotes collection">
            {quoteList}
        </div>
    )
}

export default Quotes;