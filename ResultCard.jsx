function ResultCard({ result }) {
  return (
    <div style={{
      marginTop: "20px",
      padding: "15px",
      border: "1px solid #ccc"
    }}>
      <h3>Analysis Result</h3>
      <p><b>Category:</b> {result.category}</p>
      <p><b>Priority:</b> {result.priority}</p>
      <p><b>Department:</b> {result.department}</p>
    </div>
  );
}

export default ResultCard;