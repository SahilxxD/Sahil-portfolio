import { FC } from "react";
import Header from "./header";
import Video from "./video";


interface CardProps {
    title: string;
    video: string;
    active: boolean;
    tag: string
}
/*************  ✨ Codeium Command ⭐  *************/


const FeaturedCard: FC<CardProps> = ({ title, video, active, tag }) => {
    return (
        <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
            {/* Header */}
            <Header title={title} tag={tag} />
            {/* Body */}
            <div className="relative overflow-clip p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
                {/* Video */}
                <Video video={video} active={active} />
            </div>
        </div>
    )
}

export default FeaturedCard