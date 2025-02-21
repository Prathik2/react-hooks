import React,{ useState, useMemo } from 'react';

//Session for useMemo
export const Session1: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [input, setInput] = useState<number>();
    // Here if there is no useMemo, then squareNumber() will not execute whenever the count gets incremented.
    const squaredNumber: number = useMemo(() => squareNumber(input),[input])

    const handleIncrementClick = () => {
        setCount(count + 1);
    }

    const setInputValue = (event) => {
        setInput(event.target.value);
    };

    return (
        <div className="session1-root-div">
            <div style={{color: "white"}}>Count: {count}</div>
            <div><button onClick={handleIncrementClick}>Increment</button></div>
            <div style={{color: "white"}}><label>Give number</label><input type="number" value={input} onChange={setInputValue} /></div>
            <p style={{color: "white"}}>Squared Value: {squaredNumber === undefined || 0  ? 0 : squaredNumber}</p>
        </div>
    )
}

function squareNumber(input) {
    console.log("Calculating...");
    return input * input;
}

