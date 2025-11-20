import React, { useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import './App.css';

// Set worker src for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`;

function PDFViewer({ highlightArea }) {
  const containerRef = useRef(null);

  useEffect(() => {
    // ensure overlay repositioning if needed in the future
  }, [highlightArea]);

  return (
    <div className="pdfWrapper" ref={containerRef}>
      <div className="pdfContainer">
        <Document file="/maersk.pdf">
          <Page pageNumber={3} scale={1.2} />
        </Document>

        {highlightArea && (
          <div
            className="highlightBox"
            style={{
              top: highlightArea.top,
              left: highlightArea.left,
              width: highlightArea.width,
              height: highlightArea.height
            }}
          />
        )}
      </div>
    </div>
  );
}

export default PDFViewer;