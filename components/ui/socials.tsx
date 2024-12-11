import { FaGithub, FaHackerrank, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Button from "./button";

export default function Socials() {
    return (
        <div className="flex items-center flex-wrap gap-3">
            {
                socials.map((social, index) => (
                    <Button key={index} link={social.link} isIcon>
                        <span className="w-7 h-7 grid place-items-center">{social.icon}</span>
                    </Button>

                ))
            }

        </div>
    )
}



const socials = [
    {
        icon: <FaLinkedinIn className="w-4 h-4" />,
        link: "https://www.linkedin.com/in/sahil-khairnar-574636249/",
        username: "sahil-khairnar"
    },
    {
        icon: <FaGithub className="w-4 h-4" />,
        link: "https://github.com/SahilxxD",
        username: "sahil-khairnar"
    },
    {
        icon: < FaHackerrank className="w-4 h-4" />,
        link: "https://www.hackerrank.com/profile/sahilkhairnar271",
        username: "sahil-khairnar"
    },
    {
        icon: <FaWhatsapp className="w-4 h-4" />,
        link: "https://wa.link/3a4n3a",
        username: "sahil-khairnar"
    },
]