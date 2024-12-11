import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";


export default function Experience() {
    return (
        <Card title="My Experience">
            <Timeline>
                <TimelineItem
                    date="OCT - NOV"
                    title="Gen AI Developer"
                    subtitle="Idolize"
                    link="https://www.idolizesolutions.com/"
                    tag="Onsite"
                />
                <TimelineItem
                    date="2023-2024"
                    title="Full stack Developer"
                    subtitle="VFS"
                    link="https://vfsglobal.com/"
                    tag="Onsite"
                />
            </Timeline>

        </Card>

    )
}

