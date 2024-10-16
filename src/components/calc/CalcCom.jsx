import { useState } from "react";
import "../../App.css";

const CalcCom = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const buttonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const Calculate = () => {
        try {
            const calResult = eval(input);
            setResult(calResult);
        } catch (error) {
            setResult("Error");
        }
    };

    const Clear = () => {
        setInput("");
        setResult("");
    };

    return (
        <>
            <div className="calculator">
                <div className="display">
                    <div className="input">{input}</div>
                    <div className="result">{result}</div>
                </div>
                <div className="buttons">
                    {["7", "8", "9", "/"].map((item) => (<button key={item} onClick={() => buttonClick(item)}>{item}</button>))}
                    {["4", "5", "6", "*"].map((item) => (<button key={item} onClick={() => buttonClick(item)}>{item}</button>))}
                    {["1", "2", "3", "-"].map((item) => (<button key={item} onClick={() => buttonClick(item)}>{item}</button>))}
                    {["0", ".", "=", "+"].map((item) => (<button key={item} onClick={() => item === "=" ? Calculate() : buttonClick(item)}>{item}</button>))}
                    <button className="clear" onClick={Clear}>C</button>
                </div>
            </div>
        </>
    );
};

export default CalcCom;