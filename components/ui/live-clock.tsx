import { FC, useEffect, useState } from "react";
import moment from "moment-timezone";

interface LiveClockProps {
    city: string;
}

const LiveClock: FC<LiveClockProps> = ({ city }) => {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateClock = () => {
            const currentTime = moment().tz(city).format("HH:mm");
            setTime(currentTime);
        }

        const intervalId = setInterval(updateClock, 1000);

        return () => clearInterval(intervalId);

    }, [city])

    return (
        <div className="text-3xl text-secondary-foreground font-semibold">
            {
                time ? <div className="flex items-center justify-center gap-[0.5vw]">
                    <span>Mumbai</span>,
                    <span>{time}</span>
                </div> : <div>Loading...</div>
            }
        </div>
    )

}

export default LiveClock