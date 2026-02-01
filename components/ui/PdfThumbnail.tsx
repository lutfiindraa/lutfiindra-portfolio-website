"use client";

import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set worker source - using local file
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

interface PdfThumbnailProps {
    pdfUrl: string;
    className?: string;
}

export const PdfThumbnail: React.FC<PdfThumbnailProps> = ({ pdfUrl, className }) => {
    const [numPages, setNumPages] = useState<number | null>(null);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <div className={`overflow-hidden relative ${className}`}>
            <Document
                file={pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                className="flex justify-center items-center h-full w-full"
                loading={<div className="animate-pulse bg-gray-200 w-full h-full" />}
                error={<div className="flex items-center justify-center h-full w-full bg-red-50 text-red-500 text-xs p-2 text-center">Failed to load PDF</div>}
            >
                <Page
                    pageNumber={1}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="w-full h-full"
                    width={400} // Set a reasonable base width, CSS will scale it
                />
            </Document>
        </div>
    );
};
