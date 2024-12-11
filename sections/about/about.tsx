import Background from "@/components/card/background";
import Certifications from "@/components/card/certifications";
import Courses from "@/components/card/courses";
import Eduction from "@/components/card/education";
import Experience from "@/components/card/experience";
import MeCard from "@/components/card/me";
import Resume from "@/components/card/resume";
import Stack from "@/components/card/stack";
import Heading from "@/components/heading/heading";
import Card from "@/components/ui/card";
import Gallery from "@/components/ui/gallery";


export default function About() {
    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading number="02" title1="About" title2="Me" />
            <div className="space-y-4 py-8">
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    {/* About Me */}
                    <MeCard />
                    <Resume />
                    <Background />

                    <div className="2xl:hidden space-y-4">
                        <Gallery />
                       
                    </div>

                </div>
                <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 2xl:grid-cols-3">
                    {/* About Me */}
                    <div className="space-y-4">
                        <Courses />
                        <Certifications />
                    </div>
                    <div className="space-y-4">
                        <Stack />
                        <Experience />

                    </div>
                    <div className="hidden 2xl:space-y-4 2xl:flex">
                        <Gallery />
                        
                    </div>
                    <div className="space-y-4">

                    </div>
                </div>
            </div>
        </div>
    )
}
