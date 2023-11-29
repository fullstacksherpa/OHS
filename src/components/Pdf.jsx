import React from 'react';
import pdfDoc from '../assets/Pdf.pdf'
import { Document, Page } from 'react-pdf';
const PDFViewer = () => {
 const pdfURL = pdfDoc;
return (
 <div>
 <Document file={pdfURL}>
 <Page pageNumber={1} />
 </Document>
 </div>
 );
};
export default PDFViewer;