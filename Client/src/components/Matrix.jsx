import React, { useEffect, useRef } from 'react';

// --- Main App Component ---
export default function Matrix() {const containerRef = useRef(null);

  // This effect runs once when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.async = true;

    script.onload = () => {
      const gsap = window.gsap;
      if (!gsap) {
          console.error("GSAP library not found. The animation will not run.");
          return;
      }
      
      const container = containerRef.current;
      if (!container) return;

      const columns = container.querySelectorAll(".matrix-column");

      // Animate each column individually for a more robust and random effect
      columns.forEach(column => {
        gsap.fromTo(column,
          { yPercent: -100 }, // Start from above the screen
          {
            yPercent: 100, // Animate to below the screen
            duration: gsap.utils.random(4, 8),
            ease: "none",
            repeat: -1,
            delay: gsap.utils.random(0, 10) // Give each a random start time
          }
        );
      });
    };

    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Generate the columns dynamically for cleaner code
  const totalColumns = 50; // Adjust number of columns as needed
  const columnWidth = 24; // px, adjust as needed
  const gap = 8; 
  const matrixColumns = Array.from({ length: totalColumns }, (_, i) => (
    <div key={i} 
    className="matrix-column"
    style={{
      left: `calc(${i * (columnWidth + gap)}px)`,
      width: `${columnWidth}px`,}}
    ></div>
  ));

  return (
    <>
      <style>{`
        /* --- Custom CSS for Matrix Styling --- */
        .matrix-column {
            position: absolute;
            top: 0;
            width: 20px;
            height: 100%;
            font-size: 16px;
            line-height: 18px;
            font-weight: bold;
            white-space: nowrap;
        }

        .matrix-column::before {
            content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient( to bottom, #ffffff 0%, #ffffff 5%, #00ff41 10%, #00ff41 20%, #00dd33 30%, #00bb22 40%, #009911 50%, #007700 60%, #005500 70%, #003300 80%, rgba(0, 255, 65, 0.5) 90%, transparent 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            writing-mode: vertical-lr;
            letter-spacing: 1px;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }

        /* --- Positional and content variations using nth-child --- */
        ${Array.from({ length: 40 }, (_, i) => `.matrix-column:nth-child(${40}n + ${i + 1}) { left: ${i * 25}px; }`).join('\n')}

        .matrix-column:nth-child(odd):::before { content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン123456789"; }
        .matrix-column:nth-child(even):::before { content: "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォャュョッABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
        .matrix-column:nth-child(3n):::before { content: "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン0987654321"; }
        .matrix-column:nth-child(4n):::before { content: "ンヲロヨモホノトソコオレメヘネテセケエルユムフヌツスクウリミヒニチシキイワラヤマハナタサカア"; }
        .matrix-column:nth-child(5n):::before { content: "ガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポヴァィゥェォャュョッ!@#$%^&*()_+-=[]{}|;:,.<>?"; }

        @media (max-width: 768px) { .matrix-column { font-size: 14px; line-height: 16px; width: 18px; } }
        @media (max-width: 480px) { .matrix-column { font-size: 12px; line-height: 14px; width: 15px; } }
      `}</style>

      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-transparent">
        <div className="relative h-full w-full flex-shrink-0">
          {matrixColumns}
        </div>
      </div>
    </>
  );
}

