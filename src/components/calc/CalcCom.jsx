import { useState } from "react";
import "../../App.css";

const CalcCom = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleCalculate = () => {
        try {
            const calculatedResult = eval(input);
            setResult(calculatedResult);
        } catch (error) {
            setResult("Error");
        }
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                {["7", "8", "9", "/"].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                {["4", "5", "6", "*"].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                {["1", "2", "3", "-"].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                {["0", ".", "=", "+"].map((item) => (
                    <button key={item} onClick={() => item === "=" ? handleCalculate() : handleButtonClick(item)}>
                        {item}
                    </button>
                ))}
                <button className="clear" onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default CalcCom;
