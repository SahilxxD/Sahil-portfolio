import { featuredData } from "@/data";
import FeaturedCard from "../card/featured/featured-card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ExpandableFeatured() {
    const [hoverdIndex, setHoverdIndex] = useState<number | null>(null);
    const handleMouseEnter = (index: number) => { setHoverdIndex(index) };
    const handleMouseLeave = () => { setHoverdIndex(null) };

    // Handle touch events
    const handleTouchStart = (index: number) => {
        setHoverdIndex(index);
    };



    const handleTouchEnd = () => {
        setHoverdIndex(null); // Reset only when touch is fully completed
    };

    useEffect(() => {
        //document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);

        return () => {
            //document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (<div className="w-full grid lg:flex lg:justify-between lg:gap-x-4">
        {
            featuredData.slice(1).map((featured, i) => (
                <div key={i} className={cn("relative h-[640px] lg:w-1/3 mb-16 transition-all origin-center duration-300 ease-in-out"
                    , i === hoverdIndex ? "lg:w-[40%]" : "lg:w-[33.33%]"
                )}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave()}
                    onTouchStart={() => handleTouchStart(i)}
                >

                    <FeaturedCard
                        active={i === hoverdIndex}
                        title={featured.title}
                        tag={featured.tag}
                        video={featured.video} />
                </div>
            ))
        }
    </div>)
}