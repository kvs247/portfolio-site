import React from 'react';
// import { Button } from '@/components/ui/button';
import Button from '@mui/material/Button';
import { FileDown } from 'lucide-react';

const PDFLink = () => {
  const handleClick = () => {
    // Try multiple approaches to ensure the PDF opens correctly
    try {
      const pdfUrl = new URL('/resume.pdf', window.location.origin).href;
      const newWindow = window.open(pdfUrl, '_blank');

      // Fallback in case the window.open is blocked
      if (newWindow === null) {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
      // Final fallback
      window.open(`${window.location.origin}/resume.pdf`, '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="flex items-center gap-2"
    >
      <FileDown className="h-4 w-4" />
      View Resume
    </Button>
  );
};

export default PDFLink;