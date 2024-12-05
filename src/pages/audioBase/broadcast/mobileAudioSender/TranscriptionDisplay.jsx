import React from "react";

const TranscriptionDisplay = ({ transcription }) => {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif",
        color: 'red', 
        textAlign:'center'
      }}
    >
      <h3>Transcription:</h3>
      <p style={{ whiteSpace: "pre-wrap", fontSize: "16px",  }}>
        {transcription || "No transcription available"}
      </p>
    </div>
  );
};

export default TranscriptionDisplay;
