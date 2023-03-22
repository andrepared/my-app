import React from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

// React component App, in this case is commonly called function component because there are other variants of
// React components
/**
2. The React Component App, does not recieve any function parameters yet
3. The Component returns code that resembles HTML which is called JSX.
 */

/**
variables defined in the functions body will be redefined everytime the function runs. 
*/
/**
JSX helper prevent injection attacks 

JSX Represent Objects 
The only way JSX works is because there are transformations happening behind the scense with NPM start.
Babel compiles jsx down to React.createElement calls()


React props helps pass variable information from one component to another

Using this operation, we’ve prevented the list/stories variable from polluting the global scope in the App component. Since stories is not used in the App component directly, but in one of its child components, we passed them as props to the List component. There, we can access it through the first function signature’s argument, called props.

React Props are used to pass information down the component tree; React state is used to make applications interactive. We’ll be able to change the application’s appearance by interacting with it.

React Props are used to pass information down the component tree; React state is used to make application 

 */
