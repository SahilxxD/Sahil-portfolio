import ContactCard from "@/components/card/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/inputs";
import TextArea from "@/components/ui/text-area";
import { useRef, useState } from "react";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import { env } from "process";
export default function ContactSection() {
    const formRef = useRef<HTMLFormElement>(null!)
    const btnRef = useRef<HTMLButtonElement>(null!)
    const [sent, isSent] = useState(false)
    const [playKey, setPlayKey] = useState(0);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current!,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
        )
            .then(
                (result) => {
                    isSent(true)
                    setPlayKey((prevKey) => prevKey + 1);
                    console.log(result.text, sent);
                    console.log("message sent");
                    setTimeout(() => {
                        isSent(false);
                    }, 4000);
                },
                (error) => {
                    console.log("message not sent");
                    console.log(error.text);
                }
            )
    }

    return (
        <div className="pt-8 px-3 lg:px-8">
            <Heading number="03" title1="Contact" title2="Me" />
            <Card>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Contact cards */}
                    <div className="flex flex-col gap-8">
                        <ContactCard
                            link="tel:+919920879701"
                            title="Call me directly at"
                            icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
                            text="+91 - 99208 - 79701"
                            btnText="Call me"
                        />
                        <ContactCard
                            link="mailto:sahilkhairnar2025@gmail.com?"
                            title="Chat with me on"
                            icon={<MdEmail className="fill-[#333] text-lg " />}
                            text="Sahilkhairnar2025@gmail.com"
                            btnText="Email me"
                        />
                    </div>
                    <div className={cn("absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]", sent ? " " : "hidden")}>
                        <video src={"/assets/videos/Animation email.webm"}
                            key={playKey} // Unique key forces remount
                            loop={false}
                            muted
                            autoPlay={true}
                        />
                    </div>
                    {/* Contact Form */}
                    <form ref={formRef}
                        onSubmit={sendEmail}
                        className="lg:col-span-2 bg-secondary-background border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md">
                        <div className="flex flex-col lg:flex-row justify-between mb-4 gap-8">
                            <Input name="name" type="text" placeholder="Full Name" icon={<FaUser />} />
                            <Input name="email" type="email" placeholder="Email Aderess" icon={<MdEmail />} />
                        </div>

                        <div className="flex items-center justify-between mb-4 gap-8">
                            <Input name="subject" type="text" placeholder="Subject" icon={<MdSubject />} />
                        </div>
                        {/* Email  Body message */}
                        <TextArea name="message" placeholder="Your Message" icon={<FaProjectDiagram />} />
                        <div className="w-full flex justify-end">
                            <div onClick={() => btnRef.current?.click()}>
                                <Button className="!w-44 !py-3 !text-xl"
                                >Send <SiMinutemailer /></Button>
                            </div>
                        </div>
                        <button type="submit" className="hidden" ref={btnRef}></button>

                    </form>


                </div>
            </Card>

        </div>
    )
}
