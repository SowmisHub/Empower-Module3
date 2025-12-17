import { useState } from "react";

function Calculator() {
  // state for inputs
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // state for selected operation
  const [operation, setOperation] = useState("add");

  // state to store all results
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    // convert string to number
    const a = Number(num1);
    const b = Number(num2);

    let result;

    if (operation === "add") {
      result = a + b;
    } else if (operation === "subtract") {
      result = a - b;
    } else if (operation === "multiply") {
      result = a * b;
    }

    // add new result without removing old ones
    setResults([...results, result]);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Basic Calculator</h2>

      {/* Input 1 */}
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      {/* Input 2 */}
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      {/* Dropdown */}
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <br /><br />

      {/* Button */}
      <button onClick={handleCalculate}>
        Perform Action
      </button>

      <hr />

      {/* Results */}
      <h3>Results:</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
