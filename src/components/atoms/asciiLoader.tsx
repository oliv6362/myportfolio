import React, { useState, useEffect } from 'react';
import { AsciiAnimation } from './asciiAnimation';

/**
 * AsciiLoader compontant that:
 * 1. Fetches a plain‐text ASCII animation from `/ascii.txt`, and splits the text on one or more blank lines.  
 * 5. Displays a “Loading animation…” placeholder until the frames are available.  
 * 6. Logs any fetch or parsing errors to the console.
 *
 * @returns {JSX.Element}  
 *   - While loading: a centered “Loading animation…” message  
 *   - Once loaded: a `<div>` wrapping `<AsciiAnimation>` with the parsed frames  
 *
 * @example
 * ```tsx
 * import { AsciiLoader } from './AsciiLoader';
 *
 * function App() {
 *   return (
 *     <main>
 *       <AsciiLoader />
 *     </main>
 *   );
 * }
 * ```
 */
export const AsciiLoader: React.FC = () => {
  const [frames, setFrames] = useState<string[]>([]);

  useEffect(() => {
    async function loadFrames() {
      try {
        const res = await fetch('/ascii.txt');
        const text = await res.text();
        const raw = text.split(/\r?\n[ \t]*\r?\n+/);
        const clean = raw.map(f => f.replace(/\r/g, '').trimEnd()).filter(f => f);
        setFrames(clean);
      } catch (err) {
        console.error('Failed to load ASCII frames', err);
      }
    }
    loadFrames();
  }, []);

  if (!frames.length) {
    return <div className="text-center text-gray-500">Loading animation…</div>;
  }

  return <div className="text-green-600"> <AsciiAnimation frames={frames} fps={12} loop /> </div>
};
