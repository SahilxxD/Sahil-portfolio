import Image from "next/image"
import myImage from "@/public/assets/images/me/11.jpg"

export default function Profile() {
    return (<div className="flex items-center gap-x-2 transition-colors duration-75 text-primary-foreground">
        <div className="relative w-[100px] h-[100px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-joust to-green-benzol">
            <Image
                src={myImage}
                alt="Sahil khairnar photo"
                className="w-[95px] h-[95px] border-[0.2vw] border-blue-cosmos rounded-full object-fill"
            />
            {/* {online} */}
            <div className="w-3 h-3 rounded-full bg-green-benzol border border-blue-cosmos absolute right-0 bottom-5"></div>
        </div>
        {/* Name */}
        <div className="text-3xl font-medium">SAHIL KHAIRNAR</div>
    </div>
    )
}