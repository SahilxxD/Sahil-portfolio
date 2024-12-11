import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";


export default function Certifications() {
    return (
        <Card title="My Certicifications">
            <Timeline>
                <TimelineItem
                    date="2024"
                    title="ISO/IEC 27001:2022"
                    subtitle="Security"
                    link="https://drive.google.com/file/d/18H3kQglo6A9iVlbgYe7RVuidgmN1mxT6/view?usp=sharing"
                />
                <TimelineItem
                    date="2023"
                    title="Java Programming"
                    subtitle="Coding"
                    link="https://www.hackerrank.com/certificates/0d1311680f78"
                />
                <TimelineItem
                    date="2023"
                    title="Python Programming"
                    subtitle="Coding"
                    link="https://www.hackerrank.com/certificates/e88f8a5d4011"
                />
                <TimelineItem
                    date="2023"
                    title="DSA Problem Solving"
                    subtitle="Coding"
                    link="https://www.hackerrank.com/certificates/1a7ad1d792eb"
                />
            </Timeline>
        </Card>

    )
}



