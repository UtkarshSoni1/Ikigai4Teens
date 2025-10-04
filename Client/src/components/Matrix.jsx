// import React, { useEffect, useRef } from 'react';

// // --- Main App Component ---
// export default function Matrix() {const containerRef = useRef(null);

//   // This effect runs once when the component mounts
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
//     script.async = true;

//     script.onload = () => {
//       const gsap = window.gsap;
//       if (!gsap) {
//           console.error("GSAP library not found. The animation will not run.");
//           return;
//       }
      
//       const container = containerRef.current;
//       if (!container) return;

//       const columns = container.querySelectorAll(".matrix-column");

//       // Animate each column individually for a more robust and random effect
//       columns.forEach(column => {
//         gsap.fromTo(column,
//           { yPercent: -100 }, // Start from above the screen
//           {
//             yPercent: 100, // Animate to below the screen
//             duration: gsap.utils.random(4, 8),
//             ease: "none",
//             repeat: -1,
//             delay: gsap.utils.random(0, 10) // Give each a random start time
//           }
//         );
//       });
//     };

//     document.body.appendChild(script);

//     // Cleanup function to remove the script when the component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []); // Empty dependency array ensures this runs only once on mount

//   // Generate the columns dynamically for cleaner code
//   const totalColumns = 50; // Adjust number of columns as needed
//   const columnWidth = 24; // px, adjust as needed
//   const gap = 8; 
//   const matrixColumns = Array.from({ length: totalColumns }, (_, i) => (
//     <div key={i} 
//     className="matrix-column"
//     style={{
//       left: `calc(${i * (columnWidth + gap)}px)`,
//       width: `${columnWidth}px`,}}
//     ></div>
//   ));

//   return (
//     <>
//       <style>{`
//         /* --- Custom CSS for Matrix Styling --- */
//         .matrix-column {
//             position: absolute;
//             top: 0;
//             width: 20px;
//             height: 100%;
//             font-size: 16px;
//             line-height: 18px;
//             font-weight: bold;
//             white-space: nowrap;
//         }

//         .matrix-column::before {
//             content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//             position: absolute;
//             top: 0;
//             left: 0;
//             background: linear-gradient( to bottom, #ffffff 0%, #ffffff 5%, #00ff41 10%, #00ff41 20%, #00dd33 30%, #00bb22 40%, #009911 50%, #007700 60%, #005500 70%, #003300 80%, rgba(0, 255, 65, 0.5) 90%, transparent 100%);
//             -webkit-background-clip: text;
//             background-clip: text;
//             -webkit-text-fill-color: transparent;
//             writing-mode: vertical-lr;
//             letter-spacing: 1px;
//             text-rendering: optimizeLegibility;
//             -webkit-font-smoothing: antialiased;
//             -moz-osx-font-smoothing: grayscale;
//         }

//         /* --- Positional and content variations using nth-child --- */
//         ${Array.from({ length: 40 }, (_, i) => `.matrix-column:nth-child(${40}n + ${i + 1}) { left: ${i * 25}px; }`).join('\n')}

//         .matrix-column:nth-child(odd):::before { content: "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン123456789"; }
//         .matrix-column:nth-child(even):::before { content: "ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポヴァィゥェォャュョッABCDEFGHIJKLMNOPQRSTUVWXYZ"; }
//         .matrix-column:nth-child(3n):::before { content: "アカサタナハマヤラワイキシチニヒミリウクスツヌフムユルエケセテネヘメレオコソトノホモヨロヲン0987654321"; }
//         .matrix-column:nth-child(4n):::before { content: "ンヲロヨモホノトソコオレメヘネテセケエルユムフヌツスクウリミヒニチシキイワラヤマハナタサカア"; }
//         .matrix-column:nth-child(5n):::before { content: "ガザダバパギジヂビピグズヅブプゲゼデベペゴゾドボポヴァィゥェォャュョッ!@#$%^&*()_+-=[]{}|;:,.<>?"; }

//         @media (max-width: 768px) { .matrix-column { font-size: 14px; line-height: 16px; width: 18px; } }
//         @media (max-width: 480px) { .matrix-column { font-size: 12px; line-height: 14px; width: 15px; } }
//       `}</style>

//       <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-transparent">
//         <div className="relative h-full w-full flex-shrink-0">
//           {matrixColumns}
//         </div>
//       </div>
//     </>
//   );
// }
import React from 'react';

