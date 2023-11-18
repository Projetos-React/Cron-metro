import { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0);
    const [hours, setHours] = useState(0);
    const [condition, setCondition] = useState(false);

    var interval = 0;
    useEffect(() => {
        if (condition === true) {
            interval = setInterval(() => {
                setSecond(second + 1);
                if (second === 60) {
                    if (minute + 1 === 60) {
                        setHours(hours + 1);
                        setMinute(0);
                    } else {
                        setMinute(minute + 1);
                        setSecond(0);
                    }
                }
                if (minute === 60) {
                        setHours(hours + 1);
                        setMinute(0);
                        setSecond(0);
                }
                if (hours === 24) {
                    setHours(0);
                    setMinute(0);
                    setSecond(0);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [condition, second]);

    const stop = () => {
        setCondition(false);
    }
    const clear = () => {
        setMinute(0);
        setSecond(0);
        setHours(0);
        setCondition(false);
    }
    const iniciar = () => {
        setCondition(true);
    }
    return (
        <div className="temporization">
            <div className="conts">
                <div className="hours">
                    <p className="number">{hours < 10 ? "0" + hours : hours}</p>
                    <p>Hours</p>
                </div>
                <div className="minutes">
                    <p className="number">{minute < 10 ? "0" + minute : minute}</p>
                    <p>Minutes</p>
                </div>
                <div className="seconds">
                    <p className="number">{second < 10 ? "0" + second : second}</p>
                    <p>Seconds</p>
                </div>

            </div>
            <div className="buttons">
                <button onClick={iniciar}>Iniciar</button>
                <button onClick={stop}>Parar</button>
                <button onClick={clear}>Zerar</button>
            </div>
        </div>
    )
}