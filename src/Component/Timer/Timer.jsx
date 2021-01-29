import React from "react";
import s from './Timer.module.css'
import {useState, useEffect} from "react";

const Timer = () => {
    const [counter, setCounter] = useState(0);
    const [myInterval, setMyInterval] = useState(null);
    useEffect(() => {
        const timer = setInterval(() => setCounter((prevCounter) => prevCounter + 1), 1000);

        // return () => clearInterval(timer)
    }, []);
    return (
        <div className={s.Counter}>
            <span className={s.CounterValue}>{counter}</span>
        </div>
    );
};


export default Timer