export default function App() {
  return (
    <>
      <style>{`
        .container {
            --color-0: #fff;
            --color-1: #111;
            --color-2: #222;
            --color-3: #333;
            --color-4: #2e2e2e;
            --color-5: #d2b48c;
            --color-6: #b22222;
            --color-7: #871a1a;
            --color-8: #ff6347;
            --color-9: #ff3814;
            width: 100%;
            height: 100%;
            background-color: var(--color-1);
            background-image: linear-gradient( to top, var(--color-2) 5%, var(--color-1) 6%, var(--color-1) 7%, transparent 7% ), linear-gradient(to bottom, var(--color-1) 30%, transparent 80%), linear-gradient(to right, var(--color-2), var(--color-4) 5%, transparent 5%), linear-gradient( to right, transparent 6%, var(--color-2) 6%, var(--color-4) 9%, transparent 9% ), linear-gradient( to right, transparent 27%, var(--color-2) 27%, var(--color-4) 34%, transparent 34% ), linear-gradient( to right, transparent 51%, var(--color-2) 51%, var(--color-4) 57%, transparent 57% ), linear-gradient(to bottom, var(--color-1) 35%, transparent 35%), linear-gradient( to right, transparent 42%, var(--color-2) 42%, var(--color-4) 44%, transparent 44% ), linear-gradient( to right, transparent 45%, var(--color-2) 45%, var(--color-4) 47%, transparent 47% ), linear-gradient( to right, transparent 48%, var(--color-2) 48%, var(--color-4) 50%, transparent 50% ), linear-gradient( to right, transparent 87%, var(--color-2) 87%, var(--color-4) 91%, transparent 91% ), linear-gradient(to bottom, var(--color-1) 37.5%, transparent 37.5%), linear-gradient( to right, transparent 14%, var(--color-2) 14%, var(--color-4) 20%, transparent 20% ), linear-gradient(to bottom, var(--color-1) 40%, transparent 40%), linear-gradient( to right, transparent 10%, var(--color-2) 10%, var(--color-4) 13%, transparent 13% ), linear-gradient( to right, transparent 21%, var(--color-2) 21%, #1a1a1a 25%, transparent 25% ), linear-gradient( to right, transparent 58%, var(--color-2) 58%, var(--color-4) 64%, transparent 64% ), linear-gradient( to right, transparent 92%, var(--color-2) 92%, var(--color-4) 95%, transparent 95% ), linear-gradient(to bottom, var(--color-1) 48%, transparent 48%), linear-gradient( to right, transparent 96%, var(--color-2) 96%, #1a1a1a 99%, transparent 99% ), linear-gradient( to bottom, transparent 68.5%, transparent 76%, var(--color-1) 76%, var(--color-1) 77.5%, transparent 77.5%, transparent 86%, var(--color-1) 86%, var(--color-1) 87.5%, transparent 87.5% ), linear-gradient( to right, transparent 35%, var(--color-2) 35%, var(--color-4) 41%, transparent 41% ), linear-gradient(to bottom, var(--color-1) 68%, transparent 68%), linear-gradient( to right, transparent 78%, var(--color-3) 78%, var(--color-3) 80%, transparent 80%, transparent 82%, var(--color-3) 82%, var(--color-3) 83%, transparent 83% ), linear-gradient( to right, transparent 66%, var(--color-2) 66%, var(--color-4) 85%, transparent 85% );
            background-size: 300px 150px;
            background-position: center bottom;
        }

        .container:before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            inset: 0;
            background-color: var(--color-1);
            background-image: linear-gradient( to top, var(--color-5) 5%, var(--color-1) 6%, var(--color-1) 7%, transparent 7% ), linear-gradient(to bottom, var(--color-1) 30%, transparent 30%), linear-gradient(to right, var(--color-6), var(--color-7) 5%, transparent 5%), linear-gradient( to right, transparent 6%, var(--color-8) 6%, var(--color-9) 9%, transparent 9% ), linear-gradient( to right, transparent 27%, #556b2f 27%, #39481f 34%, transparent 34% ), linear-gradient( to right, transparent 51%, #fa8072 51%, #f85441 57%, transparent 57% ), linear-gradient(to bottom, var(--color-1) 35%, transparent 35%), linear-gradient( to right, transparent 42%, #008080 42%, #004d4d 44%, transparent 44% ), linear-gradient( to right, transparent 45%, #008080 45%, #004d4d 47%, transparent 47% ), linear-gradient( to right, transparent 48%, #008080 48%, #004d4d 50%, transparent 50% ), linear-gradient( to right, transparent 87%, #789 87%, #4f5d6a 91%, transparent 91% ), linear-gradient(to bottom, var(--color-1) 37.5%, transparent 37.5%), linear-gradient( to right, transparent 14%, #bdb76b 14%, #989244 20%, transparent 20% ), linear-gradient(to bottom, var(--color-1) 40%, transparent 40%), linear-gradient( to right, transparent 10%, #808000 10%, #4d4d00 13%, transparent 13% ), linear-gradient( to right, transparent 21%, #8b4513 21%, #5e2f0d 25%, transparent 25% ), linear-gradient( to right, transparent 58%, #8b4513 58%, #5e2f0d 64%, transparent 64% ), linear-gradient( to right, transparent 92%, #2f4f4f 92%, #1c2f2f 95%, transparent 95% ), linear-gradient(to bottom, var(--color-1) 48%, transparent 48%), linear-gradient( to right, transparent 96%, #2f4f4f 96%, #1c2f2f 99%, transparent 99% ), linear-gradient( to bottom, transparent 68.5%, transparent 76%, var(--color-1) 76%, var(--color-1) 77.5%, transparent 77.5%, transparent 86%, var(--color-1) 86%, var(--color-1) 87.5%, transparent 87.5% ), linear-gradient( to right, transparent 35%, #cd5c5c 35%, #bc3a3a 41%, transparent 41% ), linear-gradient(to bottom, var(--color-1) 68%, transparent 68%), linear-gradient( to right, transparent 78%, #bc8f8f 78%, #bc8f8f 80%, transparent 80%, transparent 82%, #bc8f8f 82%, #bc8f8f 83%, transparent 83% ), linear-gradient( to right, transparent 66%, #a52a2a 66%, #7c2020 85%, transparent 85% );
            background-size: 300px 150px;
            background-position: center bottom;
            clip-path: circle(150px at center center);
            animation: flashlight 20s ease infinite;
        }

        .container:after {
            content: "";
            width: 25px;
            height: 10px;
            position: absolute;
            left: calc(50% + 59px);
            bottom: 100px;
            background-repeat: no-repeat;
            background-image: radial-gradient(circle, #fff 50%, transparent 50%), radial-gradient(circle, #fff 50%, transparent 50%);
            background-size: 10px 10px;
            background-position: left center, right center;
            animation: eyes 20s infinite;
        }

        @keyframes flashlight {
            0% {
                clip-path: circle(150px at -25% 10%);
            }
            38% {
                clip-path: circle(150px at 60% 20%);
            }
            39% {
                opacity: 1;
                clip-path: circle(150px at 60% 86%);
            }
            40% {
                opacity: 0;
                clip-path: circle(150px at 60% 86%);
            }
            41% {
                opacity: 1;
                clip-path: circle(150px at 60% 86%);
            }
            42% {
                opacity: 0;
                clip-path: circle(150px at 60% 86%);
            }
            54% {
                opacity: 0;
                clip-path: circle(150px at 60% 86%);
            }
            55% {
                opacity: 1;
                clip-path: circle(150px at 60% 86%);
            }
            59% {
                opacity: 1;
                clip-path: circle(150px at 60% 86%);
            }
            64% {
                clip-path: circle(150px at 45% 78%);
            }
            68% {
                clip-path: circle(150px at 85% 89%);
            }
            72% {
                clip-path: circle(150px at 60% 86%);
            }
            74% {
                clip-path: circle(150px at 60% 86%);
            }
            100% {
                clip-path: circle(150px at 150% 50%);
            }
        }

        @keyframes eyes {
            0%,
            38% {
                opacity: 0;
            }
            39%,
            41% {
                opacity: 1;
                transform: scaleY(1);
            }
            40% {
                transform: scaleY(0);
                filter: none;
                background-image: radial-gradient(circle, #fff 50%, transparent 50%), radial-gradient(circle, #fff 50%, transparent 50%);
            }
            41% {
                transform: scaleY(1);
                background-image: radial-gradient(circle, #ff0000 50%, transparent 50%), radial-gradient(circle, #ff0000 50%, transparent 50%);
                filter: drop-shadow(0 0 4px #ff8686);
            }
            42%,
            100% {
                opacity: 0;
            }
        }
      `}</style>
      <div className="relative w-full h-full overflow-hidden bg-black">
          <div className="container"></div>
      </div>
    </>
  );
}

