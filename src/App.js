import React, { useState } from "react";
import PDFViewer from "./PDFViewer";
import AnalysisPanel from "./AnalysisPanel";
import "./App.css";

function App() {
  const [highlightArea, setHighlightArea] = useState(null);

  return (
    <div className="appContainer">
      <PDFViewer highlightArea={highlightArea} />
      <AnalysisPanel onHighlight={(area) => setHighlightArea(area)} />
    </div>
  );
}

export default App;
