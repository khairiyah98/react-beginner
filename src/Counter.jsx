import React, {useState} from "react";

// either of the 2 versions below can be used; they are equivalent

/* const Counter = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    return (
        <React.Fragment><p> You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button></React.Fragment>
    );
}; */

const Counter = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    };

    const handleDecrement = () => {
        setCount(count-1);
    };
    return (
        <React.Fragment><p> You clicked {count} times</p>
        <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button></React.Fragment>
    );
};

export default Counter;