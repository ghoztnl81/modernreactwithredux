// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React component
const App = () => {
    const buttonText = { text: 'Click me!' };
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue', color: 'white'}}>
                {buttonText.text}
            </button>
        </div>
    );
}

// Take the React component and show it on screen.
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
