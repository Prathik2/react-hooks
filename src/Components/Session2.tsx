import React,{useState} from "react";

export const Session2: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const handleButtonClick = () => {
        setCount(count + 1);
    }
    console.log("count:", count);
    return(
        <>
        <h1>Session 2</h1>
        <div>Count: {count}</div>
        <div><button onClick={handleButtonClick}>Increment +</button></div>
        </>
    )
}