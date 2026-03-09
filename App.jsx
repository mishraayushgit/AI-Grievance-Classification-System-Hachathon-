import { useState } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await  axios.post("http://localhost:5000/analyze", {
  text: text
});

      setResult(response.data);
    } catch (error) {
      alert("Error connecting to backend");
    }
  };

  return (
    <div>
      <h2>Grievance Analysis</h2>

      <textarea
        placeholder="Enter your grievance"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}>Submit</button>

      {result && (
        <div style={{ marginTop: "20px" }}>
          <h3>Analysis Result</h3>
          <p><b>Category:</b> {result.category}</p>
          <p><b>Priority:</b> {result.priority}</p>
          <p><b>Department:</b> {result.department}</p>
        </div>
      )}
    </div>
  );
}

export default App;
