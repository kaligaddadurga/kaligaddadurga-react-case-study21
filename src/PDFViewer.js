import React, { useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

function PDFViewer({ highlightArea }) {
  const containerRef = useRef(null);

  useEffect(() => {}, [highlightArea]);

  const pdfFile = "/maersk.pdf";

  return (
    <div className="pdfWrapper" ref={containerRef}>
      <div className="pdfContainer" style={{ position: "relative" }}>
        <Document file={pdfFile}>
          <Page pageNumber={3} scale={1.2} />
        </Document>
        {highlightArea && (
          <div
            className="highlightBox"
            style={{
              top: highlightArea.top,
              left: highlightArea.left,
              width: highlightArea.width,
              height: highlightArea.height,
              position: "absolute",
              border: "2px solid red"
            }}
          />
        )}
      </div>
    </div>
  );
}

export default PDFViewer;
