import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//test1
const content = 'HEllO World'
const myClassName = 'behaelter'
const element1 = <div className = {myClassName}> {content} </div> // JSX- Js+XML
ReactDOM.render(element1 , document.getElementById('root1'));

//test2
const props = {
    className: 'container',
    children: 'Hello',
}
const a = <div {...props} /> // Props la properties cua 1 component
const element2 =<div {...props} />

ReactDOM.render(element2 , document.getElementById('root2'));

//test3
const rootElement = document.getElementById('root3')
const Message = props => <div> {props.children}</div> //Error funktion_syntax
const element = (
    <div className = "container">
        <Message> Hello World 
            <Message> Goodbye World </Message> 
            {/* <Message msg="Goodbye World"/> */}
        </Message>
        
    </div>
)
ReactDOM.render(element, rootElement)


//test 4 
function SayHello(props){
    return(
        <div>
            Hello {props.firstName}{props.lastName}!
        </div>
    )
}
ReactDOM.render(
    <SayHello firstName = {true}/>,
    document.getElementById('root4')
)
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
