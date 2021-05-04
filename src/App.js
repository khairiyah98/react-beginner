import React , { useState } from "react";
import './App.css';
//import Employee from "./Employee";
//import Documentation from "./Documentation";
//import Counter from "./Counter";
//import TodoList from "./TodoList";
import Example from "./UseEffectExample";
import ConditionalRender from "./ConditionalRender";


/* const employeeInfo = [
    {
        firstName: "Jack",
        lastName: "Smith",
        age : "23",
        employeeId : "ABC"
    },
    {
        firstName: "Stephanie",
        lastName: "Alice",
        age : "21",
        employeeId : "DEF"

    },
    {
        firstName: "Alias",
        lastName: "Kadir",
        age : "25",
        employeeId: "HIJ"
    }
]; */

function App() {

    //const headerText = "Hello Youtube";
    //const [loggedIn, setLoggedIn] = useState(false);

    return ( <div className = "App" >
        <header className="App-header">
            <h3> This line is from App file by default </h3>
            <Example/>
{/*             {employeeInfo.map((employee) => {
                return <Employee key={employee.employeeId} {...employee} />;
                })} */}
        </header>
{/*         <Documentation/>
        <Counter/>
        <p > { headerText } </p >  */}
{/*         <h1> Welcome to the app! </h1>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Log in"}
      </button>
      {loggedIn ? (
        <h1> Hello, Anthony! </h1>
      ) : (
        <div>
          <h2> Please log in to continue </h2>
        </div>
      )} */}
        </div>
    );
}

export default App;
