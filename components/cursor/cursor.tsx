
"use client";
import { FC, useEffect, useRef } from "react";
import AnimatedCursor from "react-animated-cursor";

interface CursorProps {
    color: string
}

export const Cursor: FC<CursorProps> = ({ color }) => {
    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0];
            document.documentElement.style.setProperty("--cursor-x", `${touch.clientX}px`);
            document.documentElement.style.setProperty("--cursor-y", `${touch.clientY}px`);
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touch = e.touches[0];
            document.documentElement.style.setProperty("--cursor-x", `${touch.clientX}px`);
            document.documentElement.style.setProperty("--cursor-y", `${touch.clientY}px`);
        };

        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchmove", handleTouchMove);

        return () => {
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
                backgroundColor: color,
            }}
            outerStyle={{
                border: `1px solid ${color}`,
            }}
            clickables={["a", "button", "select", "input", ".link"]}
        />
    )
}