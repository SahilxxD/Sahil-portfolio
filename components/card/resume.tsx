import { FaDownload } from "react-icons/fa";
import Button from "../ui/button";
import Card from "../ui/card";
import signature from "@/public/assets/images/me/signature (1).png"
import Image from "next/image";
import Socials from "../ui/socials";

export default function Resume() {
    return (
        <Card className="md:h-full 2xl:h-full">
            <p className="text-lg xl:text-xl font-medium text-primary-foreground">
                Motivated Gen AI Developer and Full-Stack Developer. Armed with around 1 year of experience of tinkering in full-stack playground. I&aposve got a toolbox
                that&&apos; overflowing with front-end sparkles and back-end muscle. Add a dash of AI cleverness and a lock-tight dedication to web security, and
                you&aposve got a recipe for online awesomeness. Ready for little
                internnet enchantment? Let&&apos; make your web dreams a screen reality!
                {/* Proficient in JavaScript, Python, Node.js, React, Spring Boot, MySQL,
                and MongoDB, with a strong focus on developing RESTful APIs, optimizing web applications for performance and security, and implementing microservices architectures.
                Experienced in Agile methodologies and cross-functional collaboration. Recently designed a Retrieval-Augmented Generation (RAG) AI model for PDF Q&A using Ollama,
                Lama3, and Langchain, achieving low-latency responses for large documents. Adept at delivering scalable solutions and driving innovation in system design.
                Eager to leverage technical expertise in forward-thinking projects to enhance efficiency and user experience. */}
            </p>
            <div className="mx-auto">
                <Image
                    src={signature}
                    alt="sahil khairnar"
                />

            </div>
            <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
                <Socials />
                <Button
                    link="https://drive.google.com/file/d/14wY1gMSwxfa4JgKQ2cyBz6WI0n4dY1qv/view?usp=sharing">
                    <FaDownload />
                    Resume
                </Button>
            </div>
        </Card>
    )
}