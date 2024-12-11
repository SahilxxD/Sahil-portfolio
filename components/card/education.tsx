import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";


export default function Eduction() {
    return (
        <Card title="My Education">
            <Timeline>
                <TimelineItem
                    date="2020-2024"
                    title="B.Tech IT"
                    subtitle="Pillai"
                    link="https://www.pce.ac.in/"
                    tag="8.88"
                />
                <TimelineItem
                    date="2018-2020"
                    title="HSC"
                    subtitle="Vaze"
                    link="https://vazecollege.net/"
                    tag="76.4%"
                />
            </Timeline>

        </Card>

    )
}



