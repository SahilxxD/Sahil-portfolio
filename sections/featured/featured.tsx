import FeaturedCard from "@/components/card/featured/featured-card";
import ExpandableFeatured from "@/components/expandable/exapandable-featured";
import Heading from "@/components/heading/heading";
import { featuredData } from "@/data";

const MainFeaturedData = featuredData[0];

export default function Featured() {
    return (
        <div className="pt-8 px-3 lg:px-8">
            {/* Heading     */}
            <Heading number="01" title1="Featured" title2="Work" />
            <FeaturedCard
                active
                title={MainFeaturedData.title}
                tag={MainFeaturedData.tag}
                video={MainFeaturedData.video} />
            <div className="mt-24">
                <ExpandableFeatured />
            </div>
        </div>
    )
}

