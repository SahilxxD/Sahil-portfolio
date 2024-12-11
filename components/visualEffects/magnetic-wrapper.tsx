import { FC, ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticWrapperProps {
    className?: string;
    children: ReactNode;
}

const MagneticWrapper: FC<MagneticWrapperProps> = ({ className, children }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const { width, height, top, left } = boundingRect;
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true);
        const touch = e.touches[0];
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const { width, height, top, left } = boundingRect;
            const middleX = touch.clientX - (left + width / 2);
            const middleY = touch.clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        const boundingRect = ref.current?.getBoundingClientRect();
        if (boundingRect) {
            const { width, height, top, left } = boundingRect;
            const middleX = touch.clientX - (left + width / 2);
            const middleY = touch.clientY - (top + height / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        reset();
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <div
            className={cn("relative", className)}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <motion.div
                animate={{
                    x,
                    y,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default MagneticWrapper;
