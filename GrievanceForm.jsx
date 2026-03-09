import { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

function GrievanceForm() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitGrievance = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/analyze", {
        text: text
      });
      setResult(response.data);
    } catch (error) {
      alert("Error connecting to server");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Public Grievance Redressal</h2>

      <textarea
        rows="4"
        placeholder="Enter your grievance..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%" }}
      />

      <br /><br />

      <button onClick={submitGrievance}>
        {loading ? "Analyzing..." : "Submit"}
      </button>

      {result && <ResultCard result={result} />}
    </div>
  );
}

export default GrievanceForm;