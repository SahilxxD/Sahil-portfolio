import FancyButton from "@/components/ui/fancy-buton";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
    return (<div className="w-full flex items-center justify-center md:justify-between">
        <Profile />
        <div className="hidden md:inline">
            <MagneticWrapper>
                <FancyButton link="https://drive.google.com/file/d/14wY1gMSwxfa4JgKQ2cyBz6WI0n4dY1qv/view?usp=sharing" text="Resume"
                    icon={<FaArrowRight />} />
            </MagneticWrapper>
        </div>
    </div>)
}