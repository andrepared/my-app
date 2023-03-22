import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npm start would transform this file before it displays it in the browser. For instance, the import CSS statement would be deemed invalid if it was just purely javascript, but with the react features, it would transform that CSS into javascript
// it tells the npm start that it should be injected into the page. 
// HTML code inside of a javascript files, only because it is transformed into the file. It's purpose is to write clean and easy to read code. 
// Importing react DOM, but it's pretty much the react library
// create root is the main hook needed to create the interface that we are implementing. calling the main entry point, or the main hook to call the main user interface i am about to build with React
// CreateRoot stores where the application should be injected, by called the createRoot method from the React DOM object. And then we're called what should be rendered on that root element. On that div that we selected. 
// What is that App? use JSX to use the app component, which in the end we render that element in the root