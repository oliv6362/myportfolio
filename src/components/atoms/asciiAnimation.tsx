import React, { useState, useEffect } from 'react';

interface AsciiAnimationProps {
    frames: string[];
    fps?: number;
    loop?: boolean;
}

export const AsciiAnimation: React.FC<AsciiAnimationProps> = ({ frames, fps = 10, loop = true, }) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (frames.length <= 1) return;
        
        const interval = setInterval(() => {
            setIndex(i => {
                const next = i + 1;
                return next < frames.length ? next : loop ? 0 : i;
            });
        }, 1000 / fps);
        return () => clearInterval(interval);
    }, [frames.length, fps, loop]);

    return (
        <pre>
            {frames[index]}
        </pre>
    );
};
