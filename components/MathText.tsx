import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

const MathText: React.FC<MathTextProps> = ({ text, className = "", block = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = '';

    // Split text by $ delimiter to separate Math and Text
    // Format: "Text $math$ text"
    const parts = text.split('$');
    
    parts.forEach((part, index) => {
      // Even index = regular text (which might contain **bold**)
      // Odd index = LaTeX math
      if (index % 2 === 0) {
        if (part) {
          // Parse Markdown bold syntax: **bold**
          const subParts = part.split('**');
          subParts.forEach((subPart, subIndex) => {
            // Even subIndex = normal text
            // Odd subIndex = bold text
            if (subIndex % 2 === 0) {
              if (subPart) {
                containerRef.current?.appendChild(document.createTextNode(subPart));
              }
            } else {
              if (subPart) {
                const boldSpan = document.createElement('span');
                boldSpan.className = "font-bold text-blue-600 dark:text-blue-400"; // Emphasis color
                boldSpan.innerText = subPart;
                containerRef.current?.appendChild(boldSpan);
              }
            }
          });
        }
      } else {
        const span = document.createElement('span');
        try {
          // Use renderToString to bypass strict mode checks
          const html = katex.renderToString(part, { 
            throwOnError: false, 
            displayMode: block,
            output: 'html',
            strict: false
          });
          span.innerHTML = html;
        } catch (error) {
          console.error("KaTeX error:", error);
          span.innerText = part;
        }
        containerRef.current?.appendChild(span);
      }
    });
  }, [text, block]);

  return <span ref={containerRef} className={className} />;
};

export default MathText;