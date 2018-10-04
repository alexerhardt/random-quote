import quotedata from './quotedata';

class QuoteModel 
{
    quotes;
    currentIndex;

    constructor()
    {
        this.currentIndex = 0;
        this.quotes = quotedata;
    }

    getRandomQuote()
    {
        this.currentIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[this.currentIndex];
    }

    getPreviousQuote()
    {
        this.currentIndex = currentIndex == 0 ? this.maxIndex : currentIndex - 1; 
        return this.quotes[this.currentIndex];
    }

    getNextQuote()
    {
        this.currentIndex = currentIndex == this.maxIndex ? 0 : currentIndex + 1;
        return this.quotes[this.currentIndex];
    }

    get maxIndex() {
        return this.quotes.length - 1;
    }
}

export default QuoteModel;