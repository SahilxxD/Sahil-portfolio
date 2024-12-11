import { FC } from "react";
import SvgCurve from "../visualEffects/svg-curve";
import { HeadingAnimatedSvg } from "./heading-animated-svg";

interface HeadingProps {
    number: string;
    title1: string;
    title2: string;
}

const Heading: FC<HeadingProps> = ({ number, title1, title2 }) => {
    return (
        <div className="relative my-10 px-8 z-20">
            <div className="outline-none flex flex-col justify-start shrink-0 opacity-5 transform -top-16 2xl:-top-14 w-[71px] flex-none h-auto left-4 lg:left-12 absolute z-[-1] whitespace-pre">
                <h2 className="font-pixel text-[100px] text-center text-primary-foreground relative">
                    <span className="bottom_fade bg-clip-text text-transparent p-4">{number}</span>
                </h2>
            </div>
            {/* hidden text wrapper */}
            <div className=" flex items-center flex-nowrap min-h-min overflow-hidden p-0 w-full font-oswald">
                <p className="text-[12vw] lg:text-[12vw] leading-[100%] text-primary-foreground mr-3">{title1}</p>
                <HeadingAnimatedSvg text="LEAR ABOUT OUR FEATURED PROJECT" />
                <p className="text-[12vw] lg:text-[12vw] leading-[100%] text-primary-foreground italic">{title2}</p>
            </div>
            {/* svg curve */}
            <SvgCurve />
        </div>
    )
}

export default Heading