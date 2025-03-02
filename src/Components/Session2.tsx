import React,{useState, useRef, useEffect} from "react";

// This session is on useRef
// useRef is similar to useState but does not trigger the rerendering
export const Session2: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const countRef = useRef<number>(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleButtonClick = () => {
        setCount(count + 1);
        countRef.current++;
        console.log("count:", count);
        console.log("ref value:", countRef);
    }

    useEffect(() => {
        inputRef.current?.focus();
    },[])
    
    return(
        <>
            <h1>Session 2</h1>
            <div>Count: {count}</div>
            <div><button onClick={handleButtonClick}>Increment +</button></div>
            <input ref={inputRef} type="text" placeholder="type.."></input>
        </>
    )
}