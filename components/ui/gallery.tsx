import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"
import Image from "next/image";
import Video from "../card/featured/video";
export default function Gallery() {
    return (
        // <div className="h-[550px] sm:h-[650px] md:h-full 2xl:h-[750px] w-full">
        //     <Video video={'/portfolio/components/ui/motivational.mp4'} active={true} />
        // </div>
        <div className="relative overflow-clip p-6 w-full items-center justify-center h-[550px] border border-border rounded-3xl">
            {/* Video */}
            <Video video={"/assets/videos/motivational.mp4"} active={true} />
        </div>
    )
}