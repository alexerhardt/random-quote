"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quotes = [["Amazing quote 1", "Author 1"], ["Amazing quote 2", "Author 2"], ["Amazing quote 3", "Author 3"]];

var QuoteApp = function (_React$Component) {
    _inherits(QuoteApp, _React$Component);

    function QuoteApp(props) {
        _classCallCheck(this, QuoteApp);

        var _this = _possibleConstructorReturn(this, (QuoteApp.__proto__ || Object.getPrototypeOf(QuoteApp)).call(this, props));

        _this.getNewQuote = _this.getNewQuote.bind(_this);
        _this.state = {
            currentQuote: _this.randomizeQuote()
        };
        return _this;
    }

    _createClass(QuoteApp, [{
        key: "randomizeQuote",
        value: function randomizeQuote() {
            return quotes[Math.floor(Math.random() * quotes.length)];
        }
    }, {
        key: "getNewQuote",
        value: function getNewQuote() {
            this.setState(function () {
                return {
                    currentQuote: quotes[Math.floor(Math.random() * quotes.length)]
                };
            });
            // return quotes[Math.floor(Math.random() * quotes.length)];
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { id: "quote-box" },
                React.createElement(QuoteAndAuthor, { currentQuote: this.state.currentQuote }),
                React.createElement(TweetButton, null),
                React.createElement(GenerateQuote, { getNewQuote: this.getNewQuote })
            );
        }
    }]);

    return QuoteApp;
}(React.Component);

var QuoteAndAuthor = function (_React$Component2) {
    _inherits(QuoteAndAuthor, _React$Component2);

    function QuoteAndAuthor() {
        _classCallCheck(this, QuoteAndAuthor);

        return _possibleConstructorReturn(this, (QuoteAndAuthor.__proto__ || Object.getPrototypeOf(QuoteAndAuthor)).apply(this, arguments));
    }

    _createClass(QuoteAndAuthor, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "blockquote",
                    null,
                    "\"",
                    this.props.currentQuote[0],
                    "\""
                ),
                React.createElement(
                    "cite",
                    null,
                    "- ",
                    this.props.currentQuote[1]
                )
            );
        }
    }]);

    return QuoteAndAuthor;
}(React.Component);

var TweetButton = function (_React$Component3) {
    _inherits(TweetButton, _React$Component3);

    function TweetButton() {
        _classCallCheck(this, TweetButton);

        return _possibleConstructorReturn(this, (TweetButton.__proto__ || Object.getPrototypeOf(TweetButton)).apply(this, arguments));
    }

    _createClass(TweetButton, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "Tweet it!"
                )
            );
        }
    }]);

    return TweetButton;
}(React.Component);

var GenerateQuote = function (_React$Component4) {
    _inherits(GenerateQuote, _React$Component4);

    function GenerateQuote() {
        _classCallCheck(this, GenerateQuote);

        return _possibleConstructorReturn(this, (GenerateQuote.__proto__ || Object.getPrototypeOf(GenerateQuote)).apply(this, arguments));
    }

    _createClass(GenerateQuote, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.getNewQuote },
                    "New Quote"
                )
            );
        }
    }]);

    return GenerateQuote;
}(React.Component);

ReactDOM.render(React.createElement(QuoteApp, null), document.getElementById('app'));
