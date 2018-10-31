import React from 'react';
import ReactDOM from 'react-dom';
import QuoteApp from './components/QuoteApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

/**
 * Render the app
 */
ReactDOM.render(<QuoteApp />, document.getElementById('app'));