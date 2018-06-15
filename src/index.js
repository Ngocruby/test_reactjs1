import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// const content = 'HEllO World'
// const myClassName = 'container'
//const element = <div className = {myClassName}> {content} </div> // JSX- Js+XML
const props = {
    className: 'container',
    children: 'Hello',
}
const element =<div {...props} />

ReactDOM.render(element , document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
