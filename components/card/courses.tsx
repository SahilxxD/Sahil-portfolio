import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";


export default function Courses() {
    return (
        <Card title="My Courses">
            <Timeline>
                <TimelineItem
                    date=""
                    title="Gen Ai with Langchain & Huggingface"
                    subtitle="Udemy"
                    isCourse
                />
                <TimelineItem
                    date=""
                    title="Web Design & Development Course"
                    subtitle="Sheryians"
                    isCourse
                />
                <TimelineItem
                    date=""
                    title="Basic to Advance ReactJ"
                    subtitle="Udemy"
                    isCourse
                />
                <TimelineItem
                    date=""
                    title="Ethical Hacking from scratch 2024"
                    subtitle="Udemy"
                    isCourse
                />
            </Timeline>
        </Card>

    )
}



