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

    // Split text by $ delimiter
    // Format: "Text $math$ text"
    const parts = text.split('$');
    
    parts.forEach((part, index) => {
      // Even index = regular text, Odd index = math
      if (index % 2 === 0) {
        if (part) {
          containerRef.current?.appendChild(document.createTextNode(part));
        }
      } else {
        const span = document.createElement('span');
        try {
          // Use renderToString instead of render to bypass strict mode checks (fixes "Quirks Mode" error)
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