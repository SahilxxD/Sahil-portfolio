import { cn } from "@/lib/utils"
import Link from "next/link"
import { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    link?: string
    isIcon?: boolean
    className?: string
}

const Button: FC<ButtonProps> = ({ children, className, link, isIcon }) => {
    return <>
        {
            link ? (<Link href={link} target="_blank" className="">
                <ButtonBody className={className} isIcon={isIcon}>
                    {children}
                </ButtonBody>
            </Link>) : (
                <ButtonBody className={className} isIcon={isIcon}>
                    {children}
                </ButtonBody>
            )
        }
    </>
}

interface ButtonProps {
    children: ReactNode;
    isIcon?: boolean;
    className?: string;

}

const ButtonBody: FC<ButtonProps> = ({ children, isIcon, className }) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center gap-2 bg-primary-background select-none rounded-full whitespace-nowrap text-primary-foreground text-sm font-medium hover:bg-white/[0.1] transition-colors duration-100",
                className,
                isIcon ? "h-10 w-10" : "h-full w-max px-3 py-2"
            )}
        >
            {children}
        </div>
    );
}

export default Button;