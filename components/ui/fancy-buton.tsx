import Link from "next/link"
import { FC, ReactNode } from "react"


interface FancyButtonProps {
    text: string
    icon: ReactNode
    link?: string
}

const FancyButton: FC<FancyButtonProps> = ({ text, icon, link }) => {
    //const link = "https://drive.google.com/file/d/14wY1gMSwxfa4JgKQ2cyBz6WI0n4dY1qv/view?usp=sharing";

    return (
        <Link href={link ? link : "#"} target="_blank" className="fancy-btn">

            <div className="group bg-black hover:bg-transparent text-primary-foreground hover:text-black rounded-[108em] py-5 px-10 flex items-center gap-2 font-bold text-2xl cursor-pointer transition-all duration-75">
                <span>{text}</span>
                <span className="group-hover:translate-x-[.75vw] transition-transform duration-100">{icon}</span>
            </div>
        </Link>
    )
}

export default FancyButton

