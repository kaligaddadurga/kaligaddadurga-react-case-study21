import React from "react";

function AnalysisPanel({ onHighlight }) {
  // Coordinates should be adjusted per your PDF viewer size/scale.
  const highlightArea = {
    top: "420px",
    left: "120px",
    width: "350px",
    height: "40px"
  };

  return (
    <div className="analysisPanel">
      <h2>Analysis</h2>
      <p>
        No extraordinary or one-off items affecting EBITDA were reported in Maersk’s Q2 2025 results.
      </p>

      <p>
        The report explicitly notes that EBITDA improvements stemmed from operational performance—
        including volume growth, cost control, and margin improvement across Ocean, Logistics &amp; Services, and Terminals segments.
      </p>

      <p>
        Gains or losses from asset sales are shown separately under EBIT and not included in EBITDA.
        The gain on sale of non-current assets was USD 25 m in Q2 2025 — click reference{" "}
        <span className="refLink" onClick={() => onHighlight(highlightArea)}>[3]</span> to highlight it in the PDF.
      </p>
    </div>
  );
}

export default AnalysisPanel;